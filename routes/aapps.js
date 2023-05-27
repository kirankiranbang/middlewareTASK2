

const express = require('express');
const apps = express();

const adminRoutes= require('./routes/admin.js');
  const     shopRoutes=require('./routes/shop.js')

const bodyParser = require('body-parser');
apps.use(bodyParser.urlencoded({ extended:false }));

apps.use(adminRoutes)
apps.use(shopRoutes)//apps.use('/shop',shopRoutes) //redirect to 404 page

apps.use((req,res)=>{
res.status(404).send('<h1>page not found(404 error)</h1>')
})
apps.listen(4000);

//