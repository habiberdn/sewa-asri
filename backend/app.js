const express = require('express')
const cors = require('cors')
const userRouter = require('./router/userRouter')
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '10kb' }));
app.use(cors())

app.use('/api/v1',userRouter)

module.exports = app