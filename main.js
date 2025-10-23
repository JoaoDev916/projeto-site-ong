// Máscara para CPF
document.getElementById('cpf').addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, '');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  e.target.value = value;
});

// Máscara para telefone
document.getElementById('telefone').addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
  value = value.replace(/(\d{5})(\d{4})$/, '$1-$2');
  e.target.value = value;
});

// Máscara para CEP
document.getElementById('cep').addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, '');
  value = value.replace(/^(\d{5})(\d)/, '$1-$2');
  e.target.value = value;
});

// Mensagem ao enviar formulário
document.getElementById('formCadastro').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Cadastro enviado com sucesso! Obrigado por fazer parte do Vidas em Movimento 💚');
  this.reset();
});

