import os
os.chdir(r"D:\CORE\projects\ipasg-2026")

with open("assets/css/assessoria.css", encoding="utf-8") as f:
    css = f.read()

# Find servo-card related rules
for pattern in ['.servico-card__body', 'servico-card__body p']:
    idx = css.find(pattern)
    if idx >= 0:
        print(f'Found "{pattern}" at position {idx}')
        # Get the rule
        end = idx
        bc = 0
        for i in range(idx, len(css)):
            if css[i] == '{': bc += 1
            elif css[i] == '}': bc -= 1
            if bc == 0 and i > idx: 
                end = i; break
        rule = css[idx:end+1]
        print(f'Rule: {rule[:200]}')
        print()