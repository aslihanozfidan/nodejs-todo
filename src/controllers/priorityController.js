const PriorityManager = require('../manager/Priority')

const manager = new PriorityManager()

exports.get = function(req, res) {
	manager.getAllPriority().then((data) => res.send(data)).catch((err) => res.send(err))
}