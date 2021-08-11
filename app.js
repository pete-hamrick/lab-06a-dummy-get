const express = require('express')
const app = express()

const data = require('./data.js');

app.get('/', (req, res) => {
    res.send('Hello World! Go to /discs to look at some data')
})
app.get('/discs', (req, res) => {
    res.json(data)
})
app.get('/discs/:id', (req, res) => {
    console.log(req.params.id)
    const discId = Number(req.params.id)
    const disc = data.find(item => item.id === discId)
    res.json(disc)
})
app.get('/discs/brand/:brand', (req, res) => {
    const discBrand = req.params.brand
    const disc = data.filter(item => item.brand === discBrand)
    res.json(disc)
})

module.exports = app;