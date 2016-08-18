<?php

  $namefirst = $_POST['namefirst'];
  $namelast = $_POST['namelast'];
  $email = $_POST['email'];
  $message = $_POST['message'];

if(IsInjected($email))
{
    echo "Bad email value!";
    exit;
}

$email_from = 'hjelmqwist@gmail.com';
$to = "hjelmqwist@gmail.com";
$email_subject = "New Message from: - Hjelmqwist.com ";
$email_body = "
Nytt meddelande:

Kontaktinfo:

Namn:
$namefirst
$namelast

Kontaktupgifter: 	  
$email

Meddelande:
$message
";
    

$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Refresh:0');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 