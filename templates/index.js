const cube = document.getElementById('cube')
const box = document.getElementById('box')
const h1 = document.getElementById('h1')
const panel = document.getElementById('panel')
const h5_1 = document.getElementById('h5_1')
const h5_2 = document.getElementById('h5_2')
const body = document.getElementById('body')
const content = document.getElementById('content')
const tips = document.getElementById('tips')
const tips0 = document.getElementById('tips0')
const container = document.getElementById('container')
const h2Init = document.getElementById('h2Init')
const btnAi = document.getElementById('btnAi')
const visitorDiv  = document.getElementById('visitorDiv')
const btnF  = document.getElementById('btnF')
const time = 701

var px = 0
var tipsMov = -300
var clicks = 0
var exchange = 0
var colorStart = 1


// Start movements after 2 seconds

cube.setAttribute('onclick', '')

setTimeout (() => {
    cube.setAttribute('onclick', 'movement(), notmovement(), movPath()')
}, 2000)

// Mouse movement 

function movement() {

    cube.style.transformOrigin = 'bottom right'
    cube.style.animation = 'animate .7s ease-in-out normal'
    box.style.animation = 'animateSurface .7s ease-in-out normal'
    cube.setAttribute('onclick', '')
}

function notmovement() {
    setTimeout(() => {
        cube.style.animation = ''
        box.style.animation = ''
        cube.setAttribute('onclick', 'movement(), notmovement(), movPath()')
    }, 701);
}

// Key movement 

const keyDown = (e) => {
    if (e.key == 'ArrowRight') {

    cube.style.transformOrigin = 'bottom right'
    cube.style.animation = 'animate .7s ease-in-out normal'
    box.style.animation = 'animateSurface .7s ease-in-out normal'
    h1Contro1r.style.textShadow = '0 0 30px rgba(255, 255, 255, 1),0 0 30px rgba(255, 255, 255, 1),0 0 30px rgba(255, 255, 255, 1)'

}if (e.key == 'ArrowLeft') {

    cube.style.transformOrigin = 'bottom left'
    h1Contro1.style.textShadow = '0 0 30px rgba(255, 255, 255, 1),0 0 30px rgba(255, 255, 255, 1),0 0 30px rgba(255, 255, 255, 1)'
    box.style.animation = 'animateSurfaceLeft .7s ease-in-out normal'
    cube.style.animation = 'animateLeft .7s ease-in-out normal'
}}

document.addEventListener('keydown', keyDown)

const keyUp = (e) => {
    if (e.key == 'ArrowRight') {
    
        h1Contro1r.style.textShadow = '0 0 10px rgba(255, 255, 255, 0)'

    setTimeout(() => {
        cube.style.animation = ''
        box.style.animation = ''
    }, 701);

}if (e.key == 'ArrowLeft') {
    
    h1Contro1.style.textShadow = '0 0 10px rgba(255, 255, 255, 0)'

    setTimeout(() => {
        cube.style.animation = ''
        box.style.animation = ''
    }, 701);
}}
document.addEventListener('keyup', keyUp)



var movv = 500
// Text Movement

