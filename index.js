const express = require('express');
const path = require('path');
const app = express();



app.use(express.static(path.join(__dirname,'web')))

app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname,'web','index.html'));
})

app.get('/register',(req,res) => {
  res.sendFile(path.join(__dirname,'web','register.html'));
})

app.get('/login',(req,res) => {
  res.sendFile(path.join(__dirname,'web','login.html'));
})

app.use((req,res) => {
  res.status(404).sendFile(path.join(__dirname,'web','404.html'))
})

app.listen(3000,(req,res) => {
  console.log('start server and port 3000')
})