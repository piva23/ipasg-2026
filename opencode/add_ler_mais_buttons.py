import os
os.chdir(r"D:\CORE\projects\ipasg-2026")

with open("assessoria.html", encoding="utf-8") as f:
    content = f.read()

# Card 1: biodigestor - insert button after </p>
old1 = "            <p>\n                O biodigestor é uma tecnologia sustentável que contribui para o saneamento ecológico por meio do tratamento de resíduos orgânicos e dejetos humanos e animais. Seu funcionamento ocorre pela decomposição da matéria orgânica por microrganismos, em ambiente sem oxigênio. Esse processo reduz a carga poluidora dos resíduos e diminui os riscos de contaminação do solo e da água. Além disso, pode gerar biogás, uma fonte renovável de energia, e produzir efluentes que, após tratamento adequado, podem ter usos específicos. Assim, o biodigestor promove o aproveitamento de recursos, a proteção ambiental e a melhoria da qualidade de vida das comunidades.\n              </p>\n              <div class=\"servico-card__tags\""
new1 = "            <p>\n                O biodigestor é uma tecnologia sustentável que contribui para o saneamento ecológico por meio do tratamento de resíduos orgânicos e dejetos humanos e animais. Seu funcionamento ocorre pela decomposição da matéria orgânica por microrganismos, em ambiente sem oxigênio. Esse processo reduz a carga poluidora dos resíduos e diminui os riscos de contaminação do solo e da água. Além disso, pode gerar biogás, uma fonte renovável de energia, e produzir efluentes que, após tratamento adequado, podem ter usos específicos. Assim, o biodigestor promove o aproveitamento de recursos, a proteção ambiental e a melhoria da qualidade de vida das comunidades.\n              </p>\n            <a href=\"#\" class=\"btn-leia-mais\" data-card=\"1\">Ler Mais</a>\n              <div class=\"servico-card__tags\""

if old1 in content:
    content = content.replace(old1, new1)
    print("Card 1: botão inserido")
else:
    print("Card 1: padrão não encontrado")

# Card 2: fossa de minhocas
old2 = "            <p>\n                A fossa de minhocas, também conhecida como vermimefiltro, emula processos naturais com custo reduzido e manutenção mínima. Os efluentes percorrem camadas sucessivas de brita, areia e matéria orgânica, e a matéria orgânica é digerida pelas minhocas, que separam os nutrientes da água tratada. O processo reduz a carga poluidora e diminui os riscos de contaminação do solo e da água. Além disso, não consome energia elétrica e gera dois subprodutos: água tratada, reutilizável na irrigação, e o vermicomposto, um fertilizante natural rico em nutrientes. Assim, a fossa de minhocas contribui para o saneamento ecológico e a melhoria da qualidade de vida das comunidades.\n              </p>\n              <div class=\"servico-card__tags\""
new2 = "            <p>\n                A fossa de minhocas, também conhecida como vermimefiltro, emula processos naturais com custo reduzido e manutenção mínima. Os efluentes percorrem camadas sucessivas de brita, areia e matéria orgânica, e a matéria orgânica é digerida pelas minhocas, que separam os nutrientes da água tratada. O processo reduz a carga poluidora e diminui os riscos de contaminação do solo e da água. Além disso, não consome energia elétrica e gera dois subprodutos: água tratada, reutilizável na irrigação, e o vermicomposto, um fertilizante natural rico em nutrientes. Assim, a fossa de minhocas contribui para o saneamento ecológico e a melhoria da qualidade de vida das comunidades.\n              </p>\n            <a href=\"#\" class=\"btn-leia-mais\" data-card=\"2\">Ler Mais</a>\n              <div class=\"servico-card__tags\""

if old2 in content:
    content = content.replace(old2, new2)
    print("Card 2: botão inserido")
else:
    print("Card 2: padrão não encontrado")

