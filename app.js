//Variables
let listaAmigoSorteado = [];

//Funciones
// Función agregar amigo secreto
function agregarAmigo(){
    let amigoSecreto = String(document.getElementById('amigo').value.trim());
    if(amigoSecreto === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }else {  
        let validarAmigo = amigoSecreto.toLowerCase();
        if(listaAmigoSorteado.some(amigo => amigo.toLowerCase() === validarAmigo)){
            alert(`Ya agregaste a ${amigoSecreto}, agrega un nombre diferente`);
        }else {
            listaAmigoSorteado.push(amigoSecreto);
            listaAmigos();           
    }
        
    }   
    console.log(`${amigoSecreto}`);
    console.log(listaAmigoSorteado.length);
    console.log(listaAmigoSorteado);
    limpiarCaja();
}

// Función Sortear amigo secreto
function sortearAmigo(){
    if(listaAmigoSorteado.length<=1){
        alert("Necesitas agregar por lo menos 2 amigos");
        document.getElementById('amigo').focus();
    }else {
        let indiceAleatorio = Math.floor(Math.random()*listaAmigoSorteado.length);
        console.log(indiceAleatorio);
        console.log(listaAmigoSorteado[indiceAleatorio]);
        resultadoAmigoSecreto(indiceAleatorio);
    }
    
}

//Función limpiar caja
function limpiarCaja(){
    document.getElementById('amigo').value = "";
    document.getElementById('amigo').focus();
}

//Función para agregar Amigos a una lista
function listaAmigos() {
    const listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = "";
    for (let amigo of listaAmigoSorteado) {
        const elemento = document.createElement('li');
        elemento.textContent = amigo;
        listaDeAmigos.appendChild(elemento);
    }
}

//Función resultado
function resultadoAmigoSecreto(indice) {
    const resultadoAmigo = document.getElementById('resultado');
    const elemento = document.createElement('li');
    elemento.textContent = `El amigo sorteado secreto es: ${listaAmigoSorteado[indice]}`;
    resultadoAmigo.appendChild(elemento);
    document.getElementById('listaAmigos').innerHTML = "";
    
}