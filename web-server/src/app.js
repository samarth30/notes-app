const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('./util/geocode.js');
const forcast = require('./util/forcast.js'); 

const app = express();

/// printing the currentdir , rootdir, apni marzi ka path
console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname,"../public"));

// defining the paths to use further
const publicDirectoryPath = path.join(__dirname,"../public");
const viewsPath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

// using and importing hbs file
app.set("view engine","hbs");
app.set("views",viewsPath);

// hbs method to set partials
hbs.registerPartials(partialsPath);

// using the files located in public
app.use(express.static(publicDirectoryPath));


// get method for defining the new commands
app.get('',(req,res)=>{
    res.render('index',{
        title:"weather app",
        name:"samarth gugnani"
    })
})

// render used to display the hbs files
app.get('/about',(req,res)=>{
  res.render('about',{
    title:"about page",
    name:"samarth gugnani"
});
});

app.get('/help',(req,res)=>{
  res.render('help',{
      title:"help page",
      name:"samarth gugnani"
  })
});

// command created with json array and two objects
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"please provide adress of weather"
        })
    }
    geocode(req.query.address,(error,{lattitude,longitude,location}={})=>{
         if(error){
             return res.send({error})
         }
  
         forcast(lattitude,longitude,(error,forcastData)=>{
             if(error){
                 return res.send({error})
             }
             res.send({
                 forcast:forcastData,
                 location,
                 address:req.query.address
                })
         })
    })
})

app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'you must provide search term'
        })
    }
    console.log(req.query.search);
    res.send({
        products:[]
    })
})

app.get("/help/*",(req,res)=>{
    res.render('404',{
        title:"404",
        name:"samarth",
        errorMessage:"help article not found try"
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:"404",
        name:"samarth",
        errorMessage:"page not found try again"
    })
});

/// used to start the server
app.listen(3000,()=>{
  console.log("the server is on port 3000");
});

