


const express = require('express')
const addrecipe = express()
const port = 3000

addrecipe.get('/addrecipe', (req, res) => res.send('add recipe'))


module.exports = addrecipe;