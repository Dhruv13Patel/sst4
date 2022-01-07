function Validation(inputText,password)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(!inputText.value.match(mailformat))
	{
		alert("Invalid email address!");
		document.loginForm.email.focus();
		return false;
	}

	var passformat = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@])/;
	if(password.value.match(passformat))
	{
		if(password.value == "SmartServTest@123")
		{
			window.location.href = 'dashboard.html';    
			return false;
		}else{
			alert("Wrong Password!");
		}
	}else{
		alert("Password Pattern dosen't match! Please try again");
		document.loginForm.password.focus();
		return false;
	}
	
}