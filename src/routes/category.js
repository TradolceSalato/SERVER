
const express = require('express')
const category = express()
const categories = require('../db/db')



category.get('/api/categories', (req, res) => {
  res.json([{
    title : "Masse Montate MALE",
    image : "https://www.misya.info/wp-content/uploads/2018/08/pan-di-spagna.jpg"
},
{
    title : "Pasta Frolla",
    image : "https://www.giallozafferano.it/images/173-17338/Pasta-frolla_450x300.jpg"
},
{
    title : "Biscotti",
    image: "https://www.ricettedellanonna.net/wp-content/uploads/2022/01/biscotti-al-burro-9-620x414.jpg"
},
{
    title : "Crostate",
    image : "https://www.lucake.it/wp-content/uploads/2022/09/crostata-di-marmellata.jpg"
}])
})

module.exports = category;


