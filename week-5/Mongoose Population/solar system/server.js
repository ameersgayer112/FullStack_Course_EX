const mongoose = require('mongoose')

const Solar = require('../models/SolarSystem')
const Planet = require('../models/Planet')
const Vistor = require('../models/Visitor')

mongoose.connect("mongodb://localhost/solarsystemDB")


const Solar1 = new Solar({
    Planets:[],
    starName: "SolarSystem1"
})

const Solar2 = new SolarSystem({
    Planets:[],
    starName: "SolarSystem2"
})

const Solar3 = new SolarSystem({
    Planets:[],
    starName: "SolarSystem3"
})


const Earth = new Planet({
    name: "Earth",
    system: Solar1,
    visitors: []
})

const Venus = new Planet({
    name: "Venus",
    system: Solar1,
    visitors: []
})

const Mars = new Planet({
    name: "Mars",
    system: Solar1,
    visitors: []
})

const karkus = new Planet({
    name: "karkus",
    system: Solar2,
    visitors: []
})

const Ameer = new Vistor({
    name: 'Ameer',
    homePlanet: Earth,
    visitedPlanets: [Earth,Venus]
})

const Safa = new Vistor({

    name:"Safa",
    homePlanet:Earth,
    visitedPlanets:[Earth,karkus,Venus,Mars]

})

Solar1.Planets.push(Earth)
Solar1.Planets.push(Venus)
Solar1.Planets.push(Mars)
Solar2.Planets.push(karkus)


Earth.visitors.push(Ameer)
Earth.visitors.push(Safa)

Venus.visitors.push(Ameer)
Venus.visitors.push(Safa)

Mars.visitors(Safa)
karkus.visitors(Safa)

Solar1.save()
Solar2.save()

Earth.save()
Venus.save()
Mars.save()
karkus.save()

Ameer.save()
Safa.save()

Vistor.find({}).populate('visitedPlanets').exec(function(err,visitors){
    console.log(visitors)
})

Planet.find({}).populate('visitors').exec(function(err,visitors){
    console.log(visitors)
})


SolarSystem.findOne({}).populate({
    path: 'planets',
    populate : {
        path: 'visitors'

    }
}).exec(function(err,visitors){
    console.log(SolarSystem.planets)
    console.log(visitors)
})











