const button = document.querySelector('#enviar')
// evento de validação
button.addEventListener('click', function (event) {
  event.preventDefault()
  const senha = document.querySelector('#senha').value
  const confirmaSenha = document.querySelector(`#confirmaSenha`)
  const email = document.querySelector('#email').value
  validaEmailESenha(email, senha)
})

class Usuario { // classe de usuário
  constructor(email, senha) {
    ;(this._email = email), (this._senha = senha)
  }
  get email() {
    return this._email
  }
  get senha() {
    return this._senha
  }
}
function validaEmailUsuario(email) { //validação de email
  var entrada = [...email]
  while (entrada.length) {
    {
      if (
        entrada == '' ||
        entrada.indexOf('.') == -1 ||
        entrada.indexOf('@') == -1
      ) {
        alert('Por favor, informe um E-MAIL válido!')
        location.reload()
        break
      } else {
        entrada.join('')
        email.value = entrada
        return true
      }
    }
  }
}
function validaSenhaUsuario(senha1) { //validação de senha
  senha1 = senha1.toString()
  while (senha1.length < 6) {
    if (senha1.length < 6) {
      alert('Por favor, informe uma senha com mais de 6 dígitos')
      location.reload()
      break
    } else if (senha1.length > 6) {
      return true
    }
  }
  return true
}

function validaEmailESenha(email, senha) { //preenchimento de email e senha caso sejam válidos no constructor da classe
    // const usuario1;
  if (validaEmailUsuario(email) == true && validaSenhaUsuario(senha) == true) {
    console.log('Bem vindo a Resíliaflix! Seu cinema pessoal!')
    usuario1 = new Usuario(email, senha)
  }
}