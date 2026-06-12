require("dotenv").config()

const mongoose = require("mongoose")

const dbConnectionUri = process.env.MONGO_DB_CONNECTION_URI;
const dbName = process.env.DB_NAME;

const dbOptions = { dbName };

const db = mongoose.connect(dbConnectionUri, dbOptions)
    .then(() => console.log(`MongoDB connected to db ${dbName}`))
    .catch((error) => console.log('There was an error connecting the DB : ', error))

module.exports = db;