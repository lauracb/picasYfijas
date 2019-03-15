var numberRamdon = Math.round(Math.random() * (10000 - 1000) + 1000); //falta incluir que el número sea diferentes dígitos.
numberRamdon = numberRamdon.toString() //Convierte a string el número
$('#number').keypress(function(event){
	var numberUser = $(this).val();
	var exp = /^[0-9]+(?:\[0-9]+)?$/; // expresión para validar número entero
	var key = event.which;
		if(key == 13){  	
		event.preventDefault();
		if((exp.test(numberUser)) && (numberUser.length === 4)){ //Si es número y si es de 4 cifras // falta validar que los dígitos no sean repetidos


			// logica
			numberRamdonArray = numberRamdon.split("");
			numberUserArray = numberUser.split("");
		


				$('tbody').append('<tr><td>'+ numberUser +'<td></td><td></td></td></tr>')
				$('span').removeClass('invalid');
				$('input').removeClass('invalid-input');
				$(this).val('');			
		} else {
			$('span').addClass('invalid');
			$('input').addClass('invalid-input');
			$(this).val('');
		};
	}   
});


  