const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())



app.post('/', (req, res) =>{
    res.send('this is simple post')
})

app.post('/header', (req, res) => {
    const fullName = req.header('fullName')
    const address = req.header('address')
    const occupation = req.header('occupation')
    res.send(`fullName: ${fullName}, address: ${address}, occupation: ${occupation}`)
})

app.post('/body', (req, res) => {
    const JSONData = req.body
    const JSONString = JSON.stringify(JSONData)
    res.send(JSONString)
})



app.listen(8000, ()=>{
    console.log('server is run')
})
