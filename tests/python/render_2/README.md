#introdução:

- este é um simples teste de renderização de um arquivo html ou php podendo ser aplicado em outras coisas de outras formas .

#como usar:

- A começar pelo arquivo original localizado em "render/render.php" lá serão feito as modificações que serão gerarado no arquivo "public/phase_2.php".
  Este arquivo "phase_2.php" é  para caso você queira gerar com algum valor de uma variável contida em outro arquivo php da qual está sendo
  requerido , no nosso caso seria o 'public/definitions.php', se notarem o arquivo está fazendo uma requisição a uma api pra pegar informações por cep
  e convertendo em objeto para a variável $data com o json retornado.
  Nisso podemos então usar a variável $data , antes note também que tem diferença entre os delimitadores , por exemplo:
  o delimitador #{} é usado para gerar o html a partir de um valor de uma (váriavel, função) da linguagem python podendo também usar em algumas
  partes da própria syntax para a renderização , note no arquivo render.php a linha 23 (#{ thisnumber if len(thisnumber) > len(thistext) else thistext})
  isso iria gerar o valor da variável thisnumber ou thistext denpedendo do que a condição atender, e também pode ser usado os delimitadores
  ":;", para gerar algo semelhante a ":$hello_world;" -> "<?php echo $hello_world; ?>", e temos os delimitadores cujo agora fica por conta do php
  gerar que é o famoso "mustache" ( "{{}}" ), tudo contido entre ele como por exemplo {{ $data->cep }} , vai gerar o valor do objeto $data
  e sua propriedade "cep" , se quiser algo como <?php echo $data->cep; ?> escreva no arquivo source render.php :$data->cep; , e tenha em mente que
  o objeto $data tem de estar declarado dentro do arquivo que será gerarado ou dentro de um outro cujo seria feito o require dele dêpois.


#executando os scripts:

- A forma que eu faço para tudo isso acontecer é usando o bash indo até a pasta do projeto , estando nela execute o comando: "python render.py" , e caso
  queira tenha usado "{{ }}" execute o comando: "php render.php".


#objetivo:
Divertir , brincar , explorar mais dessas linguagens , ter ideias e aplica-las dentre outras coisas.

#obs:
dentro da pasta inc está um arquivo cujo pode ser usado pra declarar funções e retornar valores caso queira chamar funções dentro do arquivo render.php
ex: #{ GenerateHtmlElement("div id = '1' ", "content of div render") } -> "<div id = '1' > content of div render </div>", assim como no arquivo definitions.php, você pode definir valores e funções que seriam usados na hora de gerar o arquivo .
