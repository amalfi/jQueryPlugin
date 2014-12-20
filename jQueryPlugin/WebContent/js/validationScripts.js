function validateForm()
{

		var blankFieldValidatedCorrectly =  $('#name').validateEmptyField({
		validationId : 'nameError' 
	    });	
	    var emailValidatetCorrectly = $('#email').validateEmail({
    	validationId : 'emailError'   
	    });
	    var numberValidatedCorrectly = $('#number').validateNumeric(
	    {
	    validationId : 'numberError' 
	    });
	    var properDescriptionLength = $('#description').validateStringLength(
	    {
	    validationId : 'albumDescriptionError' 
	    });
	    
	    if(blankFieldValidatedCorrectly && emailValidatetCorrectly && numberValidatedCorrectly & properDescriptionLength)
	    {
	    	alert("Congratulations ! Validation passed !");
	    }
}