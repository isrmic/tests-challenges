<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title> #{title} </title>
  </head>
  <body>

      <div class="#{class_1}">

      <div> #{div_1} </div>

      <div class="#{class_2}"> <h2> #{div_2} </h2> </div>

      <input type ="#{type_text}" value = "#{value_input}">

      <input type = "#{type_number}" value = "#{value_input_2}">

      </div>

      <div> #{ "verdadeiro" if 1 < 2 else "falso" } </div>

      <div> #{ thisnumber if len(thisnumber) > len(thistext) else thistext} </div>
      <!-- <div> #{ str(input("insira o conteúdo desta div : "))  </div> -->

      #{ GenerateHtmlElement("div", "este é o conteúdo que vai ser colocado dentro da geração de elemento", "class = 'class_render' ") }

      {{ $data->cep }}
      {{ $data->logradouro }}
      {{ $data->bairro }}


  </body>
</html>
