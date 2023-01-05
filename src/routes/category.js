
const express = require('express')
const category = express()
const categories = require('../db/db')



category.get('/api/categories', (req, res) => {
  res.json(categories)
})

module.exports = category;


