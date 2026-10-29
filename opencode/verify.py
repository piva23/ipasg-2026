import codecs
with open('assessoria.html', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Count btn-leia-mais
count = content.count('btn-leia-mais')
print(f'btn-leia-mais count: {count}')

# Check data-card attributes
import re
cards = re.findall(r'data-card="(\d+)"', content)
print(f'data-card values: {cards}')

# Check modal
print(f'leia-mais-modal: {"leia-mais-modal" in content}')
print(f'fechar-btn: {content.count("fechar-btn")}')

# Show .servicos-grid CSS context
idx = content.find('.servicos-grid')
if idx >= 0:
    print()
    print('.servicos-grid:')
    print(content[idx:idx+300])