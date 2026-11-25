import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectMongoDb } from "./config/db.js";

const port = process.env.PORT;
const app = express();
const clientUrl = process.env.BASE_URL_CLIENT;

app.use(express.json())

app.use(cors({
    origin: clientUrl
}))

app.get("/todos", async (req, res, next) => {
    try{
        const db = await connectMongoDb();
        const todos = await db.collection("todos").find().toArray();
        res.json(todos);
    }
    catch(error){
        throw error;
    }
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})