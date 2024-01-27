import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'

import stepsRouter from './routes/stepsRouter.js'

import db from './config/mongo.js'

const PORT = process.env.PORT || 3001
const app = express()
const logger = morgan('dev')

app.use(express.json())
app.use(logger)

// Routes
app.use('/api/steps', stepsRouter)

// const start = async () => {
//     console.log(await db?.listCollections().toArray())
// }



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})

