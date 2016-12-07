<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title> Titulo da página </title>
  </head>
  <body>

      <div class="container">

      <div> conteúdo div 1 </div>

      <div class="jumbotron"> <h2> conteúdo div 2 </h2> </div>

      <input type ="text" value = "valor do primeiro input">

      <input type = "number" value = "500">

      </div>

      <div> verdadeiro </div>

      <div> variável declarada : thisnumber </div>
      <!-- <div> #{ str(input("insira o conteÃºdo desta div : "))  </div> -->

      <div class = 'class_render' > este Ã© o conteÃºdo que vai ser colocado dentro da geraÃ§Ã£o de elemento </div>

      {{ $data->cep }}
      {{ $data->logradouro }}
      {{ $data->bairro }}


  </body>
</html>
