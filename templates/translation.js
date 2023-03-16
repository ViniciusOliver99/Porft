const h1Panel = document.getElementById('h1Panel')
const h4Language = document.getElementById('h4Language')
const h1Contro1r = document.getElementById('h1Contro1r')
const h1Contro1 = document.getElementById('h1Contro1')
const startTips = document.getElementById('startTips')
const h2wel = document.getElementById('h2wel')
const h6_f11 = document.getElementById('h6_f11')

// Language Transition

function translationIng() {

    // smooth transition

    h1Panel.style.color = 'rgba(255, 255, 255, 0)'
    h4Language.style.color = 'rgba(255, 255, 255, 0)'
    h2wel.style.color = 'rgba(255, 255, 255, 0)'

    setTimeout (() => {

        h1Panel.innerHTML = 'Choose a color:'
        h4Language.innerHTML = 'Choose the language:'
        h2Init.innerHTML = 'START'
        h6_f11.innerHTML = '*Press f11 for best experience'

        h1Panel.style.color = 'rgba(255, 255, 255, 1)'
        h4Language.style.color = 'rgba(255, 255, 255, 1)'
        h2wel.style.color = 'rgba(255, 255, 255, 1)'

        h5_2.setAttribute('onclick', '')
        h5_1.setAttribute('onclick', 'translationPort()')
    
}, 300)


h5_2.style.backgroundColor = 'rgb(234, 255, 230, 0.5)'
h5_1.style.backgroundColor = 'rgb(234, 255, 230, 0)'

}

function translationPort() {

    // smooth transition
    
    h1Panel.style.color = 'rgba(255, 255, 255, 0)'
    h4Language.style.color = 'rgba(255, 255, 255, 0)'
    h2wel.style.color = 'rgba(255, 255, 255, 0)'
    h6_f11.innerHTML = '*Pressione f11 para melhor experiência'
    
    setTimeout (() => {
        
        h1Panel.innerHTML = 'Escolha uma cor:'
        h4Language.innerHTML = 'Escolha o idioma:'
        h2Init.innerHTML = 'INICIAR'


        h1Panel.style.color = 'rgba(255, 255, 255, 1)'
        h4Language.style.color = 'rgba(255, 255, 255, 1)'
        h2wel.style.color = 'rgba(255, 255, 255, 1)'

        h5_1.setAttribute('onclick', '')
        h5_2.setAttribute('onclick', 'translationIng()')
}, 300)

h5_1.style.backgroundColor = 'rgb(234, 255, 230, 0.5)'
h5_2.style.backgroundColor = 'rgb(234, 255, 230, 0)'

}


