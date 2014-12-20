/**
*Plugin functions :
 - validateEmptyField - function which write some error promopt if field is empty
 - validateEmai l - function which write some error prompt if field doesnt pass
 e-mail regexp test
 - validateString - check if value from input is text
 - validateNumber - check if value from input is number
 */

(function($)
{
	
	var blankFieldValidatedCorrectly=false;
	var emailValidatetCorrectly=false;
	var numberValidatedCorrectly=false;
	var properDescriptionLength=false;
	
    $.fn.validateEmptyField = function(options) 
    {
    
    	 var objectValue = this.val(); //value of object of which is this function called
    	 if(objectValue==='')
    	 {
    		var object = $( '#'+options.validationId);
    		var currentObjectText = object.text();
    		if(currentObjectText.indexOf("Field shoud not be empty!")!=-1)
    		{
    		object.text(currentObjectText);
    		}
    		else
    		{
 	   		object.text(currentObjectText + "  "  +  'Field shoud not be empty!');
    		}
    	 }
    	 else
    	 {
    		 var object = $( '#'+options.validationId);
    		 object.text(object.text().replace('Field shoud not be empty',''));
    		 blankFieldValidatedCorrectly=true;
    	 }
    	 return blankFieldValidatedCorrectly;
    };
    
    $.fn.validateStringLength = function(options) 
    {
    	 if(this.val().length<=40)
    	 {
    		var object = $( '#'+options.validationId);
    		var currentObjectText = object.text();
    		if(currentObjectText.indexOf("Length of value o this string should be bigger than 40 characters")!=-1)
    		{
    		object.text(currentObjectText);
    		}
    		else
    		{
 	   		object.text(currentObjectText + "  "  +  'Length of value o this string should be bigger than 40 characters');
    		}
    	 }
    	 else
    	 {
    		 var object = $( '#'+options.validationId);
    		 object.text(object.text().replace('Length of value o this string should be bigger than 40 characters',''));
    		 properDescriptionLength=true; 
    	 }
    	 return properDescriptionLength;
    };
    
    $.fn.validateEmail = function(options) 
    {
	   	 var settings = $.extend({
	            text  : 'Hello, World!'         
	   	      }, options);
	   
	   	 var objectValue = this.val(); 
	   	 var email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
	   	 console.log(email.test(objectValue));
	   	 if (email.test(objectValue)===false) 
   	 	 {
	   		var object = $( '#'+options.validationId);
	   		var currentObjectText = object.text();
	   		
	   		if(currentObjectText.indexOf("Not proper value in e-mail field !")!=-1)
    		{
    		object.text(currentObjectText);
    		}
    		else
    		{
 	   		object.text(currentObjectText + "  "  +  'Not proper value in e-mail field !');
    		}
         }
	   	 else
	     {
	   		var object = $( '#'+options.validationId);
	   		object.text(object.text().replace('Not proper value in e-mail field !',''));
	   		emailValidatetCorrectly=true;
	     }
	   	 return emailValidatetCorrectly;
    };
    
    $.fn.validateNumeric = function(options) 
    {
	   	 var settings = $.extend({}, options);
	   
	   	 var objectValue = this.val(); 
	   	 if ($.isNumeric(objectValue)==false) 
   	 	 {
	   		var object = $( '#'+options.validationId);
	   		var currentObjectText = object.text();
	   		if(currentObjectText.indexOf("Not numeric value !")!=-1)
    		{
    		object.text(currentObjectText);
    		}
    		else
    		{
 	   		object.text(currentObjectText + "  "  +  'Not numeric value !');
    		}
         }
	   	else
	     {
	   		var object = $( '#'+options.validationId);
	   		object.text(object.text().replace('Not numeric value !',''));
	   		numberValidatedCorrectly=true;
	     }
	   	 return numberValidatedCorrectly;
    };
   
//object.css({ 'color': 'green'})
}(jQuery));


