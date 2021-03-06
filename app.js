const express = require('express')
const app = express()
const http = require('http').Server(app)
//global constant
const port = 1989

//server init
http.listen(port, "0.0.0.0", function(){
  console.log('listening on :', port);
});

//config
app.use(express.static('public'))
app.set('view engine', 'pug');

//routes
app.get('/orbit', (req, res) => {
  res.render('orbit')
})

app.get('/liquid', (req, res) => {
  res.render('liquid_transition')
})

app.get('/scrolltrigger', (req, res) => {
  res.render('scrolltrigger')
})

app.get('/landingpage', (req, res) => {
  res.render('landingpage')
})

app.get('/hoverlist', (req, res) => {
  res.render('hoverlist')
})

app.get('/navbar', (req, res) => {
  res.render('navbar')
})

app.get('/parallax', (req, res) => {
  res.render('parallax')
})

app.get('/imageparallax', (req, res) => {
  res.render('imageparallax')
})

app.get('/imageparallax2', (req, res) => {
  res.render('imageparallax2')
})

app.get('/videoscroll', (req, res) => {
  res.render('videoscroll')
})