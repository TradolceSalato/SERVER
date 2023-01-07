
const express = require('express')
const category = express()
//const categories = require('../db/db')
const bodyParser = require('body-parser');
const cors = require('cors');
let categories = [];

/*category.use(cors())
category.use(bodyParser.urlencoded({ extended: false }));
category.use(bodyParser.json());
*/
category.get('/api/categories', (req, res) => {
  /*res.json([{
    title : "Masse Montate",
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
}])*/
res.json(categories);
})

category.post('/api/category',(req,res)=>{
    const category = req.body;

    // Output the book to the console for debugging
    console.log(category);
    categories.push(category);

    res.send('category is added to the fake database');
});

//category.put();
//category.delete();

module.exports = category;


