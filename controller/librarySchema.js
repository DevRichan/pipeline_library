const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LibrarySchema = new Schema({

    judul: {
        type: String,
        required: [true, 'Roll field is required']
    },
    sinopsis: {
        type: String,
        required: [true, 'Roll field is required']
    },
    pengarang: {
        type: String,
        required: [true, 'Roll field is required']
    },

    harga: {
        type: Number,
        required: [true, 'Roll field is required']
    }
});

const Library =  mongoose.model('library',LibrarySchema);
module.exports = Library;