const priorityModel = require("../models/priority")

class Priority {
	getAllPriority() {
		return priorityModel.find({})
			.exec()
			.then((allPriority) => {
				console.log(allPriority, "allPriority")
				return allPriority
			})
			.catch((err) => {
				console.log(err)
			})
	}
}

module.exports = Priority