//Variables
let listaAmigoSorteado = [];


//Funciones

// Función agregar amigo secreto
function agregarAmigo(){
    let amigoSecreto = String(document.getElementById('amigo').value);
    console.log(`${amigoSecreto}`);
    limpiarCaja();
}

// Función Sortear amigo secreto
function sortearAmigo(){
    console.log(`Sortear`);
}

//Función limpiar caja
function limpiarCaja(){
    document.getElementById('amigo').value = "";
    document.getElementById('amigo').focus();
}

