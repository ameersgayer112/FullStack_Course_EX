
const users = {
    tilda: "You've done a wonderful job",
    riva: "You need to improve your form, but good perseverance",
    jeremy: "You're incredible"
}

const data = {
    8112: {
        title: "Name of the Wind",
        author: "Patrick Rothfuss"
    },
    9121: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
    },
    1081: {
        title: "The Giver",
        author: "Lois Lowry"
    }
}



const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '..', 'dist')))
app.use(express.static(path.join(__dirname, '..', 'node_modules')))

const port = 3000

app.get('/life', function (request, response) {
    response.send("42")
})

app.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, thanks for visiting")
})

app.get('/details', (request, response) => {
    let params = request.query
    console.log(params.city)

    response.send(params)
})

app.get('/users/:userID', function (request, response) {
    response.send(users[request.params.userID])
})

app.get('/books/:bookID',function(req,res){
    let bookID = req.params.bookID
    res.send(data[bookID])
})

app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})




