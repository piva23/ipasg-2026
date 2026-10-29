import os
os.chdir(r"D:\CORE\projects\ipasg-2026")

with open("assessoria.html", encoding="utf-8") as f:
    c = f.read()

with open("assets/css/assessoria.css", encoding="utf-8") as f:
    css = f.read()

print('=== Current state at 63f11e8 ===')
print()

# Check for depoimento
depo_idx = css.find('.depoimento')
if depo_idx >= 0:
    # Get the rule
    bc = 0
    end = depo_idx
    for i in range(depo_idx, len(css)):
        if css[i] == '{': bc += 1
        elif css[i] == '}': bc -= 1
        if bc == 0 and i > depo_idx:
            end = i
            break
    print('Depoimento CSS:')
    print(css[depo_idx:end+1])
    print()

# Check HTML for depoimento section
depo_html_idx = c.find('<section')
if depo_html_idx >= 0:
    # Find the depoimento section
    print('Depoimento HTML:')
    print(c[depo_html_idx:depo_html_idx+300])
    print()

# Check modal
print('Modal in HTML:', 'leia-mais-modal' in c)
print('var modal in JS:', 'var modal' in c)

# Check hero CSS
hero_idx = css.find('.assessoria-banner')
if hero_idx >= 0:
    bc = 0
    end = hero_idx
    for i in range(hero_idx, len(css)):
        if css[i] == '{': bc += 1
        elif css[i] == '}': bc -= 1
        if bc == 0 and i > hero_idx:
            end = i
            break
    print('Hero CSS:')
    print(css[hero_idx:end+1])