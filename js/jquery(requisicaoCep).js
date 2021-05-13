$(document).ready(function(){  
    function limpaFormulariaCep(){ //função para limpar os valores do campo de preenchimento 
        $(`#cep`).val(``);
        $(`#rua`).val(``);
        $(`#numero`).val(``);
        $(`#complemento`).val(``);
        $(`#bairro`).val(``);
        $(`#cidade`).val(``);
        $(`#uf`).val(``);
    }
       function capturaNumero(dados){ //função que captura o numero da rua
        let arr2 = dados.split(" ")
        let numero = arr2.pop()
        console.log(numero)
        return numero
       }
            $("#cep").blur(function() { //evento dispara quando o campo perder o foco
                var cep = $(this).val().replace(/\D/g, ''); //expressão regular
                    console.log(cep)
                   
                    if (cep != "") { //verifica se há alguma valor preenchido no campo cep

                        if(cep.length === 8) //requisição dos dados com jquery
                
                            $.ajax({
                            url: `https://viacep.com.br/ws/` + cep + `/json/`,

                                    success:function(results){
                                    console.log(results)
                                    capturaNumero(results.logradouro)    

                                    if(results.erro){
                                        limpaFormulariaCep()
                                        throw new Error (`Cep não encontrado`)
                                        
                                    }
                                    else{      
                                        $(`#rua`).val(results.logradouro)
                                        $(`#numero`).val(capturaNumero(results.logradouro) )
                                        $(`#complemento`).val(results.complemento)
                                        $(`#bairro`).val(results.bairro)
                                        $(`#cidade`).val(results.localidade)
                                        $(`#uf`).val(results.uf)    
                                    }
                                }
                            })
                        else{
                            limpaFormulariaCep()
                            throw new Error (`O valor do cep deve obrigatoriamente possuir 8 digitos`)
                        }
                    }
                    else{
                        limpaFormulariaCep()
                        throw new Error (`campo de cep não possui valor, preencha-o e tente novamente!. `)
                    }
        })
})
