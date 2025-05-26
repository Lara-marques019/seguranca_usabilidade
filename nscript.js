const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  // Não impede envio
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Não valida se os campos estão preenchidos corretamente
  alert('Login enviado com: ' + email + ' e senha: ' + password);

  // Mensagem fixa
  document.getElementById('errorMsg').textContent = 'Login enviado (sem segurança)!';
});

  