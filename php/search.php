<?php
    session_start();
    include_once "config.php";

    // $outgoing_id = $_SESSION['unique_id'];
    $searchTerm = mysqli_real_escape_string($conn, $_POST['searchTerm']);
    // echo $searchTerm;
    // $sql = "SELECT * FROM users WHERE NOT unique_id = {$outgoing_id} AND (fname LIKE '%{$searchTerm}%' OR lname LIKE '%{$searchTerm}%') ";
    $sql = mysqli_query($conn, "SELECT * FROM users WHERE fname LIKE '%{$searchTerm}%' OR lname LIKE '%{$searchTerm}%'");
    $output = "";
    // $query = mysqli_query($conn, $sql);
    if(mysqli_num_rows($sql) > 0){
        include_once "data.php";
        // $output .= "user found";
    }else{
        $output .= 'No user found related to your search term';
    }
    echo $output;
    // echo "Hello";
?>