<?php

$cep_url = "https://viacep.com.br/ws/30230300/json/";
$data = json_decode(file_get_contents($cep_url));

$hello_world = "hello world , wellcome to my page";

?>
