import express from 'express'
import * as taskController from '../controller/taskController.js'

const router = express.Router()

router.get('/', (req, res) => taskController.index)

export default router