const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
//app.use(express.static(path.join(__dirname, '..', 'node_modules')))

const port = 3000

app.get('/priceCheck/:name', function(request, response) {
    let name = request.params.name
    let priceObj = {price: null}
    for(let obj of store) {
        if(obj.name === name) {
            priceObj = {price: obj.price}
        }
    }


    response.send(priceObj)
})

app.listen(port, function(){
    console.log(`Server is up and running smoothly ${port}`)
})