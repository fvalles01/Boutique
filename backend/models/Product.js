const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
    'designation':{type: String, required: true },
    'price': { type: Number, required: true },
    'imageUrl': { type: String, required: true },
    'userId': { 
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    'description': { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);