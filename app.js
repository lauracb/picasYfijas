$('#number').keypress(function(event){
	var numberUser = $(this).val();
	var key = event.which;
	if(key == 13){  	
		alert(numberUser)
  }   
});