const StatusModel = require('../models/Status')

class Status {
	getAllStatus() {
		return StatusModel.find({
			name: 'Silence'
		})
			.exec()
			.then((docs) => {
				console.log(docs, 'DOCS')
				return docs
			})
			.catch((err) => {
				console.log(err)
			})
	}
}

module.exports = Status
