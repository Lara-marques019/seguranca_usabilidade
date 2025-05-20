document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const recoverForm = document.getElementById('recoverForm');
  
    if (loginForm) {
      loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const errorMsg = document.getElementById('errorMsg');
  
        if (!email.includes('@')) {
          errorMsg.textContent = 'E-mail inválido.';
          return;
        }
        if (password.length < 6) {
          errorMsg.textContent = 'A senha precisa ter no mínimo 6 caracteres.';
          return;
        }
  
        errorMsg.textContent = '';
        alert('Login realizado com sucesso!');
      });
    }
  
    if (recoverForm) {
      recoverForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('recoveryEmail').value.trim();
        const recoveryMsg = document.getElementById('recoveryMsg');
  
        if (!email.includes('@')) {
          recoveryMsg.textContent = 'Digite um e-mail válido.';
          return;
        }
  
        recoveryMsg.textContent = 'Link enviado! Ele expira em 10 minutos.';
      });
    }
  });
  