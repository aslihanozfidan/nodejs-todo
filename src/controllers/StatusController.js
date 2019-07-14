const statusManager = require('../manager/status')

exports.getAll = async (req, res) => {
		data = await statusManager.getAllStatus()
		
		res.send(data)
}

exports.get = function(req, res) {
	statusManager.getStatus(req.params.id).then((data) => res.send(data)).catch((err) => res.send(err))
}

exports.add = function(req, res) {
	statusManager.addStatus(req.body).then((data) => res.send(data)).catch((err) => res.send(err))
}

exports.delete = function(req, res) {
	statusManager.deleteStatus(req.body).then((data) => res.send(data)).catch((err) => res.send(err))
}
