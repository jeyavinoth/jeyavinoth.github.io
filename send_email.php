<?php
 
  if(isset($_POST['email'])) {
 
    $email_to = "jjeyaratnam@ccny.cuny.edu";
    $email_subject = "From Website";

    function report_error($error) {
      echo "There was an error while submitting the form.";
      echo $error;
      die();
    }

  if(!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['comment'])) {
    report_error('Please enter all the information.');       
  }

  $name = $_POST['name']; 
  $email_from = $_POST['email']; 
  $comment = $_POST['comment']; 

  $error_msg = "";
  $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_msg .= 'Enter a valid email <br />';
  }

  $string_exp = "/^[A-Za-z .'-]+$/";

  if(!preg_match($string_exp,$first_name)) {
    $error_msg .= 'Enter a valid name <br />';
  }

  if(strlen($comment) < 2) {
    $error_msg .= 'Enter more than 2 characters. <br />';
  }

  if(strlen($error_msg) > 0) {
    report_error($error_msg);
  }

  $email_msg = "Form details below.\n\n";

  function email_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
  }

  $email_msg .= "Name: ".email_string($first_name)."\r\n";
  $email_msg .= "Email: ".email_string($email_from)."\r\n";
  $email_msg .= "Comments: ".email_string($comment)."\r\n";

  $email_header = 'From: '.$email_from."\r\n".
  'Reply-To: '.$email_from."\r\n" .
  'X-Mailer: PHP/' . phpversion();
  @mail($email_to, $email_subject, $email_msg, $email_header);  

?>
