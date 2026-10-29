import os
os.chdir(r"D:\CORE\projects\ipasg-2026")

with open("assessoria.html", encoding="utf-8") as f:
    content = f.read()

# The modal HTML should already be present before "Outras Especialidades"
# And the </body> tag should be at the end

# Add JavaScript before </body>
js_code = "<script>\ndocument.addEventListener('DOMContentLoaded', function() {\n    var modal = document.getElementById('leia-mais-modal');\n    var btns = document.querySelectorAll('.btn-leia-mais');\n    var fechar = document.querySelector('.fechar-btn');\n    var btnFechar = document.querySelector('.btn-fechar');\n    btns.forEach(function(b) {\n        b.addEventListener('click', function(e) {\n            e.preventDefault();\n            modal.style.display = 'block';\n        });\n    });\n    var fecharModal = function() {\n        modal.style.display = 'none';\n    };\n    if (fechar) {\n        fechar.addEventListener('click', fecharModal);\n    }\n    if (btnFechar) {\n        btnFechar.addEventListener('click', fecharModal);\n    }\n    window.addEventListener('click', function(e) {\n        if (e.target == modal) {\n            modal.style.display = 'none';\n        }\n    });\n});</script>"

body_pos = content.find('</body>')
if body_pos >= 0:
    novo_conteudo = content[:body_pos] + js_code + "\n" + content[body_pos:]
    content = novo_conteudo
    print("JavaScript inserido antes de </body>")
else:
    print("Não foi possível encontrar </body>")

with open("assessoria.html", "w", encoding="utf-8") as f:
    f.write(content)

print("Arquivo finalizado com JavaScript modal")