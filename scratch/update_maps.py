import re
import urllib.parse

def main():
    file_path = "c:/Users/S6sak/yuzuki-site/src/data/areas.ts"
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # We need to find each area object, extract its name, and replace its googleMapUrl.
    # A simple way is to match `name: "...",` and the subsequent `googleMapUrl: "...",`
    # Let's iterate through the file and replace lines.
    
    lines = content.split('\n')
    current_name = None
    
    for i, line in enumerate(lines):
        name_match = re.search(r'name:\s*"([^"]+)"', line)
        if name_match:
            current_name = name_match.group(1)
        
        map_match = re.search(r'googleMapUrl:\s*"https://www.google.com/maps/embed\?pb=[^"]+"', line)
        if map_match and current_name:
            # urlencode the query: name + "駅"
            query = urllib.parse.quote(current_name + "駅")
            new_url = f'https://maps.google.com/maps?q={query}&t=m&z=15&output=embed&iwloc=near'
            lines[i] = re.sub(r'googleMapUrl:\s*"[^"]+"', f'googleMapUrl: "{new_url}"', line)

    with open(file_path, "w", encoding="utf-8") as f:
        f.write('\n'.join(lines))
        
if __name__ == "__main__":
    main()
