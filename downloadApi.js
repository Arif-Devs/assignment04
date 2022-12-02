const express = require('express')
const app = express()


app.get('/pic', (req, res) => {
    res.download('./download/Screenshot 2022-11-28 151412.png')
} )


app.listen(8000, ()=>{
    console.log('server is run')
})