const h2Init_T = document.getElementById('h2Init')
const h1Panel = document.getElementById('h1Panel')
const h3Name = document.getElementById('h3Name')
const h4Language = document.getElementById('h4Language')
const h1Contro1r = document.getElementById('h1Contro1r')
const h1Contro1 = document.getElementById('h1Contro1')
const startTips = document.getElementById('startTips')
const principal = document.body



function Transl() {
    
    startTips.innerHTML = 'ingles'

}

function translationIng() {

    h1Panel.style.color = 'rgba(255, 255, 255, 0)'
    h3Name.style.color = 'rgba(255, 255, 255, 0)'
    h4Language.style.color = 'rgba(255, 255, 255, 0)'
    h2Init_T.style.display = 'none'
    principal.setAttribute('onload', 'Transl()')
   
    setTimeout (() => {
    h1Panel.style.color = 'rgba(255, 255, 255, 1)'
    h1Panel.innerHTML = 'Choose a color:'
    h3Name.style.color = 'rgba(255, 255, 255, 1)'
    h3Name.innerHTML = 'Write your name:'
    h4Language.style.color = 'rgba(255, 255, 255, 1)'
    h4Language.innerHTML = 'Choose the language:'
    h2Init_T.style.display = ''
    h2Init_T.innerHTML = 'START'
    h5_2.setAttribute('onclick', '')
    h5_1.setAttribute('onclick', 'translationPort()')
}, 300)


h5_2.style.backgroundColor = 'rgb(234, 255, 230, 0.5)'
h5_1.style.backgroundColor = 'rgb(234, 255, 230, 0)'

}

function translationPort() {

    h1Panel.style.color = 'rgba(255, 255, 255, 0)'
    h3Name.style.color = 'rgba(255, 255, 255, 0)'
    h4Language.style.color = 'rgba(255, 255, 255, 0)'
    h2Init_T.style.display = 'none'
    
    setTimeout (() => {
    h1Panel.style.color = 'rgba(255, 255, 255, 1)'
    h1Panel.innerHTML = 'Escolha uma cor:'
    h3Name.style.color = 'rgba(255, 255, 255, 1)'
    h3Name.innerHTML = 'Escreva seu nome:'
    h4Language.style.color = 'rgba(255, 255, 255, 1)'
    h4Language.innerHTML = 'Escolha o idioma:'
    h2Init_T.style.display = ''
    h2Init_T.innerHTML = 'INICIAR'
    h5_1.setAttribute('onclick', '')
    h5_2.setAttribute('onclick', 'translationIng()')
}, 300)

h5_1.style.backgroundColor = 'rgb(234, 255, 230, 0.5)'
h5_2.style.backgroundColor = 'rgb(234, 255, 230, 0)'

}




