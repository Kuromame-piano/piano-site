import re
import os
import shutil

def find_matching_brace(text, start_idx):
    brace_count = 1
    idx = start_idx + 1
    in_string = None # None, "'", '"', or '`'
    escaped = False
    
    while idx < len(text):
        char = text[idx]
        
        if escaped:
            escaped = False
            idx += 1
            continue
            
        if char == '\\':
            escaped = True
            idx += 1
            continue
            
        if in_string:
            if char == in_string:
                in_string = None
        else:
            if char in ("'", '"', '`'):
                in_string = char
            elif char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    return idx + 1
        idx += 1
    return -1

def parse_proposal(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        text = f.read()
    
    blocks = re.split(r'\n-+\n', text)
    
    parsed_areas = {}
    for block in blocks:
        block = block.strip()
        if not block:
            continue
        name_match = re.search(r'^##\s+(\S+)', block, re.MULTILINE)
        if not name_match:
            continue
        area_name = name_match.group(1).strip()
        
        points_header_pattern = r'###\s+' + re.escape(area_name) + r'エリアでレッスンを続けるためのポイント'
        points_match = re.search(points_header_pattern, block)
        if not points_match:
            points_match = re.search(r'###\s+.*エリアでレッスンを続けるためのポイント', block)
            
        area_guide = ""
        consultations_text = block
        if points_match:
            points_start = points_match.end()
            area_guide = block[points_start:].strip()
            consultations_text = block[:points_match.start()]
            
        consultations_text_norm = consultations_text.replace('\r\n', '\n')
        cards = re.findall(r'\*\*(.*?)\*\*\n+([^\n]+)', consultations_text_norm)
        consultations = []
        for title, desc in cards:
            consultations.append({
                "title": title.strip(),
                "description": desc.strip()
            })
            
        parsed_areas[area_name] = {
            "name": area_name,
            "consultations": consultations,
            "area_guide": area_guide.replace('\r\n', '\n').strip()
        }
    return parsed_areas

def update_area_block(block_str, data):
    # Update consultations
    new_consultations = []
    new_consultations.append("consultations: [")
    for i, c in enumerate(data["consultations"]):
        title_esc = c["title"].replace('\\', '\\\\').replace('"', '\\"')
        desc_esc = c["description"].replace('\\', '\\\\').replace('"', '\\"')
        new_consultations.append("            {")
        new_consultations.append(f'                title: "{title_esc}",')
        new_consultations.append(f'                description: "{desc_esc}"')
        if i == len(data["consultations"]) - 1:
            new_consultations.append("            }")
        else:
            new_consultations.append("            },")
    new_consultations.append("        ],")
    new_consultations_str = "\n".join(new_consultations)
    
    # Locate consultations array start and end in block_str
    start_idx = block_str.find("consultations: [")
    if start_idx == -1:
        raise ValueError("consultations: [ not found in block")
        
    bracket_count = 1
    end_idx = start_idx + len("consultations: [")
    while bracket_count > 0 and end_idx < len(block_str):
        if block_str[end_idx] == '[':
            bracket_count += 1
        elif block_str[end_idx] == ']':
            bracket_count -= 1
        end_idx += 1
        
    if end_idx < len(block_str) and block_str[end_idx] == ',':
        end_idx += 1
        
    block_str = block_str[:start_idx] + new_consultations_str + block_str[end_idx:]
    
    # Update areaGuide
    guide_idx = block_str.find("areaGuide:")
    if guide_idx == -1:
        raise ValueError("areaGuide: not found in block")
        
    quote_char_idx = guide_idx + len("areaGuide:")
    while quote_char_idx < len(block_str) and block_str[quote_char_idx] not in ('`', '"', "'"):
        quote_char_idx += 1
        
    if quote_char_idx == len(block_str):
        raise ValueError("Quote character for areaGuide not found")
        
    quote_char = block_str[quote_char_idx]
    closing_quote_idx = quote_char_idx + 1
    while closing_quote_idx < len(block_str):
        if block_str[closing_quote_idx] == quote_char:
            if block_str[closing_quote_idx - 1] != '\\':
                break
        closing_quote_idx += 1
        
    if closing_quote_idx == len(block_str):
        raise ValueError("Closing quote character for areaGuide not found")
        
    end_guide_idx = closing_quote_idx + 1
    if end_guide_idx < len(block_str) and block_str[end_guide_idx] == ',':
        end_guide_idx += 1
        
    guide_esc = data["area_guide"].replace('\\', '\\\\').replace('"', '\\"')
    # We will output guide inside double quotes to match
    new_guide_str = f'areaGuide: "{guide_esc}",'
    
    block_str = block_str[:guide_idx] + new_guide_str + block_str[end_guide_idx:]
    return block_str

def main():
    proposal_path = r"c:\Users\S6sak\yuzuki-site\proposal.md"
    areas_path = r"c:\Users\S6sak\yuzuki-site\src\data\areas.ts"
    backup_path = areas_path + ".bak"
    
    # Create backup
    shutil.copy2(areas_path, backup_path)
    print("Created backup of areas.ts at areas.ts.bak")
    
    proposal_data = parse_proposal(proposal_path)
    print(f"Parsed {len(proposal_data)} areas from proposal.md")
    
    with open(areas_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Get mapping of area names to slugs from content
    slugs = re.findall(r'slug:\s*["\']([^"\']+)["\']', content)
    
    # We will modify content in segments
    # Since indices change, we should either run from end to start, or rebuild the file block-by-block.
    # Rebuilding block-by-block is very clean:
    # 1. Split content by the opening braces of the area blocks, or find indices of all blocks, 
    # and replace them in descending order of indices (from right to left) so that indices remain correct!
    
    # Let's collect all block positions: (start_brace, end_brace, slug, name)
    blocks = []
    for slug in slugs:
        slug_pattern = r'slug:\s*["\']' + re.escape(slug) + r'["\']'
        slug_match = re.search(slug_pattern, content)
        slug_pos = slug_match.start()
        start_brace = content.rfind('{', 0, slug_pos)
        end_brace = find_matching_brace(content, start_brace)
        block = content[start_brace:end_brace]
        name_match = re.search(r'name:\s*["\']([^"\']+)["\']', block)
        if name_match:
            name = name_match.group(1)
            blocks.append((start_brace, end_brace, slug, name))
            
    # Sort blocks by start position descending
    blocks.sort(key=lambda x: x[0], reverse=True)
    
    modified_content = content
    for start, end, slug, name in blocks:
        if name not in proposal_data:
            print(f"Warning: {name} ({slug}) not found in proposal data! Skipping.")
            continue
            
        block_str = modified_content[start:end]
        data = proposal_data[name]
        updated_block = update_area_block(block_str, data)
        
        modified_content = modified_content[:start] + updated_block + modified_content[end:]
        print(f"Updated copy for {name} ({slug})")
        
    with open(areas_path, "w", encoding="utf-8") as f:
        f.write(modified_content)
    print("Successfully updated areas.ts!")

if __name__ == "__main__":
    main()
