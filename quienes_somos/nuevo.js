$(document).ready(function(){
	$("#inicio").click(function(){
		window.open("../index.html","_self");
	})

	$("#info").click(function(){
		window.open("../informacion/Informacion.html","_self");
	})

	$("#face").click(function(){
		window.open("https://www.facebook.com/atlhetic.sport?fref=ts");
	})

	$("#contac").click(function(){
		window.open("../contactenos/Contactanos.html","_self");
	})

	evaluarTamaño();
	$(window).resize(function(){
		if ($(this).width()<992) {
			$("#divi1").css("margin-top","161px");
		}else{
			$("#divi1").css("margin-top","40px");
		}

		if($(this).width()<1196 || $(this).width>975){
			$("#barraSuperior").css("padding-bottom","30px");
		}else{
			$("#barraSuperior").css("padding","10px");
		}

	})

})

function evaluarTamaño(){

	if($(this).width()< 992){
			$("#divi1").css("margin-top","161px");
		}else{
			$("#divi1").css("margin-top","40px");
		}

	if($(this).width()<1196 || $(this).width>975){
			$("#barraSuperior").css("padding-bottom","30px");
		}else{
			$("#barraSuperior").css("padding","10px");
		}		
}