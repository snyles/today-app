import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import { auth } from 'express-oauth2-jwt-bearer'
import corsMW from './middleware/cors.js'
import cors from 'cors'
import taskRouter from './route/taskRouter.js'

import './config/mongo.js'

const PORT = process.env.PORT || 3001
const app = express()
const logger = morgan('dev')

// Middleware
app.use(express.json())
app.use(logger)
app.use(corsMW)

// Allow all CORS Pre-Flight
app.options('*', cors())

// Routes
app.use('/api/tasks', taskRouter)

app.get('/test', (req, res) => res.status(200).json({ status: 'yay!' }))

// Protected Routes
app.get('/auth', auth(), (req, res) => {
    res.status(200).json({ status: 'yay!', payload: req.auth?.payload })
})

const server = app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})

const shutdown = () => server.close(async () => {
    console.log('Server closed')
    await mongoose.disconnect()
    process.exit(0)
})

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

