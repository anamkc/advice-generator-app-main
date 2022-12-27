var express = require('express')
var cors = require('cors')
var app = express()
const quotes = require('./quotes.json')

app.use(cors())

app.get('/quotes/', function (req, res, next) {
  res.json(quotes)
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})