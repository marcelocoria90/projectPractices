import 'dotenv/config'
import mongoose, { connect } from 'mongoose'

const dbConnect = async (): Promise<void> => {
// async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.DB_URI
    mongoose.set('strictQuery', false)
    await connect(DB_URI)
    try {
        console.info('⚡ db connected')
    } catch (e) {
        console.log(`Error dbConnect: ${e}`)
    }
}

export default dbConnect