<?php header('Access-Control-Allow-Origin: *'); 

require_once("ClaseEnvioMsj.php");
$envio = new ClaseEnvioMsj();

$data = str_replace("\\","",$_REQUEST['data']);
$obj = json_decode($data);

switch ($obj->METHOD) {
	case 'EnviarCorreo':
		$resultado = $envio->enviarCorreo($obj->PARAMS); 
		break;
	
	default:
		$result['MENSAJE'] =  "Error al seleccionar el metodo " . $obj->METHOD;
		$result["MENSAJEUSER"] = "Ha ocurrido un error durante la consulta.";
		$result['ESTADO'] =  "False";
		$resultado = $result;
		break;
}
$respuesta["RESULT"]=$resultado;

$out = json_encode($respuesta);
echo $out;
?>