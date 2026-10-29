import os
os.chdir(r"D:\CORE\projects\ipasg-2026")

with open("assessoria.html", encoding="utf-8", errors="ignore") as f:
    c = f.read()

with open("assets/css/assessoria.css", encoding="utf-8", errors="ignore") as f:
    css = f.read()

import re

print('=== Current State ===')
print()

# Check hero data
print('1. Hero data:')
for d in ['60%', '95%', '100%', 'redução de resíduos', 'economia de água', 'energia renovável', 'infografico', 'dado']:
    found = d in c
    status = 'FOUND' if found else 'REMOVED'
    print(f'   {d}: {status}')

# Check modal
print()
print('2. Modal in HTML:')
modal_div = '<div id="leia-mais-modal"' in c
modal_comment = '<!-- Modal Ler Mais -->' in c
print(f'   Modal div: {modal_div}')
print(f'   Modal comment: {modal_comment}')

# Check btn-leia-mais
print()
print('3. btn-leia-mais:')
btn_count = len(re.findall(r'class="btn-leia-mais"', c))
print(f'   count: {btn_count}')

# Check CSS text-align
print()
print('4. CSS text-align justify in cards:')
idx = css.find('.servico-card__body p')
if idx >= 0:
    bc = 0
    end = idx
    for i in range(idx, len(css)):
        if css[i] == '{': bc += 1
        elif css[i] == '}': bc -= 1
        if bc == 0 and i > idx: end = i; break
    rule = css[idx:end+1]
    print(f'   .servico-card__body p rule: {rule[:200]}')
    print(f'   Has text-align justify: {"text-align: justify" in rule}')