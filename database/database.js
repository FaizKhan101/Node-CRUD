const mongodb = require("mongodb")

const MongoClient = mongodb.MongoClient

let _db;

const connectToDb = async() => {
    const client = await MongoClient.connect("mongodb://localhost:27017")
    _db = client.db("CRUD")
    return
}

const getDb = () => {
    if (_db) {
        return _db
    }
    throw new Error("Database connection failed!")
}

module.exports = {
    connectToDb: connectToDb,
    getDb: getDb
}