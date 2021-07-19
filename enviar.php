<?php
if(isset($_POST['correo'])&& isset($_POST['mensaje'])){
	$correo = $_POST['correo'];
	$mensaje = $_POST['mensaje'];

	$from = $correo;
	$to = "marior.tejerina@gmail.com";
	$subject = "Nuevo mensaje de ". $correo;
	$message = $mensaje;
	$headers = "From:" . $from;

	if(mail($to, $subject, $message, $headers)){
		echo 1;
	}else{
		echo 0;
	}

}else{
	echo 0;
}


?>