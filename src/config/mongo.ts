import { MongoClient } from "mongodb"

const connectionString = process.env.mongoString || ""
const client = new MongoClient(connectionString)


let conn
try {
    conn = await client.connect()
} catch (e) {
    console.error(e)
}
let db = conn?.db('today')


console.log(`Connected to MongoDB database ${db?.databaseName}`);

export default db