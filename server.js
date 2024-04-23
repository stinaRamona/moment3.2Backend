//Server med express mot MongoDB
const express = require("express"); 
const cors = require("cors"); 
const mongoose = require("mongoose"); 

//Initiering
const app = express(); 
const port = 3000; 

app.use(express.json()); 
app.use(cors());

//Anlutning till databas (MongoDB)
mongoose.connect("mongodb://localhost:27017/cv").then(() => {
    console.log("Ansluten till databasen!")
}).catch((error)=>{
    console.log("Fel vid anslutning till databas" + error); 
});

//schema för workexp
const workexpSchema = mongoose.Schema({
    workplace:{
        type: String, 
        required: [true, "Du måste ange arbetsplats!"]
    }, 
    title:{
        type: String, 
        required:[true, "Du måste ange jobbtitel!"]
    }, 
    location:{
        type: String, 
        required:[true, "Du måste ange plats!"]
    }, 
    description:{
        type: String, 
        required: [true, "Du måste ange en kort beskrivning!"]
    }
}); 

//spara i variabel som används i resten av koden
const Workexp = mongoose.model("Workexp", workexpSchema); 

//Routing
app.get("/api", (req, res)=>{
    res.json({message: "Välkommen till mitt API!"}); 
});

app.get("/workexps", async (req, res)=>{
    try{
        let result = await Workexp.find({}); //visar all data i workexp

        return res.json(result); 
    } catch(error) {
        return res.status(500).json(error); 
    }
}); 

app.post("/workexps", async (req, res)=>{
    try{
        let result = await Workexp.create(req.body); 

        return res.json(result); 
    } catch(error) {

        return res.status(400).json(error); 
    }
}); 

app.put("/workexps/:_id", async (req, res)=> {
    try{
        let id = req.params._id;

        let result = await Workexp.updateOne({_id: id}, {$set: req.body}); //uppdaterar med sat ID

        return res.json(result); 

    } catch(error){
        return res.status(500).json(error); 
    } 
}); 

app.delete("/workexps/:_id", async (req, res)=> {
    try{
        let id = req.params._id; 

        let result = await Workexp.deleteOne({_id: id}); //tar bort med ID

        return res.json(result); 
    } catch(error) {

        return res.status(500).json(error); 
    }
}); 


//server start
app.listen(port, ()=>{
    console.log("Servern är uppe på port:" + port); 
}); 
