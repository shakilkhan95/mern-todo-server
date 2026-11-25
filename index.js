import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectMongoDb } from "./config/db.js";

const app = express();
const clientUrl = process.env.BASE_URL_CLIENT;
const port = process.env.PORT;

app.use(cors({
    origin: clientUrl
}))
app.use(express.json())

app.get("/todos", async(req, res, next) => {
    try{
        const cursor = await connectMongoDb();
        const todos = await cursor.collection("todos").find().toArray();
        res.json(todos);
    }
    catch(error){
        next(error)
    }
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})