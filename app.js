// JUEGO PICAS Y FIJAS

// Declaración de Variables
var counterFijas;
var counterPicas;
var numberUser;

// Muestra el número random del juego nuevo en consola
var randomNumber = generatorRandomNum(); 
console.log(randomNumber.join('')); 

// Evento jquery que se escucha al dar 'click' en el botón para jugar nuevamente
$('.close').on('click', function(){
	$('.won').hide();
	location.reload();
});

// Evento jquery que se escucha al ingresar número y presionar la tecla enter
$('#number').keypress(function(event){
	numberUser = $(this).val();
	exp = /^[0-9]+(?:\[0-9]+)?$/;
	if(event.which == 13){ 
		event.preventDefault();
		var numberUserArray = numberUser.split("");
		var userNumNoRepeat = sinDuplicados(numberUserArray);
		if((exp.test(numberUser)) && (userNumNoRepeat.length === 4)){ 
			logicGame(userNumNoRepeat);		
			$(this).val('');		
		} else {
			validation();			
		};
	};   
});

// Lógica del juego: compara los índices y el valor de los arreglos para sumar picas o fijas
function logicGame(numberUser){
	counterPicas = 0;
	counterFijas = 0 ; 
	$.each(randomNumber, function(iRandom, vRamdon){
		$.each(numberUser, function(iUser,vUser){
			if((iRandom === iUser) && (vRamdon === vUser)){
				counterFijas++;
			} else if (vRamdon === vUser){
				counterPicas++;
			};
		});
	});
	numberUser = numberUser.join('');
	addRow(numberUser, counterPicas, counterFijas);
	winner(numberUser,randomNumber);
};

// Función para generar el número aleatorio no repetido
function generatorRandomNum(){
	var randomNum = (Math.round(Math.random() * (10000 - 1000) + 1000)).toString().split(""); 
	var numberNoRepeted = sinDuplicados(randomNum);
	if(numberNoRepeted.length === 4){
		return numberNoRepeted;
	} else {
		return generatorRandomNum();
	};
};

// Función para eliminar duplicados de un array
function sinDuplicados(array){
	var arraySinDuplicado = [];
	$.each(array, function(indice, value){
		if($.inArray(value, arraySinDuplicado ) === -1){
			arraySinDuplicado.push(value);
		};
	});
	return arraySinDuplicado;
};

//Función que agrega filas y remueve clases de inválido
function addRow(numberUser, counterPicas, counterFijas){
	$('tbody').prepend('<tr><td>'+ numberUser +'</td><td>' + counterPicas + '</td><td>' + counterFijas + '</td></tr>');
	$('span').removeClass('invalid');
	$('input').removeClass('invalid-input');
};

//Función para agregar clases de inválido
function validation(){
	$('span').addClass('invalid');
	$('input').addClass('invalid-input');
};

// Función que determina si el usuario ha ganado 
function winner(userN, randomN){
	if(userN === randomN.join('')){
		$('.won').show().css({ "display": "flex" });
	};
};