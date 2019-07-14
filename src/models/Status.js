const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StatusSchema = new Schema({
	id: Number,
	name: String
})

module.exports = mongoose.model('Status', StatusSchema)
