const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PrioritySchema = new Schema({
	name: String
})

module.exports = mongoose.model('priority', PrioritySchema)