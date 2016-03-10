$(document).ready(function(){

	//inicializaciones
	$("#Menu1").click(function(){
		$("#Lista1").slideToggle(300)
	});

	$("#uno").click(function(){
		window.open("quienes_somos/QuienesSomos.html","_self");
	})

	$("#infor").click(function(){
		window.open("informacion/Informacion.html","_self");
	})

	$("#face").click(function(){
		window.open("https://www.facebook.com/atlhetic.sport?fref=ts");
	})

	$("#contacto").click(function(){
		window.open("contactenos/Contactanos.html","_self");
	})
	

	$.stellar({
		horizontalScrolling: false,
		verticalScrolling: true,

		verticalOffset: 0,
		responsive:true
	})

	evaluarTamaño();	
	//eventoresize
	$(window).resize(function(){
		console.log($(window).width());
		if($(this).width()<=972){
			$("#elcarru").css("margin-top","160px");
			
		}else{
			$("#elcarru").css("margin-top","60px");
			
		}
		if($(this).width()<990){
			$("#div1").css("right","");
		}else{
			$("#div1").css("right","150px");
		}
		$("#elcarru").height($(window).width()/1.95);

		if($(this).width()<950){
			$("#contendorPara>div").css("background-size","auto 100%");
		}else{
			$("#contendorPara>div").css("background-size","100%");

		}

		if($(this).width()<1196 || $(this).width>975){
			$("#barraSuperior").css("padding-bottom","30px");
		}else{
			$("#barraSuperior").css("padding","10px");
		}
	})
})

function evaluarTamaño(){

	if($(this).width()<950){
			$("#contendorPara>div").css("background-size","auto 100%");
		}else{
			$("#contendorPara").css("background-size","100%");

		}
		
	if($(this).width()<1196 || $(this).width>975){
			$("#barraSuperior").css("padding-bottom","30px");
		}else{
			$("#barraSuperior").css("padding","10px");
		}
		
	if($(this).width()<=972){
			$("#elcarru").css("margin-top","160px");
		}else{
			$("#elcarru").css("margin-top","60px");

	}

	$("#elcarru").height($(window).width()/1.95);
}