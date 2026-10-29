import os
os.chdir(r"D:\CORE\projects\ipasg-2026")

with open("assessoria.html", encoding="utf-8") as f:
    content = f.read()

# Count occurrences of data-card='2'>Ler Mais'</a>
occurrences = []
start = 0
while True:
    idx = content.find('data-card="2">Ler Mais</a>', start)
    if idx == -1:
        break
    occurrences.append(idx)
    start = idx + 1

print(f"Occurrences: {len(occurrences)}")
for i, pos in enumerate(occurrences):
    print(f"  {i+1}: {pos}")

# Replace the second occurrence
if len(occurrences) >= 2:
    pos = occurrences[1]
    old = 'data-card="2">Ler Mais</a>'
    new = 'data-card="3">Ler Mais</a>'
    content = content[:pos] + new + content[pos+len(old):]
    print(f"Replaced at position {pos}")

with open("assessoria.html", "w", encoding="utf-8") as f:
    f.write(content)

print("Done")

# Verify
with open("assessoria.html", encoding="utf-8") as f:
    c = f.read()

# Count data-card occurrences manually
dc_count = c.count('data-card="')
print(f"data-card total count: {dc_count}")

# Find all data-card values
import re
cards = re.findall(r'data-card="(\d+)"', c)
print(f"data-card values: {cards}")

# Count HTML btn-leia-mais (not JS)
btn_count = len(re.findall(r'class="btn-leia-mais"', c))
print(f"HTML btn-leia-mais count: {btn_count}")