const express=require('express');
const app=express();
const path=require('path');
// console.log(__dirname);
// console.log(path.join(__dirname, 'public'));

const staticPath=path.join(__dirname, 'public');

// To set view Engine
// app.set('view engine','hbs');


// Built in Middleware
app.use(express.static(staticPath));

// template engine route 
// app.get('',(req,res)=>{
//    res.render('index');
// })

app.get('/about' , (req , res)=>{

   res.send('hello from simple server :)')

})
app.listen(process.env.PORT || 5000,()=>{
   console.log('listening');
});
