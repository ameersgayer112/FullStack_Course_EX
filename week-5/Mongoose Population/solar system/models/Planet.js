const mongoose = require('mongoose')
const Schema = mongoose.Schema


const PlanetSchema = new Schema({
    name:String,
    system: {type: Schema.Types.ObjectId, ref: 'SolarSystemModel'},
    visitors: [{type: Schema.Types.ObjectId, ref: 'vistorsModel'}]
})


const Planet = mongoose.model('PlanetModel',PlanetSchema)

module.exports=Planet
