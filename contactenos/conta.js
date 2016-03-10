$(document).ready(function(){
	
	$("#inicio").click(function(){
		window.open("../index.html","_self");
	})
	$("#somos").click(function(){
		window.open("../quienes_somos/QuienesSomos.html","_self");
	})
	$("#info").click(function(){
		window.open("../informacion/Informacion.html","_self");
	})
	$("#face").click(function(){
		window.open("https://www.facebook.com/atlhetic.sport?fref=ts");

	})
	
	$("#botonVentana").click(function(){
		$("#ventanaEmergente").fadeOut()
	})
	
	$("#botonEnviar").click(function(){
		if($("#email").val()=="" || $("#nombre").val()=="" || $("#asunto").val()=="" || $("#mensaje").val()=="" ){
			$("#ventanaEmergente").fadeIn(100);
			$("#textoVentana").html("<p style='margin:10px 0px 0px 10px;text-align:center;font-family:myFont'>¡Error de envio!<br> Faltan campos por llenar. </p>");

		}
		else{

		var x =""+$("#email").val()+"";
    	var atpos = x.indexOf("@");
    	var dotpos = x.lastIndexOf(".");
    	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        	$("#ventanaEmergente").fadeIn(300);
    		$("#textoVentana").html("<p style='margin:10px 0px 0px 10px;text-align:center;font-family:myFont'>¡Error!<br> Dirección de correo incorrecta. </p>");
    	}
    }
    })

    $("#celu").keypress(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .

        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        if ( e.keyCode<48 || e.keyCode>57) {
            e.preventDefault();
        }
    });

    $("#botonEnviar").click(function(){
    	
    	var datos={"METHOD":"EnviarCorreo","PARAMS":{"NOMBRE":""+$("#nombre").val()+"","ASUNTO":""+$("#asunto").val()+"","CORREO":""+$("#email").val()+"","MENSAJE":""+$("#mensaje").val()+"","CELULAR":""+$("#celu").val()+""}};
    	datos=JSON.stringify(datos);
    	$.ajax({
    		url:"http://atlhetic.waresidesoft.com/server/entry.php",
    		async:true,
    		dataType:"text",
    		data:{data:datos},
    		error:function(){
    		}

    	}).done(function(data){

    		var result=JSON.parse(data).RESULT;
    		var estado=result.ESTADO;
    		var mensaje= result.MENSAJE;

    		if(estado=="TRUE"){

    		}else{

    		}
    	});
    })

    evaluarTamaño();
	//eventoresize
	$(window).resize(function(){
		console.log($(window).width());
		if($(this).width()<= 974){
			$("#div-contacto").css("padding-top","170px");
		}else{
			$("#div-contacto").css("padding-top","80px");
		}
		if($(this).width()<= 974){
			$("#campos-correo").css("text-align","center");
		}else{
			$("#campos-correo").css("text-align","justify");
		}
		if($(this).width()<1196 || $(this).width>975){
			$("#barraSuperior").css("padding-bottom","30px");
		}else{
			$("#barraSuperior").css("padding","10px");
		}
		if ($(this).width()<=974) {
			$("#ventanaEmergenteCorreo").css("top","25%");
		}else{
			$("ventanaEmergenteCorreo").css("top","20%");
		}
	});	
})

function evaluarTamaño(){

	if($(this).width()<= 894){
			$("#div-contacto").css("padding-top","170px");
		}else{
			$("#div-contacto").css("padding-top","80px");

	}
	if($(this).width()<1196 || $(this).width>975){
			$("#barraSuperior").css("padding-bottom","30px");
		}else{
			$("#barraSuperior").css("padding","10px");
		}
	if ($(this).width()<=974) {
			$("#ventanaEmergenteCorreo").css("top","25%");
		}else{
			$("ventanaEmergenteCorreo").css("top","20%");
		}
}