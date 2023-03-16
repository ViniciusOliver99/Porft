const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3030
const Visitor = require('./models/Visitor')
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const sound = require('play-sound')()
const path = require('path')



//templates
app.use(express.static('templates'))

// Handlebars
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')

// json 
app.use(
    express.urlencoded({
        extended:true,
    })
)
app.use(express.json())

// BodyParer
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// routes
app.get('/', (req, res) => {

    const audioFile = path.join('C:/Users/Vinicius/Desktop/Pastas/Projetos/Épico-Portfólio/templates/music/undertale.mp3')

    Visitor.find().lean().then((visitor) => {

    res.render(__dirname + '/views/layouts/main', {visitor:visitor})

    })
})

app.post('/', (req, res) => {
    

    var err = []

    if(!req.body.name|| req.body.name == null || req.body.name == null) {
        err.push({text: 'Digite alguma coisa'})
    }if(!req.body.description|| req.body.description == null || req.body.description == null) {
        err.push({text: 'Digite alguma coisa'})
    }
    
    const newVisitor = new Visitor ({

        name: req.body.name,
        description:req.body.description

    })

    newVisitor.save().then(() => {
        console.log('Visita salvo com sucesso')
        res.redirect('/', )
    }).catch((err) => {
        console.log('Não salvo', err)
    })
})



mongoose.connect('mongodb+srv://Vinicius:alinevini@cluster0.qhzoffv.mongodb.net/test')
.then (() => {
    app.listen(port, ()=> {
        console.log('Server running')
    })
})
.catch ((err) => {
    console.log(err)
})