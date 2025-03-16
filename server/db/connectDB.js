import mongoose from 'mongoose'


const DB_NAME = "memory_app"
// const MONGODB_URI='mongodb+srv://mustafareza47:ahmed123@cluster0.lfmuq.mongodb.net'

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`,
        )
        console.log(
            `\n MongoDB is connected!!! DB Host: ${connectionInstance.connection.host}`,
        )
    } catch (error) {
        console.log('MongoDB connection Failed !!!', error)
        process.exit(1)
    }
}

export default connectDB
