//Server med express mot MongoDB
const express = require("express"); 
const cors = require("cors"); 
const mongoose = require("mongoose"); 

//Initiering
const app = express(); 
const port = 3000; 

app.use(experss.json()); 
app.use(cors());

//Anlutning till databas (MongoDB)


//Routing
app.get("/api", (req, res)=>{
    res.json({message: "Välkommen till mitt API!"}); 
})

app.get("/api/workexp", (req, res)=>{
    res.json({message: "Här finns alla poster i databasen!"})
}) 

app.post("/api/workexp", (req, req)=>{
    res.json({message:"Lagt till post i API"})
}) 

app.put("/api/workexp/:id", (req, res)=> {
    res.json({message:"Uppdaterat post med id:" + req.params.id}); 
}) 

app.delete("/api/workexp/:id", (req, res)=> {
    res.json({message:"Tagit bort post med id:" + req.params.id}); 
})


//server start
app.listen(port, ()=>{
    console.log("Servern är uppe på port:" + port); 
}) 
