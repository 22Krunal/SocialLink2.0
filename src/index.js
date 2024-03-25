require('dotenv').config({path: './env'});
const express = require('express');
const connectDB = require('./db/db')

connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res)=>{
    console.log(`Server is Listing to Port ${PORT}...`);
})