function movPath() {



    tipsMov += -300
    console.log(tipsMov)
    clicks += 1
    console.log(clicks)



    tips.style.marginLeft = `${tipsMov}px`



    if(tipsMov == -1500) {  
        tips.style.marginTop = '-5000px'
    }if(tipsMov < -1500) {
        tips.style.marginLeft = `-300px`
    }if(clicks > 5) {
        tips.style.marginTop = '-300px'
        tipsMov = -300
        tips.style.marginLeft = `-300px`
        clicks = 0
        exchange += 1
        console.log(exchange)
    }
    
    // Text change

    if(exchange == 2) {
        tips.innerHTML = `<div id="tips1">Olá seja, Bem-vindo =D 
                          <br>
                          <br>
                          É bom ter você por aqui
                          <br>
                          <br>
                          Eu me Chamo Vincius, tenho 22 anos, e sou de um pequeno município chamado:</div>`
    }if(exchange == 3) {
        tips.innerHTML = `<a href="https://www.google.com.br/maps/place/Saquarema,+RJ,+28990-000/@-22.871109,-42.6643643,11z/data=!3m1!4b1!4m5!3m4!1s0x975e1971d0baa7:0x85c6ef0e0cc50317!8m2!3d-22.8935085!4d-42.4683252" id="aTips2" target="_blank">SAQUAREMA</a>

                         <div id='tips2'>

                            <br>
                            <div><img src="/img/map.png" alt="map" id="imgTips2"></div>

                         </div>`
    }if(exchange == 4) {
        tips.innerHTML = `
                         <div>
                            <h3>EXPERIÊNCIAS</h3>
                            <br>  
                            <br>
                            <br>
                            <h5>Eu estudo programação desde Julho de 2022, e me apaixonei por esse mundo da tecnologia </h5>
                            <br>
                            <h5>Eu estou no meu primeiro semestre em ciências da computação na Estácio de Sá EAD</h5>
                            <br>
                            <h5>E esse são alguns dos meus projetos()=> { </h5>
                         </div>
                         `
    }    if(exchange == 5) {


        tips.innerHTML = `
        <div id="vini"></div>
         <div id="cardsTips4">

            <div id="card1"><img src="/img/natural.png" id="imgCards1" alt="imgcard">
            <br>
            <h5 id="titleCards">Natural</h5>

            <div id="optionsCard">

            <div id="optionCard1"><a href="https://www.linkedin.com/posts/vinicius-oliveira-904291248_css-html-ecommerce-activity-6993064948155203584-J0Tt?utm_source=share&utm_medium=member_desktop" target="_blank" id="link">Vídeo 🎥</a></div>
            <div id="optionCard2"><a href="http://github.com/ViniciusOliver99/natural" target="_blank" id="link">GitHub 👾</a></div>
            
            </div>
            
            <p id="pCards">
            Resumo:

            Aqui tive a ideia de fazer um E-commercer para venda de produtos naturais,
            Criei em nodeJS, com autenticação de e criação de usuários, e base de dados do MonngoDB.

            </p>
            
            </div>

            <div id="card2"><img src="/img/cep.png" id="imgCards1" alt="imgcard">
            <br>
            <h5 id="titleCards">Buscador de Cep</h5>

            <div id="optionsCard">

            <div id="optionCard1"><a href="http://www.linkedin.com/posts/vinicius-oliveira-904291248_mais-um-projeto-um-pagina-de-busca-de-cep-activity-6970930526396239872-UivR?utm_source=share&utm_medium=member_desktop" target="_blank" id="link">Vídeo 🎥</a></div>
            <div id="optionCard2"><a href="http://https://github.com/ViniciusOliver99/localiza-cep" target="_blank" id="link">GitHub 👾</a></div>
            
            </div>
            
            <p id="pCards">

            Resumo:

            Neste, que foi um dos meus projetos mais antigos, eu fiz um buscador de cep, com uma api que achei na internet.

            </p>
            
            </div>

            <div id="card3"><img src="/img/ListaDeTarefas.png" id="imgCards1" alt="imgcard">
            <BR>
            <h5 id="titleCards">Lista  de Tarefas</h5>

            <div id="optionsCard">

            <div id="optionCard1"><a href="http://www.linkedin.com/posts/vinicius-oliveira-904291248_finalizado-o-projeto-de-uma-lista-de-tarefas-activity-6967932756508983296-7jJR?utm_source=share&utm_medium=member_desktop" target="_blank" id="link">Vídeo 🎥</a></div>
            <div id="optionCard2"><a href="http://" target="_blank" id="link">GitHub 👾</a></div>
            
            </div>
            
            <p id="pCards">
            Resumo:

            Esse é o clássico projeto da lista de tarefa, que todo aspirante a programador um dia já fez.

            </p>

            </div>

         </div>
         `
    }

    if (exchange == 1) {
        
        input.style.display = 'flex'
        resDiv.style.display = 'inline'
        btnAi.style.display = 'flex'
        
        tips0.innerHTML = ``
        res.innerHTML = "Antes de começar a Jornada, estou aqui para tirar suas dúvidas. <br>Dicas: 'Os projetos dele', 'Me fale mais dele', etc. "

    }

    if (exchange == 6){

        tips.style.display = 'none'
        tips.style.color = '#03e8f400'


        setTimeout (() => {
            tips.style.display = 'inline'
            btnF.style.color = '#03e8f400'
        },1000)

        setTimeout (() => {
            tips.style.color = 'white'
        },1500)

        setTimeout (() => {
            visitorDiv.style.display = 'flex'
        },1200)

        setTimeout (() => {
  
            visitorDiv.style.marginTop = '500px'             
        },1700)

        h2Init.style.margin = '-10px'
        cube.style.cursor = 'alias'
        cube.style.backgroundColor = '#03e8f400'
        cube.style.boxShadow = `0 0 5px 0 rgba(3, 233, 244, 0),
                                0 0 25px 0 rgba(3, 233, 244, 0),
                                0 0 50px 0 rgba(3, 233, 244, 0),
                                0 0 100px 0 rgba(3, 233, 244, 0),
                                0 0 200px 0 rgba(3, 233, 244, 0),
                                0 0 300px 0 rgba(3, 233, 244, 0)`

        
        tips.style.marginTop = '-10px'
        tips.style.textAlign = 'center'
        tips.style.marginLeft = '700px'
        tips.innerHTML = ` 

        <h4>Muito obrigado por ter chegado até aqui 😉
        <br>
        Deixe seu feedback aqui em baixo, para críticas, elogios, melhoras e etc.
        </h4>

        <br>
        <br>

        <form action="" method="post">
            <label for="name">Nome:</label>
            <br>
                <input type="text" name="name" required class="">
            <br>    
            <label for="description">Comentário:</label>
            <br>
                <input type="text" name="description" required class="">
            <br>
            <button type="submit" class="h2Init" >Enviar</button>
        </form>

        <br>
        <br>
    
        `

    }

    if(exchange > 6 || exchange == 6) {

        tipsMov = 0
    }

}

