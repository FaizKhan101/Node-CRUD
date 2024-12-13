const express = require("express")

const quoteController = require("../controllers/quotes")

const router = express.Router()

router.get("/", quoteController.getQuotes)

router.get("/quote/:quoteId", quoteController.getQuote)

router.post("/quote", quoteController.addQuote)

router.delete("/quote/:quoteId", quoteController.deleteQuote)

module.exports = router