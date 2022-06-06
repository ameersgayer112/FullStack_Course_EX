const mongoose = require('mongoose')
const Schema = mongoose.Schema


const bookSchema = new Schema({
    title:String,
    author: String,
    pages: Number,
    genres:[String],
    rating: String
})

let Book = mongoose.model("BookModel",bookSchema)

module.exports = Book