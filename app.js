// Variable
var randomNumber = randomf(); 

// Función para generar el número random no repetido
function randomf(){
	var numberRamdon = Math.round(Math.random() * (10000 - 1000) + 1000); 
	numberRamdon = numberRamdon.toString() //Convierte a string el número
	var numberRamdonArray = numberRamdon.split(""); //Convierte a array el número
	var numberRamdonA = sinDuplicados(numberRamdonArray);
	if(numberRamdonA.length === 4){
		return numberRamdonA
	} else {
		return randomf();
	};
};

// Función para eliminar duplicados del array
function sinDuplicados(array){
	var noDuplicados = [];
	$.each(array, function(indice, value){
		if($.inArray(value, noDuplicados ) === -1){
			noDuplicados.push(value)
		};
	});
	return noDuplicados;
};

// Lógica del juego
function logicGame(numberUser){
	var counterPicas = 0
	var counterFijas = 0  
	$.each(randomNumber, function(iRandom, vRamdon){
		$.each(numberUser, function(iUser,vUser){
			if((iRandom === iUser) && (vRamdon === vUser)){
				counterFijas = counterFijas + 1
			} else if (vRamdon === vUser){
				counterPicas = counterPicas + 1
			};
		});
	});
	numberUser = numberUser.join('');
	// Agrega filas
	$('tbody').append('<tr><td>'+ numberUser +'</td><td>' + counterPicas + '</td><td>' + counterFijas + '</td></tr>')
	$('span').removeClass('invalid');
	$('input').removeClass('invalid-input');
};

// Evento jquery
$('#number').keypress(function(event){
	var numberUser = $(this).val();
	var exp = /^[0-9]+(?:\[0-9]+)?$/; // expresión para validar número entero
	var key = event.which;
	if(key == 13){ 
		event.preventDefault();
		var numberUserArray = numberUser.split("");
		var numberUserA = sinDuplicados(numberUserArray);
		if((exp.test(numberUser)) && (numberUserA.length === 4)){ 
			// logica
			logicGame(numberUserA);		
			$(this).val('');		
		} else {
			$('span').addClass('invalid');
			$('input').addClass('invalid-input');
			$(this).val('');
		};
	};   
});