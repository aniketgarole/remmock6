const express = require("express")
const { taskModel } = require("../models/task.model")

const taskRoutes = express.Router()


taskRoutes.post("/create", async(req, res)=> {
    try {
        const {boardId} = req.body
        const task = new taskModel(req.body)
        await task.save()
        res.status(200).json({"msg": "A new task has been created"})
    } catch (error) {
        res.status(200).json({"err": error.message})
    }
})


taskRoutes.get("/:boardId", async(req, res)=> {
    try {
        const {boardId} = req.params
        const tasks = await taskModel.find({boardId})
        res.status(200).json({"tasks": tasks})
    } catch (error) {
        res.status(400).json({"err": error.message})
    }
})


taskRoutes.patch("/:_id", async(req, res)=> {
    try {
        const {_id} = req.params
        const update = req.body
        console.log(update)
        await taskModel.findByIdAndUpdate({_id}, update)
        res.status(200).json({"msg": "task has been updated"})
    } catch (error) {
        res.status(400).json({"err": error.message})
    }
})


module.exports = {taskRoutes}