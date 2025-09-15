// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');

function agregarAmigo(){
    
    const input = document.getElementById('amigo');
    //Utilizamos tirm para eliminar los espacios
    const nombreAmigo = input.value.trim(); 
 
    // Condición para evitar nombres vacíos o duplicados.
    if(nombreAmigo === ""){
        alert("Por favor, escribe un nombre.");
        return; 
    }

    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya ha sido agregado. Por favor, introduce un nombre diferente.");
        input.value = ''; 
        return;
    }

    amigos.push(nombreAmigo);

    actualizarListaAmigos();
    
    // Limpiamos el campo de entrada y lo enfocamos para agregar el siguiente amigo fácilmente.
    input.value = '';
    input.focus();
}

function actualizarListaAmigos() {

    listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}


function sortearAmigo(){
    const sortear = Math.floor(Math.random() * amigos.length);
    
    document.getElementById('resultado').textContent = amigos[sortear];
}