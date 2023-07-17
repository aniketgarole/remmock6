const mongoose = require("mongoose")

const subtaskSchema = mongoose.Schema({
    title: {type: String, required:true},
    isCompleted: {type: Boolean, required: true},
    taskId: {type: String, required:true}
}, 
{
    versionKey: false
})


const subtaskModel = mongoose.model("subtask", subtaskSchema)


module.exports = {subtaskModel}