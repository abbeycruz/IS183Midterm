
	function login ()
		{
			let username = document.getElementById('username').value;
			let password = document.getElementById('password').value;
			let errorContainer = document.getElementById('error-container');
			let errorText = document.getElementById('error-text');
	if(username == 'abbey' && password == 'cruz')
		{
			location.href='./index.html'
		}
	else
		{
			errorContainer.style.display = 'block';
			errorText.style.display = 'block';
			errorText.innerHTML = 'Error, please try again.';
			
			let handle = setInterval(() =>
			{
			errorContainer.style.display = 'none';
			clearInterval(handle);
			},2000);
		}
		}