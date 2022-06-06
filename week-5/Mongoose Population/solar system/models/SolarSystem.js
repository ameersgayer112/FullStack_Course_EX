const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SolarSystemSchema = new Schema({

    planets: [[{type: Schema.Types.ObjectId, ref: 'PlanetModel'}]],
    starName: String,


})

const Solar = mongoose.model('SolarSystemModel',SolarSystemSchema)

module.exports=Solar