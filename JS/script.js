const frases = [
    "Não Desista!",
    "Dê o seu melhor!",
    "Você Consegue!",
    "Você é o melhor!",
    "Nada é impossivel!",
    "Vai dar certo!"
];

const frase = document.querySelector('#frase');
const btn = document.querySelector('#btn');

function gerarFrase(){
    const randomizar = Math.floor(Math.random() * frases.length);
    frase.innerText = frases[randomizar];
}
btn.addEventListener('click', gerarFrase);