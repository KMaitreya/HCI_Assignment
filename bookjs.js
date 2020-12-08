
function valid() {
	
	var email = document.getElementById('email1').value;
	var user_name = document.getElementById('un').value;
	var password = document.getElementById('pass').value;
	var confirm_password = document.getElementById('confirm').value;
	var phone = document.getElementById('phoneno').value;

    if( user_name.search(/[a-zA-Z]/) == -1)
	{
		 alert("Include atleast 1 character in username.");
         return false;
	}	

    if( (email.search(/[@]/) == -1) || (email.search(/[.]/) == -1) )
	{
		 alert("Invalid format of email.");
         return false;
	}

	if(email.indexOf('@') == 0 )
	{
		 alert("Invalid position of @ in email.");
         return false;
	}

	if( (email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.') )
	{
		 alert("Invalid position of . in email.");
         return false;
    }
    
    if(isNaN(phone))
	{
		 alert("Phone number should contain only digits.");
         return false;
	}

	if(phone.length != 10)
	{
		 alert("Phone number should be of length 10.");
         return false;
	}

	if( password.search(/[0-9]/) == -1)
	{
		 alert("Include atleast 1 digit in password.");
         return false;
	}

    if( password.search(/[a-z]/) == -1)
	{
		 alert("Include atleast 1 lower case character in password.");
         return false;
	}

	if( password.search(/[A-Z]/) == -1)
	{
		 alert("Include atleast 1 upper case character in password.");
         return false;
	}

	if( password.search(/[~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\;\:\'\"\,\<\.\>\/\?]/) == -1)
	{
		 alert("Include atleast 1 special character in password.");
         return false;
	}

	if( (password.length < 5)  || (password.length > 10) )
	{
		 alert("Password length should be between 5 to 10 characters.");
         return false;
	}

	if(confirm_password != password )
	{
		 alert("*Passwords are different.");
         return false;
	}


}  