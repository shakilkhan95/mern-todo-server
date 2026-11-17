const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

const  { MongoClient } = require("mongodb");

const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
    
});

app.get('/' ,(req, res) => {
    res.send('hello express');
});

app.get

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})