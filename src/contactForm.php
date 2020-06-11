<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $cellPhone = $_POST['phone'];
    $message = $_POST['message'];
    
    $mailTo = "monty@truittdevelopment.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name.". ".$message;

    mail($mailTo, $cellPhone, $txt, $headers);
    header("Location:index.js?mailsent");
}
?>