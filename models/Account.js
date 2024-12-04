const mongoose = require('mongoose');
const transaction = require('./transaction');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    name: String,
    phone: Number,
    email: String,
    address: String,
    transactions:[
        {
            type: Schema.Types.ObjectId,
            ref:'Transaction'
        }
    ]
})

    AccountSchema.post('findOneAndDelete', async function (doc) {
        if (doc) {
            await transaction.deleteMany({
                _id: {
                    $in: doc.transactions
                }
            })
        }
    })


module.exports = mongoose.model('Account', AccountSchema)