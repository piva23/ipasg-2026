import os
os.chdir(r"D:\CORE\projects\ipasg-2026")

with open("assessoria.html", encoding="utf-8") as f:
    c = f.read()

with open("assets/css/assessoria.css", encoding="utf-8") as f:
    css = f.read()

import re

print('=== User Feedback Check ===')
print()

# Check for data attributes in hero (60%, 95%, 100%)
print('1. Hero data attributes:')
for pattern in ['60%', '95%', '100%', 'redução de resíduos', 'economia de água', 'energia renovável']:
    if pattern in c:
        print(f'   "{pattern}": FOUND in HTML')
    else:
        print(f'   "{pattern}": NOT FOUND in HTML')

# Check modal in HTML
print(f'\\n2. Modal in HTML: {"leia-mais-modal" in c}')

# Check btn-leia-mais
btn_count = len(re.findall(r'class="btn-leia-mais"', c))
print(f'\\n3. btn-leia-mais buttons: {btn_count}')

# Check CSS
print(f'\\n4. CSS checks:')
print(f'   .banner-stats in CSS: {".banner-stats" in css}')
idx = css.find('.banner-stats')
if idx >= 0:
    end = idx
    bc = 0
    for i in range(idx, len(css)):
        if css[i] == '{': bc += 1
        elif css[i] == '}': bc -= 1
        if bc == 0 and i > idx: end = i; break
    rule = css[idx:end+1]
    print(f'   banner-stats rule: {rule[:150]}')

idx = css.find('.depoimento-section')
if idx >= 0:
    end = idx
    bc = 0
    for i in range(idx, len(css)):
        if css[i] == '{': bc += 1
        elif css[i] == '}': bc -= 1
        if bc == 0 and i > idx: end = i; break
    rule = css[idx:end+1]
    print(f'   depoimento-section rule: {rule[:150]}')

idx = css.find('.assessoria-banner p.lead')
if idx >= 0:
    end = idx
    bc = 0
    for i in range(idx, len(css)):
        if css[i] == '{': bc += 1
        elif css[i] == '}': bc -= 1
        if bc == 0 and i > idx: end = i; break
    rule = css[idx:end+1]
    print(f'\\n   lead rule has text-align justify: {"text-align: justify" in rule}')
    print(f'   lead rule: {rule[:200]}')

# Check card text justify
print(f'\\n5. Card text justification:')
# Check if card body p has text-align justify
idx = css.find('.servico-card__body p')
if idx >= 0:
    # Find font-size
    idx2 = css.find('font-size', idx)
    if idx2 >= 0:
        end2 = css.find(';', idx2)
        if end2 >= 0:
            print(f'   .servico-card__body p font-size: {css[idx2:end2+1]}')

# Check for text-align in card body
idx = css.find('text-align')
occurrences = [(m.start(), m.end()) for m in __import__('re').finditer('text-align', css)]
print(f'   text-align occurrences: {len(occurrences)}')
for pos in occurrences:
    ctx = css[max(0,pos[0]-30):pos[1]+30]
    print(f'   Context: ...{ctx}...')