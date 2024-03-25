const mongoose = require('mongoose');
const {DB_NAME} = require('../constants.js');


const connectDB = async()=>{
    try {
        const DBinstance = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
        console.log(`Mongodb database is connnected Successfully ${DBinstance.connection.host}`);
    } catch (error) {
        console.log(`Mongodb error occured `, error);
        process.exit(1);
    }
}

module.exports = connectDB;