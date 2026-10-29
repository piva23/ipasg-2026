import os
os.chdir(r"D:\CORE\projects\ipasg-2026")

with open("assessoria.html", encoding="utf-8") as f:
    c = f.read()

import re

# 1. Remove the modal section (from <!-- Modal Ler Mais --> to before Outras Especialidades)
modal_comment_start = c.find('<!-- Modal Ler Mais -->')
if modal_comment_start >= 0:
    # Find 'Outras Especialidades' position
    outras_pos = c.find('Outras Especialidades')
    if outras_pos >= 0:
        # Remove from modal comment to just before 'Outras Especialidades'
        # But also need to remove any leftover from the insertion
        # The modal was inserted before 'Outras Especialidades', so we remove from the comment
        # to just before 'Outras Especialidades'
        new_c = c[:modal_comment_start] + c[outras_pos:]
        c = new_c
        print(f"1. Modal removed from HTML, new length: {len(c)}")

# 2. Remove hero data (60%, 95%, 100% infographic data)
# Look for the infographic data in the hero section
# The hero stats were: <span class="dado">60%</span> de redução de resíduos, etc.
# Remove these data attributes
patterns_to_remove = [
    '60% de redução de resíduos',
    '95% de economia de água', 
    '100% de energia renovável',
    'infografico',
    'dado',
]

for pattern in patterns_to_remove:
    if pattern in c:
        c = c.replace(pattern, '')
        print(f"2. Removed '{pattern}' from HTML")

# Also remove any empty divs or leftover structure
# Remove multiple newlines
c = re.sub(r'\n\s*\n\s*\n', '\n\n', c)

with open("assessoria.html", "w", encoding="utf-8") as f:
    f.write(c)

print("2. HTML updated - hero data removed")

# 3. Remove modal JavaScript
js_start = c.find('<script>')
if js_start >= 0:
    js_end = c.find('</script>') + len('</script>')
    js_section = c[js_start:js_end]
    # Remove the modal initialization code
    modal_js_patterns = [
        "var modal = document.getElementById('leia-mais-modal')",
        "btn-leia-mais",
        "fecharModal",
        "addEventListener",
        "modal.style.display",
    ]
    removed_any = False
    for pattern in modal_js_patterns:
        if pattern in js_section:
            js_section = js_section.replace(pattern, '')
            removed_any = True
    
    if removed_any:
        # Also check if the script is now empty or mostly empty
        if len(js_section.strip()) < 50:
            # Remove the entire script tag
            c = c[:js_start] + c[js_end:]
            print("3. JavaScript section removed (was modal code)")
        else:
            c = c[:js_start] + js_section + c[js_end:]
            print("3. JavaScript updated (modal code removed)")
    else:
        print("3. No modal JavaScript found to remove")

with open("assessoria.html", "w", encoding="utf-8") as f:
    f.write(c)

print("3. JavaScript updated")

# 4. Add text-align: justify to .servico-card__body p in CSS
with open("assets/css/assessoria.css", encoding="utf-8") as f:
    css = f.read()

# Find .servico-card__body p rule and add text-align: justify
target = '.servico-card__body p {'
if target in css:
    # Check if text-align is already there
    target_section = css[css.find(target):css.find(target)+150]
    if 'text-align: justify' not in target_section:
        # Add text-align: justify after the opening brace
        new_rule = '.servico-card__body p {\\n  text-align: justify;\\n'
        # Find the exact position after the opening brace
        brace_pos = css.find(target) + len(target)
        # Insert after the brace
        new_css = css[:brace_pos] + '\\n' + new_rule.strip() + css[brace_pos:]
        css = new_css
        print(f"4. Added text-align: justify to .servico-card__body p")
    else:
        print("4. text-align: justify already present in .servico-card__body p")
else:
    print("4. .servico-card__body p rule not found")

with open("assets/css/assessoria.css", "w", encoding="utf-8") as f:
    f.write(css)

print("4. CSS updated")

with open("assessoria.html", "w", encoding="utf-8") as f:
    f.write(c)

print("\\nAll changes completed!")