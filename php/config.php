<?php
  $hostname = "localhost";
  $username = "root";
  $password = "";
  $dbname = "chat";

  $conn = mysqli_connect($hostname, $username, $password, $dbname);
  if(!$conn){
    echo "Database Connected" . mysqli_connect_error();
  }
?>