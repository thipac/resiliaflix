//camada de controle

function requisicao(titulo) {
    const url = "http://www.omdbapi.com/?apikey=b4c642c0&t=" + titulo
    $.ajax({
      url: url,
      success: function (retornodoAjax) {
                let titulo =(retornodoAjax.Title)
                let diretor =(retornodoAjax.Director)
                let genero =(retornodoAjax.Genre)
                let atores =(retornodoAjax.Actors)
                let enredo =(retornodoAjax.Plot)
                let poster =(retornodoAjax.Poster)
                console.log(titulo)
                console.log(diretor)
                console.log(genero)
                console.log(atores)
                console.log(enredo)
                console.log(poster)
                $("#imagem").attr('src', poster)
      },
    })
  }
  $("#pesquisar").on("click",function(event){
    event.preventDefault();
    let filme = $("#titulo").val()
    requisicao(filme)
    
})
