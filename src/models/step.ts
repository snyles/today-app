import { Schema, model, Types } from 'mongoose'

interface IStep {
    owner?: Types.ObjectId,
    title: string,
    description?: string,
    size: number,
    color: string,
    complete: boolean,
    saved: boolean,
    timeOfDay?: string[],
    days: Types.ObjectId[],
}

const stepSchema = new Schema<IStep>({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user'
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
    timeOfDay: [String],
    days: [{ 
        type: Schema.Types.ObjectId,
        ref: "days"
    }],
})

const Step = model<IStep>('Step', stepSchema)

export { Step, IStep }