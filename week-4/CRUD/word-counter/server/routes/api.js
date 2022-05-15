const express = require('express')
const router = express.Router()

const wordCounter = {}





router.get('/sanity', function (req, res) {
    res.send("Server up and running")
})

router.get('/word/:word', function (req, res) {
    let word = req.params.word

    if (wordCounter[word] != undefined) {
        res.send({ count: wordCounter[word] })
    }
    else {
        res.send({ count: 0 })
    }
})

router.post('/word', function (res, res) {
    let wordToAdd = req.body
    if (wordCounter[wordToAdd.name] == undefined) {
        wordCounter[wordToAdd.name] = 1

    } else {
        wordCounter[wordToAdd.name] = wordCounter[wordToAdd.name] + 1
        res.send({ word :wordToAdd.name, currentCount:  wordCounter[wordToAdd.name]})

    }
})

router.post('/words/:sentence',function(req,res){
    let sentence = req.params.sentence
    let wordsArray = sentence.split(' ')

    let numNewWords = 0
    let numOldWords = 0

    for(let word in wordsArray){
        if(wordCounter[word] == undefined){
            wordCounter[word] = 1
            numNewWords++
        }else{
            wordCounter[word] = wordCounter[word] + 1
            numOldWords++
        }
    }

    res.send({text: "added " + numNewWords + ", " + numOldWords + "alreadt exsited", currentCount:  -1})
})

router.delete('/words/:word',function(req,res){
    let deleteWord = req.params.word
    if(wordCounter[deleteWord] !== undefined){

        delete wordCounter[deleteWord]
    }
    res.end()
})

module.exports = router