# Card 3: banheiro seco
old3 = "            <p>\n                O banheiro seco compostável desempenha todas as funções de um banheiro convencional sem usar água. A separação de urina e fezes e a cobertura com matéria orgânica seca inicia a compostagem, acelerada pelo calor solar e pela ventilação natural. Esse processo elimina patógenos e reduz odores, transformando o material em composto estabilizado em poucos meses. Além disso, o composto é usado como fertilizante natural em agroflorestas e hortas. Por não consumir água e evitar fossas e caixas de gordura, o banheiro seco previne a contaminação da água e do solo. Assim, a tecnologia promove a economia de recursos, a proteção ambiental e a melhoria da qualidade de vida das comunidades.\n              </p>\n              <div class=\"servico-card__tags\""
new3 = "            <p>\n                O banheiro seco compostável desempenha todas as funções de um banheiro convencional sem usar água. A separação de urina e fezes e a cobertura com matéria orgânica seca inicia a compostagem, acelerada pelo calor solar e pela ventilação natural. Esse processo elimina patógenos e reduz odores, transformando o material em composto estabilizado em poucos meses. Além disso, o composto é usado como fertilizante natural em agroflorestas e hortas. Por não consumir água e evitar fossas e caixas de gordura, o banheiro seco previne a contaminação da água e do solo. Assim, a tecnologia promove a economia de recursos, a proteção ambiental e a melhoria da qualidade de vida das comunidades.\n              </p>\n            <a href=\"#\" class=\"btn-leia-mais\" data-card=\"3\">Ler Mais</a>\n              <div class=\"servico-card__tags\""

if old3 in content:
    content = content.replace(old3, new3)
    print("Card 3: botão inserido")
else:
    print("Card 3: padrão não encontrado")

# Insert modal before "Outras Especialidades"
modal_html = "        <!-- Modal Ler Mais -->\n<div id=\"leia-mais-modal\" class=\"modal\">\n  <div class=\"modal-conteudo\">\n    <span class=\"fechar-btn\">&times;</span>\n    <h3 class=\"modal-titulo\">Ler Mais</h3>\n    <div class=\"modal-conteudo-texto\">\n      <p>Conteúdo detalhado sobre a tecnologia selecionada.</p>\n      <div class=\"infografico\">\n        <span class=\"dado\">60%</span> de redução de resíduos\n        <span class=\"dado\">95%</span> de economia de água\n        <span class=\"dado\">100%</span> de energia renovável\n      </div>\n    </div>\n    <div class=\"modal-rodape\">\n      <button class=\"btn-fechar\">Fechar</button>\n    </div>\n  </div>\n</div>"

idx = content.find("Outras Especialidades")
if idx >= 0:
    antes = content.rfind("</section>", 0, idx)
    if antes >= 0:
        novo_conteudo = content[:antes+8] + modal_html + "\n" + content[antes+8:]
        content = novo_conteudo
        print("Modal inserido antes de Outras Especialidades")
    else:
        print("Não foi possível encontrar o fechamento da section")

# Insert JavaScript before </body>
js_code = "<script>\ndocument.addEventListener('DOMContentLoaded', function() {\n    var modal = document.getElementById('leia-mais-modal');\n    var btns = document.querySelectorAll('.btn-leia-mais');\n    var fechar = document.querySelector('.fechar-btn');\n    var btnFechar = document.querySelector('.btn-fechar');\n    btns.forEach(function(b) {\n        b.addEventListener('click', function(e) {\n            e.preventDefault();\n            modal.style.display = 'block';\n        });\n    });\n    var fecharModal = function() {\n        modal.style.display = 'none';\n    };\n    if (fechar) {\n        fechar.addEventListener('click', fecharModal);\n    }\n    if (btnFechar) {\n        btnFechar.addEventListener('click', fecharModal);\n    }\n    window.addEventListener('click', function(e) {\n        if (e.target == modal) {\n            modal.style.display = 'none';\n        }\n    });\n});</script>"

body_pos = content.find("</body>")
if body_pos >= 0:
    novo_conteudo = content[:body_pos] + js_code + "\n" + content[body_pos:]
    content = novo_conteudo
    print("JavaScript inserido antes de </body>")
else:
    print("Não foi possível encontrar </body>")

with open("assessoria.html", "w", encoding="utf-8") as f:
    f.write(content)

print("\nArquivo finalizado com botões Ler Mais e modal funcional")