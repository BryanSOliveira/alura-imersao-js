function adicionarFilmeFavorito() {
    var campoFilmeFavorito = document.querySelector('#filme');
    var filmeFavorito = campoFilmeFavorito.value;

    if (filmeFavorito.endsWith('.jpg')) {
        listarFilmesNaTela(filmeFavorito);
    } else {
        alert("Informe um link de imagem válido.");
    }

    campoFilmeFavorito.value = "";
}

function listarFilmesNaTela(filme) {
    var listaFilmes = document.querySelector('#listaFilmes');
    var elementoFilme = "<img src =" + filme + ">";
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
}