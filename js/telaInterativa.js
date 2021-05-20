<<<<<<< HEAD
$(`#enviar`).on(`click`,function(){

    
    $(`#formsEndereco`).removeClass("invisivel")
    $(`.inicioInvisivel`).css({"display":"none"})
})
$(`#enviarCadastro`).on(`click`,function(){
    $(`#formsEndereco`).addClass("invisivel")
    $(`.cadSucesso`).removeClass(`oculto`)
})

$("form").submit(false);

$(`#escolhaEmail`).on(`click`, function(){
    $(`#mostraEmail`).removeClass("emailInvisivel")
    $(`#mostraTel`).addClass("telefoneInvisivel")
})

$(`#escolhaTel`).on(`click`, function(){
    $(`#mostraEmail`).addClass("emailInvisivel")
    $(`#mostraTel`).removeClass("telefoneInvisivel")
})

$(`#btnRecupera`).on(`click`,function(){
    $(`.caixa-principal`).css({"display":"none"})
    $(`.cadSucesso`).removeClass(`oculto`)
})
=======
$(`#enviar-2`).on(`click`, function () {
  $(`#formsEndereco`).removeClass('invisivel')
  $(`.inicioInvisivel`).css({ display: 'none' })
})
$(`#enviarCadastro`).on(`click`, function () {
  $(`#formsEndereco`).addClass('invisivel')
  $(`.cadSucesso`).removeClass(`oculto`)
})

$('form').submit(false)

$(`#escolhaEmail`).on(`click`, function () {
  $(`#mostraEmail`).removeClass('emailInvisivel')
  $(`#mostraTel`).addClass('telefoneInvisivel')
})

$(`#escolhaTel`).on(`click`, function () {
  $(`#mostraEmail`).addClass('emailInvisivel')
  $(`#mostraTel`).removeClass('telefoneInvisivel')
})

$(`#btnRecupera`).on(`click`, function () {
  $(`.caixa-principal`).css({ display: 'none' })
  $(`.cadSucesso`).removeClass(`oculto`)
})
>>>>>>> Thiago
