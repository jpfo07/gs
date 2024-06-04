document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;
    
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
    }
    
  
    window.location.href = 'paginainicial.html';
});

