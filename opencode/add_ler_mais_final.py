import os
os.chdir(r"D:\CORE\projects\ipasg-2026")

with open("assessoria.html", encoding="utf-8") as f:
    content = f.read()

import re

# Add 'Ler Mais' buttons after each <p> tag in the 3 cards inside .servicos-grid
# The cards have <p> tags followed by <div class="servico-card__tags">
# We need to insert the button after </p> and before the tags div

# First, let's find all <p> tags inside the servicos-grid section
grid_start = content.find('servicos-grid')
if grid_start < 0:
    print("Could not find servicos-grid")
    exit()

# Find all <p> positions
p_positions = [m.start() for m in re.finditer(r'<p>', content)]
grid_ps = [p for p in p_positions if p > grid_start]

print(f'Found {len(grid_ps)} <p> tags in grid')

# For each of the first 3 <p> tags (the card paragraphs), add the button
for i in range(min(3, len(grid_ps))):
    p_pos = grid_ps[i]
    end_p = content.find('</p>', p_pos)
    
    # Get the paragraph content to identify which card it is
    p_content = content[p_pos:end_p]
    
    # Determine the card number based on the content
    card_num = i + 1  # 1, 2, 3
    
    # The button should be inserted after </p> and before the servico-card__tags div
    # Find what comes after </p>
    after_p = content[end_p+4:end_p+50]
    
    # Check if there's a servico-card__tags div right after
    tags_idx = content.find('servico-card__tags', end_p)
    
    # Build the button HTML
    button_html = f'            <a href="#" class="btn-leia-mais" data-card="{card_num}">Ler Mais</a>\n'
    
    # Insert the button after </p> and before the tags div
    if tags_idx > 0 and tags_idx < end_p + 100:
        # Insert before the tags div
        new_content = content[:end_p+4] + button_html + content[end_p+4:]
        content = new_content
        print(f'Card {card_num}: button inserted before tags div')
    else:
        # Just append after </p>
        new_content = content[:end_p+4] + button_html + content[end_p+4:]
        content = new_content
        print(f'Card {card_num}: button appended after </p>')

# Insert modal before "Outras Especialidades"
modal_html = '''        <!-- Modal Ler Mais -->\n<div id="leia-mais-modal" class="modal">\n  <div class="modal-conteudo">\n    <span class="fechar-btn">&times;</span>\n    <h3 class="modal-titulo">Ler Mais</h3>\n    <div class="modal-conteudo-texto">\n      <p>Conteúdo detalhado sobre a tecnologia selecionada.</p>\n      <div class="infografico">\n        <span class="dado">60%</span> de redução de resíduos\n        <span class="dado">95%</span> de economia de água\n        <span class="dado">100%</span> de energia renovável\n      </div>\n    </div>\n    <div class="modal-rodape">\n      <button class="btn-fechar">Fechar</button>\n    </div>\n  </div>\n</div>'''

idx = content.find('Outras Especialidades')
if idx >= 0:
    antes = content.rfind('</section>', 0, idx)
    if antes >= 0:
        novo_conteudo = content[:antes+8] + modal_html + '\n' + content[antes+8:]
        content = novo_conteudo
        print("Modal inserido antes de Outras Especialidades")
    else:
        print("Não foi possível encontrar o fechamento da section")

# Insert JavaScript before </body>
js_code = '<script>document.addEventListener(\'DOMContentLoaded\', function() {\n    var modal = document.getElementById(\'leia-mais-modal\');\n    var btns = document.querySelectorAll(\'.btn-leia-mais\');\n    var fechar = document.querySelector(\'.fechar-btn\');\n    var btnFechar = document.querySelector(\'.btn-fechar\');\n    btns.forEach(function(b) {\n        b.addEventListener(\'click\', function(e) {\n            e.preventDefault();\n            modal.style.display = \'block\';\n        });\n    });\n    var fecharModal = function() {\n        modal.style.display = \'none\';\n    };\n    if (fechar) {\n        fechar.addEventListener(\'click\', fecharModal);\n    }\n    if (btnFechar) {\n        btnFechar.addEventListener(\'click\', fecharModal);\n    }\n    window.addEventListener(\'click\', function(e) {\n        if (e.target == modal) {\n            modal.style.display = \'none\';\n        }\n    });\n});</script>'

body_pos = content.find('</body>')
if body_pos >= 0:
    novo_conteudo = content[:body_pos] + js_code + '\n' + content[body_pos:]
    content = novo_conteudo
    print("JavaScript inserido antes de </body>")
else:
    print("Não foi possível encontrar </body>")

with open("assessoria.html", "w", encoding="utf-8") as f:
    f.write(content)

print("\\nArquivo finalizado com botões Ler Mais e modal funcional")