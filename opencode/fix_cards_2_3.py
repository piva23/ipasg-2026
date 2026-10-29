import os
os.chdir(r"D:\CORE\projects\ipasg-2026")

with open("assessoria.html", encoding="utf-8") as f:
    content = f.read()

# Card 2: fossa de minhocas
# The pattern is: 14 spaces, </p>, newline, 14 spaces, <div class="servico-card__tags"
old2 = "              </p>\n              <div class=\"servico-card__tags\""
new2 = "              </p>\n            <a href=\"#\" class=\"btn-leia-mais\" data-card=\"2\">Ler Mais</a>\n              <div class=\"servico-card__tags\""

if old2 in content:
    content = content.replace(old2, new2)
    print("Card 2: botão inserido")
else:
    print("Card 2: padrão não encontrado")

# Card 3: banheiro seco
old3 = "              </p>\n              <div class=\"servico-card__tags\""
new3 = "              </p>\n            <a href=\"#\" class=\"btn-leia-mais\" data-card=\"3\">Ler Mais</a>\n              <div class=\"servico-card__tags\""

# Only replace if the old pattern is still present (card 2 may have already changed it)
# But we need to be careful - if card 2 already replaced it, card 3's old pattern won't be found
# Let me check if old3 is still present
count = content.count(old3)
print(f"Old3 pattern count: {count}")

if old3 in content:
    content = content.replace(old3, new3)
    print("Card 3: botão inserido")
else:
    print("Card 3: padrão não encontrado - verificando variantes")
    # Try without the leading spaces variant
    old3_variant = "        </p>\n        <div class=\"servico-card__tags\""
    if old3_variant in content:
        new3_variant = "        </p>\n      <a href=\"#\" class=\"btn-leia-mais\" data-card=\"3\">Ler Mais</a>\n        <div class=\"servico-card__tags\""
        content = content.replace(old3_variant, new3_variant)
        print("Card 3: botão inserido (variante)")
    else:
        print("Card 3: variante também não encontrada")

with open("assessoria.html", "w", encoding="utf-8") as f:
    f.write(content)

print("\nHTML atualizado")