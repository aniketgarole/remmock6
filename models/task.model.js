const mongoose = require("mongoose")

const taskSchema = mongoose.Schema({
    title: {type: String, required:true},
    description: {type: String, required: true},
    status: {type: String, enum: ["Todo", "Doing", "Done"], default: "Todo"},
    boardId: {type: String, required: true}
}, 
{
    versionKey: false
})


const taskModel = mongoose.model("task", taskSchema)


module.exports = {taskModel}