import os
os.chdir(r"D:\CORE\projects\ipasg-2026")

with open("assets/css/assessoria.css", encoding="utf-8") as f:
    content = f.read()

import re

print('=== CSS VERIFICATION ===')
print()

# .servicos-grid
idx = content.find('.servicos-grid')
if idx >= 0:
    # Find the full rule by counting braces
    brace_count = 0
    end = idx
    for i in range(idx, len(content)):
        if content[i] == '{':
            brace_count += 1
        elif content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                end = i
                break
    rule = content[idx:end+1]
    print('.servicos-grid:')
    print(rule)
    print()

# .servico-card__thumb
idx = content.find('.servico-card__thumb')
if idx >= 0:
    brace_count = 0
    end = idx
    for i in range(idx, len(content)):
        if content[i] == '{':
            brace_count += 1
        elif content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                end = i
                break
    rule = content[idx:end+1]
    print('.servico-card__thumb:')
    print(rule)
    print()

# .servico-card__body h3
idx = content.find('.servico-card__body h3')
if idx >= 0:
    # Just find font-size
    fs_idx = content.find('font-size', idx)
    if fs_idx >= 0:
        end_fs = content.find(';', fs_idx)
        if end_fs >= 0:
            print(f'.servico-card__body h3 font-size: {content[fs_idx:end_fs+1]}')
    print()

# .servico-card__body p
idx = content.find('.servico-card__body p')
if idx >= 0:
    fs_idx = content.find('font-size', idx)
    if fs_idx >= 0:
        end_fs = content.find(';', fs_idx)
        if end_fs >= 0:
            print(f'.servico-card__body p font-size: {content[fs_idx:end_fs+1]}')
    print()

# Check for hero/stats/depoimento changes (should be preserved)
print('Hero/stats/depoimento preserved:')
print(f'   .banner-stats display none: { ".banner-stats { display: none" in content}')
print(f'   .depoimento-section display none: { ".depoimento-section { display: none" in content}')
print(f'   .assessoria-banner p.lead text-align justify: { ".assessoria-banner p.lead { text-align: justify" in content}')