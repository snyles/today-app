import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import { auth } from 'express-oauth2-jwt-bearer'
import corsConfig from './middlewares/cors.js'
import cors from 'cors'
import { stepRouter } from './routes/stepRouter.js'

import './config/mongo.js'
import { Server } from 'http'

// let server: Server

const PORT = process.env.PORT || 3001
const app = express()
const logger = morgan('dev')

// Middleware
app.use(express.json())
app.use(logger)
app.use(corsConfig)

// Allow all CORS Pre-Flight
app.options('*', cors())

// Routes
app.use('/api/step', stepRouter)

app.get('/test', (req, res) => res.status(200).json({ status: 'yay!' }))

// Protected Routes
app.get('/auth', auth(), (req, res) => {
    res.status(200).json({ status: 'yay!', payload: req.auth?.payload })
})

const server: Server = app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})

const shutdown = () => {
    if (server) {
        server.close(async () => {
            console.log('Server closed')
            await mongoose.disconnect()
            process.exit(0)
        })
    }
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

