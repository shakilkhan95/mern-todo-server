import "dotenv/config";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;
if(!uri){
    console.log("There is no MONGODB_URI, please add it in .env file");
}

const client = new MongoClient(uri);
let db;

export const connectMongoDb = async () => {
    try{
        await client.connect();
        console.log("Connected to MongoDB successfully")
        db = client.db(dbName);
        return db;
    }
    catch(error){
        throw new Error("MongoDB connection unsuccessful");
    }
}