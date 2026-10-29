import os
os.chdir(r"D:\CORE\projects\ipasg-2026")

with open("assets/css/assessoria.css", encoding="utf-8") as f:
    css = f.read()

# Replace the .servico-card__body p rule to add text-align: justify
old_rule = '.servico-card__body p  { font-size: 15px; color: var(--muted); line-height: 1.75; flex-grow: 1; margin-bottom: 22px; }'
new_rule = '.servico-card__body p  { font-size: 15px; color: var(--muted); line-height: 1.75; flex-grow: 1; margin-bottom: 22px; text-align: justify; }'

if old_rule in css:
    css = css.replace(old_rule, new_rule)
    print('Added text-align: justify to .servico-card__body p rule')
else:
    # Try without the double space
    old_rule2 = '.servico-card__body p{ font-size: 15px; color: var(--muted); line-height: 1.75; flex-grow: 1; margin-bottom: 22px; }'
    if old_rule2 in css:
        css = css.replace(old_rule2, new_rule)
        print('Added text-align: justify to .servico-card__body p rule (variant 2)')
    else:
        print('Old rule not found, showing context')
        idx = css.find('.servico-card__body p')
        if idx >= 0:
            print(css[idx:idx+100])

with open("assets/css/assessoria.css", "w", encoding="utf-8") as f:
    f.write(css)

print("CSS updated")