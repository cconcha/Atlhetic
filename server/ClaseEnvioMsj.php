<?php
require_once ('PHPMailer-master/PHPMailerAutoload.php');
class ClaseEnvioMsj{


function enviarCorreo($params){
	$mail = new PHPMailer();

		$mail->isSMTP();                                      // Set mailer to use SMTP
		$mail->Host = 'p3plcpnl0817.prod.phx3.secureserver.net';  // Specify main and backup SMTP servers
		$mail->SMTPAuth = true;                               // Enable SMTP authentication
		$mail->Username = 'noresponder@waresidesoft.com';                 // SMTP username
		$mail->Password = 'Info;:123';                           // SMTP password
		$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
		$mail->Port = 465;       
		$mail->From = ('noresponder@waresidesoft.com');
		$mail->FromName = 'Atlethic';
		$mail->addAddress('kmi_218@hotmail.com');     // atlheticsport@hotmail.com        
		$mail->addReplyTo('noresponder@waresidesoft.com');
		$mail->isHTML(false);                                  // Set email format to HTML
		$mail->Subject = $params->ASUNTO;
		if($params->CELULAR){
			$celular=$params->CELULAR;
		}else{
			$celular = "Vacio";
		}
		$mail->Body    =  "Han enviado el sieguiente mensaje desde el sitio web de Atlhetic: \n"
							.$params->MENSAJE."\r\nLos datos del remitente son: \r\n"."Nombre: "
							.$params->NOMBRE."\r\nCorreo: ".$params->CORREO
							."\n".'Celular: '.$celular;
 

	$correo = new PHPMailer();
		$correo->isSMTP();                                      // Set mailer to use SMTP
		$correo->Host = 'p3plcpnl0817.prod.phx3.secureserver.net';  // Specify main and backup SMTP servers
		$correo->SMTPAuth = true;                               // Enable SMTP authentication
		$correo->Username = 'noresponder@waresidesoft.com';                 // SMTP username
		$correo->Password = 'Info;:123';                           // SMTP password
		$correo->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
		$correo->Port = 465;       
		$correo->From = ('noresponder@waresidesoft.com');
		$correo->FromName = 'Atlethic';
		$correo->addAddress($params->CORREO);     // Add a recipient          
		$correo->addReplyTo('noresponder@waresidesoft.com');
		$correo->isHTML(false);                                  // Set email format to HTML
		$correo->Subject = 'Atlhetic ha recibido tu mensaje';
		$correo->Body    =  'Atlhetic ha recibido tu mensaje satisfactoriamente';

		if($correo->send() && $mail->send()) {
		//echo 'Message could not be sent.';
		//echo 'Mailer Error: ' . $correo->ErrorInfo;
			$result["ESTADO"]="TRUE";
			$result["MENSAJE"]="Mensaje enviado";

		} else {


			$result["ESTADO"]="FALSE";
			$result["MENSAJE"]="Mensaje no enviado";
		//echo 'Message has been sent';
		}

		return $result;
	} 
	
}

?>