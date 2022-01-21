//MAIN BACKEND FILE 
const MoviesModel=require("./database/movies")
const UserModel=require("./database/users")
require('dotenv').config()
const express=require("express");
var cors = require('cors')
const app=express();
app.use(cors())
app.use(express.json());

//Import the mongoose module
var mongoose=require('mongoose');
//set up default mongoose connection
var mongodb=process.env.MONGODB_URI;
mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("CONNECTION ESTABLISHED"))


app.get("/",(req,res) => {
    return res.json({"WELCOME":`to my Backend Software for BookMyShow`});
});

app.get("/movies", async (req,res) => {
    const getAllMovies=await MoviesModel.find();
    return res.json(getAllMovies);
});

app.get("/movie/:id", async (req,res) => {
    const {id} = req.params;
    const getMovie=await MoviesModel.findOne({_id: id});
    return res.json(getMovie);
});

app.post("/user-register", async (req,res) => {
    const addNewUser = await UserModel.create(req.body);
    return res.json( {userAdded: addNewUser, message:"User was added"});
});

app.listen(5000,()=>{
    console.log("My Express App is Running....")
});