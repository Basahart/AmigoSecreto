//Variables
let listaAmigoSorteado = [];


//Funciones

// Función agregar amigo secreto
function agregarAmigo(){
    let amigoSecreto = String(document.getElementById('amigo').value);
    if(amigoSecreto === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }else {   
    }   if(listaAmigoSorteado.includes(amigoSecreto)){
            alert("Ya agregaste este amigo, agrega un nombre diferente");
        }else {
            listaAmigoSorteado.push(amigoSecreto);
            listaAmigos();           
    }
    console.log(`${amigoSecreto}`);
    console.log(listaAmigoSorteado.length);
    console.log(listaAmigoSorteado);
    limpiarCaja();
}

// Función Sortear amigo secreto
function sortearAmigo(){
    if(listaAmigoSorteado.length<=1){
        alert("Necesitas agregar por lo menos dos amigos");
        document.getElementById('amigo').focus();
    }else {
        let indiceAleatorio = Math.floor(Math.random()*listaAmigoSorteado.length);
        console.log(indiceAleatorio);
        console.log(listaAmigoSorteado[indiceAleatorio]);
    }
    
}

//Función limpiar caja
function limpiarCaja(){
    document.getElementById('amigo').value = "";
    document.getElementById('amigo').focus();
}

//Función para agregar Amigos a una lista
function listaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let amigo of listaAmigoSorteado) {
        const elemento = document.createElement('li');
        elemento.textContent = amigo;
        lista.appendChild(elemento);
    }
}