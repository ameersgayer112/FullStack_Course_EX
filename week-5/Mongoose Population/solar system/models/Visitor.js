const mongoose = require('mongoose')
const Schema = mongoose.Schema


const VisitorSchema = new Schema({
    name:String,
    homePlanet : {type: Schema.Types.ObjectId, ref: 'planetModel'},
    visitedPlanets : [{type: Schema.Types.ObjectId, ref: 'planetModel'}]
})


const Vistors = mongoose.model('vistorsModel',VisitorSchema)

module.exports=Vistors
