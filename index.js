`use strict`;
const express = require('express')
const app = express()
const Port = process.env.Port || 3000;
const recipe = require('./src/routes/recipe');
const category = require('./src/routes/category');

app.use(recipe)
app.use(category)


app.get('/', (req, res) => res.send('Server'))

app.listen(Port, () => console.log(`server listening on localhost:${Port}`));
