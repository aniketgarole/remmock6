const express = require("express")
const { connection } = require("./connect")
const cors = require("cors")
const { boardRoutes } = require("./routes/board.route")
const { taskRoutes } = require("./routes/task.route")
const { subtaskRoutes } = require("./routes/subtask.route")


const app = express()

app.use(express.json())
app.use(cors())


app.use("/boards", boardRoutes)
app.use("/tasks", taskRoutes)
app.use("/subtasks", subtaskRoutes)


app.listen(8080, async()=> {
    console.log("Server is running at port 8080")
    try {
        await connection
        console.log("Server is connected is DB")
    } catch (error) {
        console.log("Server could not connect to DB")
        console.log(error)
    }
})