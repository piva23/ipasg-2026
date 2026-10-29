import os
os.chdir(r"D:\CORE\projects\ipasg-2026")

with open("assessoria.html", encoding="utf-8") as f:
    content = f.read()

# Fix card 3's data-card from '2' to '3'
# The third button has data-card='2', needs to be '3'
# Look for the pattern and replace specifically

# Find all occurrences of data-card="2" >Ler Mais
# There should be two: one for card 2 and one for card 3 (which needs to be 3)
import re

# Find positions of data-card="2"
matches = [(m.start(), m.end()) for m in re.finditer(r'data-card="2"', content)]
print(f"data-card='2' positions: {len(matches)}")
for i, (start, end) in enumerate(matches):
    ctx = content[start-10:end+10]
    print(f"  Match {i+1}: {ctx}")

# The first data-card="2" is for card 2, the second is for card 3 (bug)
# Let me replace the second occurrence with data-card="3"

# Actually, let me just replace data-card="2">Ler Mais</a> with data-card="3">Ler Mais</a>
# but only the second occurrence

# Find the second occurrence
count = 0
idx = -1
for m in re.finditer(r'data-card="2"", content):
    count += 1
    if count == 2:
        idx = m.start()
        break

print(f"\\nSecond data-card='2' at position: {idx}")

if idx >= 0:
    # Get context
    ctx = content[idx:idx+30]
    print(f"Context: {ctx}")
    
    # Replace data-card="2" with data-card="3" at this position
    # Need to find the full button string
    # The pattern is: data-card="2">Ler Mais</a>
    
    # Let me just replace the specific substring
    old_str = 'data-card="2"'
    new_str = 'data-card="3"'
    # Replace only the second occurrence
    # Actually, string replace replaces all. Let me do it manually.
    
    # Split and replace
    before = content[:idx]
    after = content[idx:]
    # Find and replace within after
    idx2 = after.find(old_str)
    if idx2 >= 0:
        after = after[:idx2] + new_str + after[idx2+len(old_str):]
        content = before + after
        print("Replaced data-card from 2 to 3 (second occurrence)")
    
with open("assessoria.html", "w", encoding="utf-8") as f:
    f.write(content)

print("\\nFinal data-card values:")
# Check
cards = re.findall(r'data-card="(\d+)"', content)
print(cards)

# Count btn-leia-mais (HTML only, not JS)
btn_count = len(re.findall(r'class="btn-leia-mais"', content))
print(f"HTML btn-leia-mais count: {btn_count}")