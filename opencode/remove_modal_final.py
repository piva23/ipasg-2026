import os
os.chdir(r"D:\CORE\projects\ipasg-2026")

with open("assessoria.html", encoding="utf-8") as f:
    c = f.read()

# Check if leia-mais-modal is in HTML
if "leia-mais-modal" in c:
    idx = c.find("leia-mais-modal")
    print(f"leia-mais-modal at position {idx}")
    print(f"Context: {c[max(0,idx-20):idx+80]}")
else:
    print("leia-mais-modal not found in HTML")

# Check btn-leia-mais
import re
btn_positions = [m.start() for m in __import__("re").finditer("btn-leia-mais", c)]
print(f"btn-leia-mais positions: {btn_positions[:5]}")

# Check for modal div
if '<div id="leia-mais-modal"' in c:
    print("Full modal div still in HTML")
else:
    print("Full modal div removed from HTML")