const botao = document.querySelector('.botao')


botao.addEventListener('click',CalcularoBoletim)


function CalcularoBoletim(){

const Nota1= parseFloat( document.querySelector('.Nota1').value
)
const Nota2=parseFloat(document.querySelector('.Nota2').value) 

const Nota3= parseFloat(document.querySelector('.Nota3').value) 

const Nota4=parseFloat( document.querySelector('.Nota4').value)

const soma= Nota1+Nota2+Nota3+Nota4


const media = (soma/4)
console.log(media)
}
