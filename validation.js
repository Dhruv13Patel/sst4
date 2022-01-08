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
		if (password.value == "SmartServTest@123") {
            window.location.href = 'dashboard.html';
            return false;
        }
        else if (password.value.match(passformat)) {
            window.location.href = 'user.html';
            return false;
        }
        else {
            alert("Invalid Password Match!");
            document.loginForm.email.focus();
            return false;
        }
	}else{
		alert("Password Pattern dosen't match! only @ is allowed and One Upper case one lowercase and numarical values");
		document.loginForm.password.focus();
		return false;
	}
	
}
