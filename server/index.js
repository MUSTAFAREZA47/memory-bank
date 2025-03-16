import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'


import postRoutes from './routes/posts.js'
import connectDB from './db/connectDB.js'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/posts', postRoutes)

// const PORT = 8000
connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running at port: ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log('MongoDB Connection Failed!!! ', err)
    })
