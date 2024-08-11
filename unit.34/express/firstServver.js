const express = require('express')

const app = express()

app.use(express.json());

app.use(express.urlencoded({ extend: true }))

app.get('/', function(req, res){
    res.send("HOMEPAGE")
})


app.get('/dogs', (req, res) => {
    console.log('this is a route')
    res.send('Hello user!')
})

app.get('/chickens', (req, res) => {
    res.send('BOK BOK BOK - get req' )
})

const greetings = {
    en: "hello",
    fr: "bonjour",
    sp: "hola",
}
app.get("/greet/:language", (req, res) => {
    const lang = req.params.language
    const greeting = greetings[lang]
    res.send()
})


app.post('/chickens', function createChicken(req, res){
    res.send('YOU CREATED AA NEW CHICKEN, JK - post req')
})



app.get('/search', (req,res) =>{
    const {term, sort} = req.query;
    res.send(`SEARCH PAGE! Term is: ${term}, and sort is ${sort}`)
})


app.get('/show-me-headers', (req,res) =>{
    res.send(req.headers)
})

app.get('/show-language', (req,res) =>{
    const lang = req.headers['accept-language']
    res.send(`Your langauge preffrence is ${lang}`)
})

app.post('/register', (req, res) => {
    res.send(req.body);
})







app.listen(5500, function(){
    console.log('server has started')
})




