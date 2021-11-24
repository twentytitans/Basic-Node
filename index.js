const express = require('express')
const app = express()
const port = 3000
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000, ()=>{console.log(`Project started at port = ${port} ...`)})