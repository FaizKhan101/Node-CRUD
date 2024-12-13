const Quote = require("../models/quote")

exports.getQuotes = async (req, res, next) => {
    const quotes = await Quote.findAll()
    res.status(200).json(quotes)
}

exports.getQuote = async (req, res, next) => {
    const quoteId = req.params.quoteId;

    const quote = await Quote.findById(quoteId)

    if (!quote) {
        return res.status(404).json("Quote note found")
    }

    res.status(200).json(quote)
}

exports.addQuote = async (req, res, next) => {
    const newQuote = req.body.quote

    const quote = new Quote(newQuote)

    await quote.save()
    res.status(201).json("Quote add successfully.")
}

exports.updateQuote = async (req, res, next) => {
    const quoteId = req.body.quoteId;
    const newQuote = req.body.quote

    const quote = new Quote(newQuote, quoteId)
    await quote.save()
    res.status(201).json("Quote update successfully.")
}

exports.deleteQuote = async (req, res, next) => {
    const quoteId = req.params.quoteId;

    await Quote.deleteById(quoteId)

    res.status(200).json("Quote delete successfully.")
}