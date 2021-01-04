<?php
  header('Content-type: application/json');
  $dates = "({
    'dates':[
      {'month':12,'day':2},
      {'month':12,'day':3},
      etc...
    ] 
  })";
  $response = $_GET["jsoncallback"] . $dates;
  echo $response;
?>
