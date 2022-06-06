const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/computerDB')

const Schema = mongoose.Schema

const newComputerSchema = new Schema({
    maker: String,
    price: Number,

})


const computerModel = mongoose.model('Computer',newComputerSchema)

let c1 = new computerModel({ maker: "Assus", price: 5300 })
let c2 = new computerModel({ maker: "Apple", price: 7000 })
let c3 = new computerModel({maker:"Lenovo",price:4000})


const allComputers = [c1 , c2 , c3]

console.log(allComputers)

allComputers.forEach(c => c.save())

//mongoose.connection.close()