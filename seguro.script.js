// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', () => {

  // Obtém o formulário de login pelo seu ID
  const loginForm = document.getElementById('loginForm');
  
  // Obtém o formulário de recuperação de senha pelo seu ID
  const recoverForm = document.getElementById('recoverForm');

  // Verifica se o formulário de login existe na página
  if (loginForm) {
    // Adiciona um ouvinte de evento para o envio do formulário de login
    loginForm.addEventListener('submit', e => {
      // Impede o envio padrão do formulário para evitar recarregamento da página
      e.preventDefault();

      // Obtém o valor do campo de email e remove espaços em branco
      const email = document.getElementById('email').value.trim();
      
      // Obtém o valor do campo de senha
      const password = document.getElementById('password').value;
      
      // Obtém o elemento onde as mensagens de erro serão exibidas
      const errorMsg = document.getElementById('errorMsg');

      // Valida o formato do email
      if (!email.includes('@')) {
        // Exibe mensagem de erro caso o email seja inválido
        errorMsg.textContent = 'E-mail inválido.';
        return;
      }

      // Valida o comprimento da senha
      if (password.length < 6) {
        // Exibe mensagem de erro caso a senha seja muito curta
        errorMsg.textContent = 'A senha precisa ter no mínimo 6 caracteres.';
        return;
      }

      // Limpa mensagens de erro anteriores
      errorMsg.textContent = '';

      // Exibe alerta de sucesso
      alert('Login realizado com sucesso!');
    });
  }

  // Verifica se o formulário de recuperação de senha existe na página
  if (recoverForm) {
    // Adiciona um ouvinte de evento para o envio do formulário de recuperação de senha
    recoverForm.addEventListener('submit', e => {
      // Impede o envio padrão do formulário para evitar recarregamento da página
      e.preventDefault();

      // Obtém o valor do campo de email para recuperação de senha e remove espaços em branco
      const email = document.getElementById('recoveryEmail').value.trim();
      
      // Obtém o elemento onde as mensagens de recuperação serão exibidas
      const recoveryMsg = document.getElementById('recoveryMsg');

      // Valida o formato do email
      if (!email.includes('@')) {
        // Exibe mensagem de erro caso o email seja inválido
        recoveryMsg.textContent = 'Digite um e-mail válido.';
        return;
      }

      // Exibe mensagem de sucesso indicando que o link foi enviado
      recoveryMsg.textContent = 'Link enviado! Ele expira em 10 minutos.';
    });
  }
});

