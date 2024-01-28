import express from 'express'
import * as stepController from '../controllers/stepController.js'

const stepRouter = express.Router()

stepRouter
        .get('/', stepController.index)
        .get('/:id', stepController.findOne)
        .post('/', stepController.create)
        .put('/complete/:id', stepController.setComplete)


export { stepRouter }
