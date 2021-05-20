//camada de manipulação dos dados
class Usuario {
  constructor(email,senha){
    this._email = email
    this._senha = senha
  }
  get email (){
   return this._email;
  }
  get senha (){
    this._senha;
  }
  
}
function validaEmail(email,msg){
    let entrada = [...email]
    if(entrada.indexOf("@") == -1 || entrada.indexOf(".")== -1 ){
    return msg
  } else{
    return this._email = entrada.join("");
  
  }
  
}
function validaSenha(senha,msg){
  if (senha.length < 6){
    return msg
  } else if (senha.length >= 6 ) {
    return this._senha = senha;
    
  }
}
function confirmaSenha(senha){
  let temp = senha.toString()
  let temp1 = this._senha;
  if(temp === temp1){
    return true
  } else {
    return false;
  }
}

