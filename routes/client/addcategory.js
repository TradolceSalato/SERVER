const express = require('express')
const addcategory = express()
addcategory.use(express.static('../public'))
//addcategory.get('/addcategory',(req,res) => res.sendFile('add-category.html',{root:__dirname + ".../public"}))
addcategory.get('/addcategory',(req,res) => res.sendFile('add-category.html',{root:__dirname + "../public"}))

module.exports = addcategory;

