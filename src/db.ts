import { connect } from 'mongoose';
import { config } from 'dotenv';
import { env } from 'process';

config();
const URI = env["MONGOR_URI"]

export async function connectDb() {
    await connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("DB connected")
}

export default connectDb;