const express = require("express")
const { boardModel } = require("../models/board.model")

const boardRoutes = express.Router()


boardRoutes.get("/:boardId", async(req, res)=> {
    try {
        const {boardId} = req.params
        const board = await boardModel.findOne({_id:boardId})
        res.status(200).json({"board": board})
    } catch (error) {
        res.status(400).json({"err": error.message})
    }
})


boardRoutes.post("/create", async(req, res) => {
    try {
        
        const newBoard = new boardModel(req.body)
        await newBoard.save()
        res.status(200).json({"msg": "A new board has been created"})
    } catch (error) {
        res.status(400).json({"err": error.message})
    }
})






module.exports = {boardRoutes}