import { Schema, model, Types } from 'mongoose'

interface ITask {
    owner?: Types.ObjectId,
    title: string,
    description?: string,
    size: number,
    color: string,
    complete: boolean,
    saved: boolean,
    timeOfDay?: string[],
}

const taskSchema = new Schema<ITask>({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: { 
        type: String,
        required: true
    },
    description: String,
    size: {
        type: Number,
        min: 1,
        required: true,
    },
    color: String,
    complete: Boolean,
    saved: Boolean,
    timeOfDay: [String]
})

export const Task = model<ITask>('Task', taskSchema)