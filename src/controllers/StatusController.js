const statusManager = require('../manager/status')

const manager = new statusManager()

exports.get = function(req, res) {
	manager.getAllStatus().then((data) => res.send(data)).catch((err) => res.send(err))
}
