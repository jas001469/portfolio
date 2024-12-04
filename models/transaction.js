const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TransactionSchema = new Schema({
    credit: Number,
    debit: Number,
    date: String,
    description: String
})

module.exports = mongoose.model('Transaction',TransactionSchema)