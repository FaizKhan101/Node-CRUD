const express = require("express")
const bodyParser = require("body-parser")

const db = require("./database/database")
const quoteRouter = require("./routes/quotes")

const app = express()

app.use(bodyParser.json())

app.use(quoteRouter)

db.connectToDb().then(result => {
    console.log("Connected");

    app.listen(3000, () => console.log("Server start at post: 3000")
    )
}).catch(err => {
    console.log(err);

})
