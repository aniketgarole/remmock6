const express = require("express")
const { subtaskModel } = require("../models/subtask.model")

const subtaskRoutes = express.Router()


subtaskRoutes.get("/:id", async(req, res)=> {
    try {
        const {id} = req.params
        const subtasks = await subtaskModel.find({taskId:id})
        res.status(200).json({"subtasks": subtasks})
    } catch (error) {
        res.status(400).json({"err": error.message})
    }
})


subtaskRoutes.post("/create", async(req, res)=> {
    try {
        const newSubtask = new subtaskModel(req.body)
        newSubtask.save()
        res.status(200).json({"msg": "New subtask has been created"})
    } catch (error) {
        res.status(400).json({"err": error.message})
    }
})



subtaskRoutes.patch("/:_id", async(req, res)=> {
    try {
        const {_id} = req.params
        const update = req.body
        console.log(update)
        await subtaskModel.findByIdAndUpdate({_id}, update)
        res.status(200).json({"msg": "subtask has been updated"})
    } catch (error) {
        res.status(400).json({"err": error.message})
    }
})


module.exports = {subtaskRoutes}