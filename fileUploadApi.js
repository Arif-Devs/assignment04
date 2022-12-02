const express = require('express')
const multer = require ('multer') 
const app = express()


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
    cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage }).single('myfile')

  app.post('/', (req, res) => {
    upload(req, res, (error) => {
            if(error){
                res.send('file upload fail')
            }else{
                res.send('file upload success')
            }
    })
  })

  app.listen(8000, () => {
    console.log('server is run')
  })