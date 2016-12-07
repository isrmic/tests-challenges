import re
import io
from inc import *

__data = {"title":"Titulo da página",
          "class_1":"container",
          "class_2":"jumbotron",
          "div_1":"conteúdo div 1",
          "div_2":"conteúdo div 2",
          "type_text":"text",
          "type_number":"number",
          "value_input":"valor do primeiro input",
          "value_input_2":"500"}

thisnumber = "variável declarada : thisnumber"
thistext = "variável declarada : thistext"
url = "https://google.com"

file = open("render/render.php", "r")

template = file.read()

pattern = re.compile(r"#{(.*?)}")
pattern_expression = re.compile(r":(.*?);")

selected = pattern.findall(template)
selected_expression = pattern_expression.findall(template)

for j in selected_expression:
    match = pattern_expression.search(template)
    template = template.replace(match.group(0), "<?php echo " + j + "; ?>")

for i in selected:
    match = pattern.search(template)
    template = template.replace(match.group(0), __data[i] if i in __data else eval(i))

#result = pattern.search(template).group(1)
#result = result.replace(" ", "")
#template = pattern.sub(__data[result], template)

file.close()
print(template)

with io.open("render/phase_2.php", "w", encoding = "utf-8") as file:
    file.write(template)

with io.open("public/index.php", "w", encoding = "utf-8") as file:
    file.write(template)
