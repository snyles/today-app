import { Task } from "../model/task.js";
import { Request, Response } from 'express'

async function index(req:Request, res:Response) {
    try {
        const tasks = await Task.find({})
        return res.json(tasks)
    } catch (e) {
        return res.status(400).json(e)
    }
}

export { index }