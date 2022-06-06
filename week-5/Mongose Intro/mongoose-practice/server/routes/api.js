const express = require('express')
const router = express.Router()

const Person = require('../models/Person')

router.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})

router.post('/person',function(res,req){

    const p = new Person(req.body)
    p.save()
    res.end()

})

router.put('/person/:id',function(req,res){

    let personId = req.params.id

    Person.findById(personId,function(err, p){
        p.age = 80
        p.save()
    })

    res.status(200).send("Updated Succsufly")

})

router.delete('/apocalypse',function(req,res){
    Person.deleteMany(function(err,p){
        console.log(err)
    })

    res.status(200).send("Data Deleted")
})

module.exports = router