// Choose color

function chooseColorBlue () {

    const blue = document.getElementById('blue').value
    colorStart = 1
    console.log(colorStart)

    cube.style.backgroundColor = '#03e9f4'
    cube.style.boxShadow = `0 0 5px 0 rgba(3, 233, 244, 1),
                            0 0 25px 0  rgba(3, 233, 244, 1),
                            0 0 50px 0  rgba(3, 233, 244, 1),
                            0 0 100px 0 rgba(3, 233, 244, 1),
                            0 0 200px 0  rgba(3, 233, 244, 0.5),
                            0 0 300px 0  rgba(3, 233, 244, 0.5)`

    panel.style.boxShadow = '0 0 5px 0 #03e9f4'
    h2Init.style.color = 'rgba(3, 233, 244, 1)'
    h2Init.style.textShadow = '0 0 8px rgba(255, 255, 255, 0.3), 0 0 29px #03e9f4'
    h2Init.style.boxShadow ='inset 0 0 10px #03e9f4, 0 0 10px #03e9f4'
}

function chooseColorGreen () {

    const green = document.getElementById('green').value
    colorStart = 2
    console.log(colorStart)

    cube.style.backgroundColor = 'rgb(43, 255, 0)'
    cube.style.boxShadow = `0 0 5px 0 rgb(43, 255, 0),
                            0 0 25px 0  rgb(43, 255, 0),
                            0 0 50px 0  rgb(43, 255, 0),
                            0 0 100px 0 rgb(43, 255, 0),
                            0 0 200px 0  rgb(43, 255, 0),
                            0 0 300px 0  rgb(43, 255, 0)`
    
    panel.style.boxShadow = '0 0 5px 0 rgb(43, 255, 0)'
    h2Init.style.color = 'rgb(43, 255, 0)'
    h2Init.style.textShadow = '0 0 8px rgba(255, 255, 255, 0.3), 0 0 29px rgb(43, 255, 0)'
    h2Init.style.boxShadow ='inset 0 0 10px rgb(43, 255, 0), 0 0 10px rgb(43, 255, 0)'

}

