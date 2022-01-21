const mongoose = require("mongoose");

const MoviesSchema=mongoose.Schema({
    imageURL: String,
    title: String,
    language: String
});

const MoviesModel = mongoose.model("movies",MoviesSchema);

module.exports = MoviesModel;