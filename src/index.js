require('dotenv').config({path: '../.env'});
const connectDB = require('./db/db')
const app = require('./app');


connectDB()
.then(()=>{
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, (req, res)=>{
        console.log(`Server is Running at Port: ${PORT}`);
    })
})
.catch((err)=>{
    console.log('Mongodb connection error ', err);
})
