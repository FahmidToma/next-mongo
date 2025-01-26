
import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();
declare global {
    var mongoose: {
        conn: mongoose.Connection | null;
        promise: Promise<typeof mongoose> | null;
    };
}

const MONGODB_URI = process.env.MONGO_URI as string;
console.log(MONGODB_URI);

if (!MONGODB_URI) {
    throw new Error('Mongodb uri is not defined');
}

let cached = global.mongoose as { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
console.log("cache exists");

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect(): Promise<typeof mongoose> {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        }
        cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
            console.log('Db connected')
            return mongoose
        })
    }

    try {
        cached.conn = await cached.promise;

    } catch (e) {
        cached.promise = null;

        if (e instanceof Error) {
            console.error('Database connection error', e.message);
        } else {
            console.error("Unknown error during database connection");
        }

       throw e;
    }
    return cached.conn;
}

    export default dbConnect;