function chooseColorYellow () {

    const yellow = document.getElementById('yellow').value
    colorStart = 3
    console.log(colorStart)

    cube.style.backgroundColor = 'rgb(234, 255, 0)'
    cube.style.boxShadow = `0 0 5px 0 rgb(234, 255, 0),
                            0 0 25px 0  rgb(234, 255, 0),
                            0 0 50px 0  rgb(234, 255, 0),
                            0 0 100px 0 rgb(234, 255, 0),
                            0 0 200px 0  rgb(234, 255, 0),
                            0 0 300px 0  rgb(234, 255, 0)`
    
    panel.style.boxShadow = '0 0 5px 0 rgb(234, 255, 0)'
    h2Init.style.color = 'rgb(234, 255, 0)'
    h2Init.style.textShadow = '0 0 8px rgba(255, 255, 255, 0.3), 0 0 29px rgb(234, 255, 0)'
    h2Init.style.boxShadow ='inset 0 0 10px rgb(234, 255, 0), 0 0 10px rgb(234, 255, 0)'

}


// moviment panel

function start() {

    panel.style.marginTop = '-20000px'


    setTimeout(() => {
        tips.style.display = 'flex'
    }, 500)
    setTimeout(() => {
        tips.style.marginTop = '-380px'
    }, 1000)

    // fading block effect

    cube.style.backgroundColor = 'black'
    cube.style.boxShadow = `0 0 5px 0 rgba(0, 0, 0),
                            0 0 25px 0 rgba(0, 0, 0),
                            0 0 50px 0 rgba(0, 0, 0),
                            0 0 100px 0 rgba(0, 0, 0),
                            0 0 200px 0 rgba(0, 0, 0),
                            0 0 300px 0 rgba(0, 0, 0)` 

if(colorStart === 1) {
    setTimeout(() => {
        cube.style.backgroundColor = '#03e9f4'
        cube.style.boxShadow = `
        0 0 5px 0 rgba(3, 233, 244, 1),
        0 0 25px 0 rgba(3, 233, 244, 1),
        0 0 50px 0 rgba(3, 233, 244, 1),
        0 0 100px 0 rgba(3, 233, 244, 1),
        0 0 200px 0 rgba(3, 233, 244, 0.5),
        0 0 300px 0 rgba(3, 233, 244, 0.5)`       
    },1000)
}if(colorStart === 2) {
    setTimeout(() => {
        cube.style.backgroundColor = 'rgb(43, 255, 0)'
        cube.style.boxShadow = `
        0 0 5px 0 rgb(43, 255, 0),
        0 0 25px 0  rgb(43, 255, 0),
        0 0 50px 0  rgb(43, 255, 0),
        0 0 100px 0 rgb(43, 255, 0),
        0 0 200px 0  rgb(43, 255, 0),
        0 0 300px 0  rgb(43, 255, 0)`       
    },1000)
}if(colorStart === 3) {
    setTimeout(() => {
        cube.style.backgroundColor = 'rgb(234, 255, 0)'
        cube.style.boxShadow = `
        0 0 5px 0 rgb(234, 255, 0),
        0 0 25px 0  rgb(234, 255, 0),
        0 0 50px 0  rgb(234, 255, 0),
        0 0 100px 0 rgb(234, 255, 0),
        0 0 200px 0  rgb(234, 255, 0),
        0 0 300px 0  rgb(234, 255, 0)`       
    },1000)
}
}

// Start button effect

const colors = () => {
    if(colorStart == 1) {
        h2Init.style.boxShadow = 'inset 0 0 32px #03e9f4, 0 0 15px #03e9f4'
    }if(colorStart == 2) {
        h2Init.style.boxShadow = 'inset 0 0 32px rgb(43, 255, 0), 0 0 15px rgb(43, 255, 0)'
    }if(colorStart == 3) {
        h2Init.style.boxShadow = 'inset 0 0 32px rgb(234, 255, 0), 0 0 15px rgb(234, 255, 0)'
    }
}

const colorsout = () => {
    if(colorStart == 1) {
        h2Init.style.boxShadow = 'inset 0 0 10px #03e9f4, 0 0 15px #03e9f4'
    }if(colorStart == 2) {
        h2Init.style.boxShadow = 'inset 0 0 10px rgb(43, 255, 0), 0 0 15px rgb(43, 255, 0)'
    }if(colorStart == 3) {
        h2Init.style.boxShadow = 'inset 0 0 10px rgb(234, 255, 0), 0 0 15px rgb(234, 255, 0)'
    }
}