const mongoose = require("mongoose")

const boardSchema = mongoose.Schema({
    name: {type: String, required:true},
    
},
{
    versionKey: false
})


const boardModel = mongoose.model("board", boardSchema)

module.exports = {boardModel}