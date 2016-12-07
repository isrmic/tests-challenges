<?php

require_once("public/__definitions.php");

$page = "render/phase_2.php";
$save_in = "public/index.php";

$file_load = file_get_contents($page);

preg_match_all("/{{(.*?)}}/", $file_load, $mustaches);
$normal = "normal";
for($i = 0; $i < count($mustaches[0]); $i++){


      eval('$value_replace = '. $mustaches[1][$i] .';');
      $file_load = str_replace($mustaches[0][$i], $value_replace, $file_load);
}

file_put_contents($save_in, $file_load);
