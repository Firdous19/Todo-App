const {mongoConnect} = require("../passwords")
const mongoose = require("mongoose");

mongoose.connect(mongoConnect);

const todoSchema = new mongoose.Schema (
    {
        title : String,
        description : String, 
    }
)

const Todos = mongoose.model("Todos",todoSchema);



module.exports = {Todos};