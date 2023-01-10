const cube = document.getElementById('cube')
const box = document.getElementById('box')
const h1 = document.getElementById('h1')
const panel = document.getElementById('panel')
const h5_1 = document.getElementById('h5_1')
const h5_2 = document.getElementById('h5_2')
const h2Init = document.getElementById('h2Init')
const body = document.getElementById('body')
const content = document.getElementById('content')

var px = 0
const time = 701

// parando monimento por dois segundos

cube.setAttribute('onclick', '')

setTimeout (() => {
    cube.setAttribute('onclick', 'movement(), notmovement()')
}, 2000)

function movement() {

    px += -200

    cube.style.transformOrigin = 'bottom right'
    cube.style.animation = 'animate .7s ease-in-out normal'
    box.style.animation = 'animateSurface .7s ease-in-out normal'
    h1.style.transform = `translateX(${px}px)`
    content.style.transform = `translateX(${px}px)`
    h1.style.transition = '1.5s'
    cube.setAttribute('onclick', '')
}

function notmovement() {
    setTimeout(() => {
        cube.style.animation = ''
        box.style.animation = ''
        cube.setAttribute('onclick', 'movement(), notmovement()')
    }, 701);
}

function chooseColorBlue () {

    const blue = document.getElementById('blue').value

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

