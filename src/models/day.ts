import { Schema, model, Types } from 'mongoose'

interface IDay {
    user: Types.ObjectId,
    date: Date,
    steps: Types.ObjectId[],
}

const daySchema = new Schema<IDay>({
    user: { 
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    steps: [{
        type: Schema.Types.ObjectId,
        ref: 'steps'
    }],
})

export const Day = model<IDay>('Day', daySchema)