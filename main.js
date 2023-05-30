import { estado } from "./store.js";
const form = document.forms.entrada;
form.addEventListener('submit', envia);


atualiza();

function envia(e){
    e.preventDefault();
    console.log("Formulário enviado :)");
    estado++;
    atualiza();
}

function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML = `<li>${estado}</li>`;
}