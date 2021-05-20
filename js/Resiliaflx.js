const button = document.querySelector('#enviar')
const cadInicialInvisivel = document.querySelector(
  `.cadastro-inicial.invisivel`,
)
const cadCepInvisivel = document.querySelector(`.cadastro-endereco.invisivel`)
const confirmaSenha = document.querySelector(`#confirmaSenha`).value

// evento de validação
button.addEventListener('click', function (event) {
  event.preventDefault()
  const senha = document.querySelector('#senha').value

  const email = document.querySelector('#email').value
  validaEmailESenha(email, senha)
})

class Usuario {
  // classe de usuário
  constructor(email, senha, confirmaSenha) {
    this._email = email
    this._senha = senha
    this._confirmaSenha = confirmaSenha
  }
  get email() {
    return this._email
  }
  get senha() {
    return this._senha
  }
  get confirmaSenha() {
    return this._confirmaSenha
  }
}
function validaEmailUsuario(email) {
  //validação de email
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
function validaSenhaUsuario(senha1) {
  //validação de senha
  senha1 = senha1.toString()
  while (senha1.length < 6) {
    if (senha1.length < 6) {
      alert('Por favor, informe uma senha com mais de 6 dígitos')
      location.reload()
      break
    } else if (senha1.length > 6) {
      return true
    } else if (senha1.value === confirmaSenha.value) {
      console.log(ok)
      return true
    }
  }
  return true
}

function validaEmailESenha(email, senha) {
  //preenchimento de email e senha caso sejam válidos no constructor da classe
  // const usuario1;
  if (validaEmailUsuario(email) == true && validaSenhaUsuario(senha) == true) {
    console.log('Bem vindo a Resíliaflix! Seu cinema pessoal!')
    usuario1 = new Usuario(email, senha)
  }
}
function formsVisiveis() {
  cadCepInvisivel.classList.remove('cadastro-endereco.invisivel')
  cadInicialInvisivel.classList.add(`cadastro-inicial.invisivel`)
}
