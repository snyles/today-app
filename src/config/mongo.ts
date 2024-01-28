import mongoose from 'mongoose'

const db = mongoose.connection

db.on('connected', () => {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
})
db.on('disconnected', () => {
    console.log(`Disconnected from database`);
})

try {
    await mongoose.connect(process.env.MONGO_STRING || '');
} catch (e) {
    console.log(`Error connecting to mongoDb: ${e}`)
}

