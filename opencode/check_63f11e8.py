import os
os.chdir(r"D:\CORE\projects\ipasg-2026")

with open("assessoria.html", encoding="utf-8") as f:
    c = f.read()

import re

print('=== VERIFICATION AT 63f11e8 ===')
print()

print('btn-leia-mais:', c.count('btn-leia-mais'))
print('leia-mais-modal:', 'leia-mais-modal' in c)
print('var modal:', 'var modal' in c)
cards = re.findall(r'data-card="(\d+)"', c)
print('data-card values:', cards)

with open("assets/css/assessoria.css", encoding="utf-8") as f:
    css = f.read()

print('banner-stats display none:', '.banner-stats { display: none' in css)
print('depoimento-section display none:', '.depoimento-section { display: none' in css)