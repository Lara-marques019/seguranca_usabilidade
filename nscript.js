// Seleciona o primeiro formulário na página
document.querySelector('form').addEventListener('submit', function(e) {
  // Impede o envio padrão do formulário
  e.preventDefault();

  // Exibe um alerta informando que ocorreu um erro de login
  alert("Erro de login.");
});
  