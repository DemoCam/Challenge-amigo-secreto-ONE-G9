// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function asignarTextoHtml(elemento, texto) {
    let elementoHTML = document.getElementById(elemento).innerHTML = texto;
    return;
}

function agregarAmigo() {
    let amigoAgregado = document.getElementById('amigo').value;
    
    if (amigoAgregado == ''){
        alert('Debes ingresar el nombre de tu amigo')
    }else {
        amigos.push(amigoAgregado);
        listaEnPantalla();
        
    }

    
}

function listaEnPantalla() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''

    amigos.forEach(amigo => {lista.innerHTML += `<li>${amigo}`});

}

