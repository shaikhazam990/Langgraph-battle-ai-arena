import express from 'express'
import useGraph from "./services/graph.service.js"

const app = express()


app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' })
})

app.post("/use-graph",async (req, res) => {
    await useGraph("write sum of two number in javascript")
})

export default app