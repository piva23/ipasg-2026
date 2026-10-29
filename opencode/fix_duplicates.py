import os
os.chdir(r"D:\CORE\projects\ipasg-2026")

with open("assessoria.html", encoding="utf-8") as f:
    content = f.read()

# Remove the duplicate buttons from the JS section (buttons 4, 5, 6)
# These are inside the <script> tag, remove the data-card references and btn-leia-mais

script_start = content.find('<script>')
script_end = content.find('</script>') + len('</script>')

script_section = content[script_start:script_end]

# Remove btn-leia-mais references from the script
# Also remove data-card attributes
script_clean = script_section
# Remove the specific lines with btn-leia-mais and data-card
lines = script_clean.split('\n')
new_lines = []
for line in lines:
    if 'btn-leia-mais' in line or 'data-card' in line:
        continue  # skip these lines
    new_lines.append(line)

script_clean = '\n'.join(new_lines)

# Replace the script section
content = content[:script_start] + script_clean + content[script_end:]

with open("assessoria.html", "w", encoding="utf-8") as f:
    f.write(content)

print("Duplicate buttons removed from script section")

# Now fix card 3's data-card attribute from "2" to "3"
with open("assessoria.html", encoding="utf-8") as f:
    content = f.read()

# Find data-card="2" in the card section and change to data-card="3" for the third card
# The third card's button should have data-card="3"
# Let me find and replace

# First, check current state
import re
cards = re.findall(r'data-card="(\d+)"', content)
print(f"data-card values after fix: {cards}")

# Count btn-leia-mais
count = content.count('btn-leia-mais')
print(f"btn-leia-mais count after fix: {count}")