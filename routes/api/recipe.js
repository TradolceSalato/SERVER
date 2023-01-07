

const express = require('express')
const recipe = express()


recipe.get('/api/recipes', (req, res) => res.send('lista di ricette'));


module.exports = recipe;
