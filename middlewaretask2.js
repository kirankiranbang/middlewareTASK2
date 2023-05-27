
//PS C:\Users\Dell\backend devlopement>npm install --save body-parser



//  const express = require('express');

// const apps = express();





// apps.use(express.urlencoded({ extended: false }));



// apps.use('/add-product', (req, res, next) => {

  

//   res.send('<form action="/product" method="post"><input type="text" name="title">input type="text" name="size" placeholder="Product Size"><button type="submit">addproducts</button></form>');

// });



// apps.use('/product', (req, res, next) => {

//   console.log(req.body);

//  res.redirect('/');

// });



// apps.use('/', (req, res, next) => {

//   console.log('middleware!');

//   res.send('<h1>kiran</h1>');

// });



// apps.listen(4000);





////-----------------------------------------------------------------------------------







const express = require('express');

const apps = express();



const bodyParser = require('body-parser');

apps.use(bodyParser.urlencoded({ extended:false }));



apps.use('/add-product', (req, res, next) => {

  

  res.send('<form action="/product" method="post"><input type="text" name="title"><input type="text" name="size" placeholder="Product Size"><button type="submit">addproducts</button></form>');

});



apps.use('/product', (req, res, next) => {

  console.log(req.body);

 res.redirect('/');

});



apps.use('/', (req, res, next) => {

  console.log('middleware!');

  res.send('<h1>kiran</h1>');

});



apps.listen(4000);

