const { ObjectId } = require("mongodb")
const db = require("../database/database")

class Quote {
    constructor(quote, id) {
        this.quote = quote;
        if (id) {
            this._id = new ObjectId(id)
        }
    }

    save() {
        if (this._id) {
            return db.getDb().collection("quotes").updateOne({_id: this._id}, { $set: this })
        }
        return db.getDb().collection("quotes").insertOne(this)
    }

    static findById(id) {
        return db.getDb().collection("quotes").findOne({_id: new ObjectId(id)})
    }

    static findAll() {
        return db.getDb().collection("quotes").find().toArray()
    }

    static deleteById(id) {
        return db.getDb().collection("quotes").deleteOne({_id: new ObjectId(id)})
    }
}

module.exports = Quote;