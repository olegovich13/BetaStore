function clicked() {

	var user = document.getElementById('username');
	var pass = document.getElementById('password');
	
	var people = [
	{
		username: "sam",
		password: "codify"
	},
	{
		username: "matt",
		password: "academy"
	},
	{
		username: "chris",
		password: "forever"
	}

	if(user == people) {
	
		if(password == people) {
		
			window.alert("You are logged in as " + user.value);
			window.open("https://apple.com");
		
		} else {
		
			window.alert("Incorrect username or password!");
		
		}
	
	} else {
	
			window.alert("Incorrect username or password!");
	
	}

}
