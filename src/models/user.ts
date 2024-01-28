import { Schema, model, Types } from 'mongoose'

interface IUser {
    name: string,
    email: string,
    savedSteps: Types.ObjectId[],
    days: Types.ObjectId[],
}

const userSchema = new Schema<IUser>({
    name: { 
        type: String,
        required: true
    },
    email: String,
    savedSteps: [Schema.Types.ObjectId],
    days: [Schema.Types.ObjectId],
})

export const User = model<IUser>('User', userSchema)