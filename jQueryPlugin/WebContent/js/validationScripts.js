function validateForm()
{
	//w nazwie przekazemy id elementu ktorego wartosc ustawimy na alert veryfikacji
	   $('#name').validateEmptyField({
		validationId : 'text' 
	    });	
	    $('#email').validateEmail({
    	validationId : 'text'   
	    });
	    $('#number').validateNumeric(
	    {
	    validationId : 'text' 
	    });
}