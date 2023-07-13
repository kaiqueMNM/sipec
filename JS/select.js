let displayedError = '';

function showErrorText(elementId) {
  const errorText = document.getElementById(elementId);
  if (displayedError !== elementId) {
    errorText.style.display = 'block';
    if (displayedError !== '') {
      const previousError = document.getElementById(displayedError);
      previousError.style.display = 'none';
    }
    displayedError = elementId;
  }
}

function limparTexto() {
  const errorText = document.getElementById(displayedError);
  if (errorText) {
    errorText.style.display = 'none';
    displayedError = '';
  }
}
//mudouuuu//
document.addEventListener('DOMContentLoaded', function() {
  var isLoggedIn = false; // Variável que controla o status do login

  // Função para verificar se o usuário está logado
  function checkLoginStatus() {
    if (!isLoggedIn) {
      // Redirecionar para a página de login
      window.location.href = "index.html";
    }
  }

  // Verificar o status do login ao carregar a página
  checkLoginStatus();
});

//mudouuuu//
