import "dotenv/config";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

if(!uri){
    throw new Error("MONGODB_URI is missing. Please add it in .env file.")
}

const client = new MongoClient(uri);
let db;

export const connectMongoDb = async() => {
    try{
        if(!db){
            
        await client.connect();
        console.log("Successfully connected to MongoDB")
        db = client.db(dbName);
        console.log(db)
        return db;
        }
    }
    catch(err){
        console.error("Failed to connect MongoDB")
        throw err;
    }
}