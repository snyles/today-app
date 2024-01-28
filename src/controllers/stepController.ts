import { Step, IStep } from "../models/step.js";
import { Request, Response } from 'express'
import { HydratedDocument } from 'mongoose';

async function index(req:Request, res:Response) {
    const steps = await Step.find({})
    res.json(steps)
}

async function findOne(req:Request, res:Response) {
    const step = await Step.findById(req.params.id)
    res.json(step)
}

async function create(req:Request, res:Response) {
    const step: HydratedDocument<IStep> = new Step(req.body)
    const result = await step.save()
    res.json(result)
}

async function setComplete(req:Request, res:Response) {
    const step: HydratedDocument<IStep> | null = await Step.findById(req.params.id)
    if (!step) {
        throw new Error('Not found') // @Todo add error handling
    }
    step.complete = req.body.complete
    await step.save()
    res.json(step)
}

export { index, findOne, create, setComplete }