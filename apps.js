




const express = require('express');
const apps=express();

apps.use((req,res,next)=>{
    console.log('middle ware!');
next();
})


apps.use((req,res,next)=>{
    console.log('another middle ware!');

res.send('<h1>hello users from kiran</h1>')
})

apps.listen(4000);

// apps.listen(4000, () => {
//     console.log('Server is listening on port 3000');
//   });


//

