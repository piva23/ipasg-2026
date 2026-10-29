import os
os.chdir(r"D:\CORE\projects\ipasg-2026")

with open("assessoria.html", encoding="utf-8") as f:
    content = f.read()

import re

print('=== VERIFICATION FINAL ===')
print()

# 1. Check btn-leia-mais buttons
btn_matches = list(re.finditer(r'class="btn-leia-mais"', content))
print(f'1. btn-leia-mais buttons (HTML): {len(btn_matches)}')
for i, m in enumerate(btn_matches):
    start = m.start()
    end = content.find('</a>', start) + 4
    button = content[start:end]
    dc_match = re.search(r'data-card="(\d+)"', button)
    card = dc_match.group(1) if dc_match else 'N/A'
    print(f'   Button {i+1}: {button[:70]}... data-card={card}')

print()

# 2. Check modal elements
print(f'2. leia-mais-modal: {"leia-mais-modal" in content}')
print(f'   fechar-btn count: {content.count("fechar-btn")}')

print()

# 3. Check JavaScript
print(f'3. JavaScript modal variable: {"var modal" in content}')
print(f'   Event listeners: {"addEventListener" in content}')

print()

# 4. Check card CSS (reverted to initial)
idx = content.find('.servicos-grid')
if idx >= 0:
    print(f'4. .servicos-grid CSS:')
    print(f'   {content[idx:idx+200]}')

print()

# 5. Check data-card values
cards = re.findall(r'data-card="(\d+)"', content)
print(f'5. data-card values: {cards}')

print()
print('=== Verification complete ===')