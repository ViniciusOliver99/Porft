const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3030
const Visitor = require('./models/Visitor')
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')


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

    Visitor.find().lean().then((visitor) => {
    res.render(__dirname + '/views/layouts/register', {visitor:visitor})

    })
})

app.post('/visitor', (req, res) => {

    var err = []

    if(!req.body.name|| req.body.name == null || req.body.name == null) {
        err.push({text: 'Digite alguma coisa'})
    }
    
    const newVisitor = new Visitor ({

        name: req.body.name,
        description:req.body.description

    })

    newVisitor.save().then(() => {
        console.log('Visita salvo com sucesso')
        res.redirect('/start')
    }).catch((err) => {
        console.log('Não salvo', err)
    })
})

app.get('/start', (req, res) => {
    
    res.render(__dirname + '/views/layouts/start')
})

// database and port conection 
mongoose.connect('mongodb+srv://Vinicius:alinevini@cluster0.qhzoffv.mongodb.net/?retryWrites=true&w=majority')
.then (() => {
    app.listen(port, ()=> {
        console.log('Server running')
    })
})
.catch ((err) => {
    console.log(err)
})