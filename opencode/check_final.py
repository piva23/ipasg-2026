import os
os.chdir(r"D:\CORE\projects\ipasg-2026")

with open("assessoria.html", encoding="utf-8", errors="ignore") as f:
    c = f.read()

import re

print('=== Final State Check ===')
print()

# 1. Check hero data (60%, 95%, 100%)
print('1. Hero data removal:')
for pattern in ['60%', '95%', '100%', 'redução de resíduos', 'economia de água', 'energia renovável', 'infografico', 'dado']:
    found = pattern in c
    status = 'FOUND' if found else 'REMOVED'
    print(f'   {pattern}: {status}')

# 2. Check modal
print()
print('2. Modal in HTML:')
print(f'   leia-mais-modal: {"leia-mais-modal" in c}')

# 3. Check btn-leia-mais
print()
print('3. btn-leia-mais buttons:')
btn_count = len(re.findall(r'class="btn-leia-mais"', c))
print(f'   count: {btn_count}')

# 4. Check CSS card text justify
print()
print('4. CSS card text justification:')
with open("assets/css/assessoria.css", encoding="utf-8", errors="ignore") as f:
    css = f.read()

# Check .servico-card__body p
idx = css.find('.servico-card__body p')
if idx >= 0:
    # Get the rule
    end = idx
    bc = 0
    for i in range(idx, len(css)):
        if css[i] == '{': bc += 1
        elif css[i] == '}': bc -= 1
        if bc == 0 and i > idx: end = i; break
    rule = css[idx:end+1]
    print(f'   .servico-card__body p rule: {rule}')
    print(f'   Has text-align justify: {"text-align: justify" in rule}')
else:
    print('   .servico-card__body p rule not found')

# Check .servico-card__body h3
idx = css.find('.servico-card__body h3')
if idx >= 0:
    end = idx
    bc = 0
    for i in range(idx, len(css)):
        if css[i] == '{': bc += 1
        elif css[i] == '}': bc -= 1
        if bc == 0 and i > idx: end = i; break
    rule = css[idx:end+1]
    print(f'   .servico-card__body h3 rule: {rule[:150]}')
    print(f'   Has text-align justify: {"text-align: justify" in rule}')