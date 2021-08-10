const express = require('express')
const app = express()

const data = require('./data.js');

app.get('/', (req, res) => {
    res.send('Hello World! Go to /discs to look at some data')
})
app.get('/discs', (req, res) => {
    res.json(data)
})



module.exports = app;