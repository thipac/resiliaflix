function requisicao(titulo) {
  const url = 'http://www.omdbapi.com/?apikey=b4c642c0&t=' + titulo
  $.ajax({
    url: url,
    success: function (retornodoAjax) {
      let titulo = retornodoAjax.Title
      let diretor = retornodoAjax.Director
      let genero = retornodoAjax.Genre
      let atores = retornodoAjax.Actors
      let enredo = retornodoAjax.Plot
      let poster = retornodoAjax.Poster
      let ano = retornodoAjax.Year

      $('#poster').attr('src', poster)
      $('#titulo-filme').html(titulo)
      $('#elenco').html(atores)
      $('#enredo').html(enredo)
      $('#diretor').html(diretor)
      $('#genero').html(genero)
      $('#ano').html(ano)
    },
  })
}

let msgDeErroConfirm = 'Por favor, confirme a senha digitada anteriormente.'
let msgBoasVindas = 'Bem vindo ao Resília-Flix, seu cinema pessoal!'
let msgErroEmail = 'E-mail inválido, digite novamente.'
let msgErroSenha = 'Sua senha deve conter mais de 6 dígitos.'
//camada de manipulação dos dados
class Usuario {
  constructor(email, senha) {
    this._email = email
    this._senha = senha
  }
  get email() {
    return this._email
  }
  get senha() {
    this._senha
  }
}
function validaEmail(email) {
  let entrada = [...email]
  if (entrada.indexOf('@') == -1 || entrada.indexOf('.') == -1) {
    alert(msgErroEmail)
  } else {
    this._email = entrada.join('')
    return true
  }
}
function validaSenha(senha) {
  if (senha.length < 6) {
    alert(msgErroSenha)
  } else if (senha.length >= 6) {
    this._senha = senha
    return true
  }
}
function confirmaSenha(senha) {
  let temp = senha.toString()
  let temp1 = this._senha
  if (temp === temp1) {
    return true
  } else {
    return false
  }
}
//camada de controle

$('#bfilme').on('click', function (event) {
  event.preventDefault()
  let filme = $('#titulo').val().toString()
  requisicao(filme)
})
function validaConfirmacaoSenha(conSenha) {
  if (confirmaSenha(conSenha) == false) {
    alert(msgDeErroConfirm)
  } else {
    alert(msgBoasVindas)
  }
  // interação com usuário
  //pagina de cadastro
  $('#enviar-2').on('click', function (event) {
    event.preventDefault()
    console.log('Caiu')
    const emailDig = $('#email').val().toString()
    const senhaDig = $('#senha').val().toString()
    let conSenha = $('#confirmSenha').val().toString()
    const usuario = new Usuario(validaEmail(emailDig), validaSenha(senhaDig))
    validaConfirmacaoSenha(conSenha)
    console.log(usuario)
  })
}
