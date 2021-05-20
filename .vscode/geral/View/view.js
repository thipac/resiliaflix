// interação com usuário
let msgDeErroConfirm ="Por favor, confirme a senha digitada anteriormente."
let msgBoasVindas = "Bem vindo ao Resília-Flix, seu cinema pessoal!"
let msgErroEmail = "E-mail inválido, digite novamente."
let msgErroSenha ="Sua senha deve conter mais de 6 dígitos."

 $("#enviar").on("click",function(event){
     event.preventDefault(); 
        const emailDig = $("#email").val().toString()
        const senhaDig = $("#senha").val().toString()
        let conSenha = $("#confirmSenha").val().toString();
        const usuario = new Usuario(validaEmail(emailDig,msgErroEmail),validaSenha(senhaDig,msgErroSenha));
        validaConfirmacaoSenha(conSenha)
        console.log(usuario);
    
    });
    function validaConfirmacaoSenha(conSenha){
        
        if (confirmaSenha(conSenha) == false){
            alert( msgDeErroConfirm)
        } else {
            alert(msgBoasVindas)
        }
    }
    // chamar index do Thiago nesse botão que volta a requisição
   

    

    
    
    