function enviarCorreo(){
	$(".alerta_correo").css('display', 'none');
	$(".alerta_mensaje").css('display', 'none');
	$('.alerta_correcto').css('display', 'none');
	$('.alerta_incorrecto').css('display', 'none');

	var correo = $("#correo").val();
	var mensaje = $("#mensaje").val();
	var valido = 1;
	var validacion_correo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

	if(!validacion_correo.test(correo)){
		$(".alerta_correo").css('display', 'block');
		valido = 0;
	}

	if(mensaje.length <= 5){
		$(".alerta_mensaje").css('display','block');
		valido = 0;
	}

	if(valido == 1){
		var datos = 'correo=' + correo + '&mensaje=' + mensaje;
        $.ajax({
			type: "POST",
			url: "enviar.php",
			data: datos,
			success: function(res) {
 				if (parseInt(res) == 1){
 					$('.alerta_correcto').css('display', 'block');
 				}else{
 					$('.alerta_incorrecto').css('display', 'block');
 				}
			},
			error: function(res) {
				$('.alerta_incorrecto').css('display', 'block');
			}
		});
	}
}