import { connect } from 'mongoose';

export async function connectDb() {
    await connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("DB connected")
}

export default connectDb;