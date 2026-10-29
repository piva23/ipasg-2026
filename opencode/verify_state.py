import os
os.chdir(r"D:\CORE\projects\ipasg-2026")

with open("assessoria.html", encoding="utf-8") as f:
    c = f.read()

with open("assets/css/assessoria.css", encoding="utf-8") as f:
    css = f.read()

import re

print('=== Current state verification ===')
print()

# btn-leia-mais
btn_count = len(re.findall(r'class="btn-leia-mais"', c))
print(f'btn-leia-mais buttons: {btn_count}')

# data-card values
cards = re.findall(r'data-card="(\d+)"', c)
print(f'data-card values: {cards}')

# modal
print(f'leia-mais-modal: {"leia-mais-modal" in c}')
print(f'fechar-btn: {c.count("fechar-btn")}')
print(f'var modal: {"var modal" in c}')

# JavaScript event listeners
print(f'addEventListener: {"addEventListener" in c}')

# Check CSS card properties
# .servicos-grid
idx = css.find('.servicos-grid')
if idx >= 0:
    bc = 0
    end = idx
    for i in range(idx, len(css)):
        if css[i] == '{': bc += 1
        elif css[i] == '}': bc -= 1
        if bc == 0 and i > idx:
            end = i
            break
    print(f'.servicos-grid: {css[idx:end+1]}')

# .servico-card__thumb
idx = css.find('.servico-card__thumb')
if idx >= 0:
    bc = 0
    end = idx
    for i in range(idx, len(css)):
        if css[i] == '{': bc += 1
        elif css[i] == '}': bc -= 1
        if bc == 0 and i > idx:
            end = i
            break
    print(f'.servico-card__thumb: {css[idx:end+1]}')

# Hero stats
print(f'\\nbanner-stats display none: { ".banner-stats { display: none" in css}')

# Depoimento
print(f'.depoimento-section display none: { ".depoimento-section { display: none" in css}')

# Lead text align
print(f'.assessoria-banner p.lead text-align justify: { ".assessoria-banner p.lead { text-align: justify" in css}')