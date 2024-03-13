// document.querySelector('p').textContent = 'Esse é um momento histórico, pois estou manipulando HTML com JS! 🧭'

const elementoP = document.querySelector('p');


console.log(elementoP);

elementoP.textContent = 'Estou manipulando de novo! 👹'
elementoP.style.color = 'red'
elementoP.style.fontSize = '50px'

const mensagemET = document.querySelector('.mensagem');
mensagemET.style.color = 'blue'
mensagemET.style.fontSize = '50px'

mensagemET.textContent = 'Não tem nada pra você aqui! Apenas imposto';

const mensagemCoach = document.querySelector('#mensagem');
mensagemCoach.textContent = 'Opa! Já sonegou imposto hoje?'
mensagemCoach.style.color = 'lightgreen'
mensagemCoach.style.fontSize = '50px'

const caixa = document.querySelector('div');
console.log(caixa);

caixa.addEventListener('mouseenter', trocarCor);
caixa.addEventListener('mouseleave', trocarCor2);

function trocarCor() {
    caixa.style.background = '#a200ff'
}

function trocarCor2() {
    caixa.style.background = 'grey'
}

// Não pegamos o valor ainda
const nascimentoUsuario = document.querySelector('#nascimento');
// console.log(nascimentoUsuario)
const botaoCalcular = document.querySelector('.calcular');

const resultadoIdade = document.querySelector('.resultado');

botaoCalcular.addEventListener('click', calcularIdade);

function calcularIdade() {
    let idadeUsuario = Number(nascimentoUsuario.value); 
    resultadoIdade.textContent = ` A sua idade é ${2022 - idadeUsuario} Anos`;
}