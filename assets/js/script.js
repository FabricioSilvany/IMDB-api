//dom
const frmPesquisa = document.querySelector('form')
const key = '63dddcfc'
const lista = document.querySelector('div.lista')

//eventos
frmPesquisa.onsubmit = (ev) => {
    ev.preventDefault();

    const pesquisa = ev.target.pesquisa.value;

    if (pesquisa == ""){
        alert('Preencha o campo!');
        return
    }

    fetch(`https://www.omdbapi.com/?apikey=${key}&s=${pesquisa}`)
        .then(result => result.json())
        .then(json => console.carregaLista(json));  
}

    const carregaLista = (json) => {
    lista.innerHTML = ""

}
