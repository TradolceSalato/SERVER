//`use strict`;
// express
const express = require('express')
const app = express()
const Port = process.env.Port || 3000;
const fs = require('fs')
// import api
const recipe = require('./routes/api/recipe');
const category = require('./routes/api/category');
// import client
const addCategory = require('./routes/client/addcategory');
const addRecipe = require('./routes/client/addrecipe')

//express
app.use(express.static('/public'))
app.use(express.json())

// api
app.use(recipe)
app.use(category)

// client
app.use(addCategory)
app.use(addRecipe)

app.get('/', (req, res) => res.send('Server'))
app.get('*',(req,res)=> res.send(" pagina non trovata"))

//app.get('/addcategory',(req,res) => res.sendFile('add-category.html',{root:__dirname + "/public"}))
//app.get('/addrecipe',(req,res) => res.sendFile('add-recipe.html',{root:__dirname + "/public"}))

app.listen(Port, () => console.log(`server listening on localhost:${Port}`));
