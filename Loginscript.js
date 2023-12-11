const loginForm = document.getElementById('login-form');
const FailMessage = document.getElementById('fail-Login');

loginForm.addEventListener('submit', (event)=> {
	event.preventDefault();

	const username = loginForm.username.value;
	const storedEmail = localStorage.getItem('email');

	if (username === localStorage.getItem('username') || username === storedEmail && loginForm.password.value === localStorage.getItem('password')) {
		alert('登錄成功！');
		sessionStorage.setItem('LoggedIn', 'true');
		window.location.href="index.html";
   		//localStorage.setItem('hideButton', username);
	} else {
		FailMessage.textContent = '用戶名或密碼錯誤。';
	}
});

	const box = loginForm.box.value;
	
