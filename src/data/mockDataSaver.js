const status = require('../models/status')
const priority = require('../models/priority')

const statusTodo = new status({ id: '1', name: 'To Do' })
const statusInProgress = new status({ id: '2', name: 'In Progress' })
const statusDone = new status({ id: '3', name: 'Done' })

statusTodo.save(function(err) {
	if (err) return console.log(err)
})
statusInProgress.save(function(err) {
	if (err) return console.log(err)
})
statusDone.save(function(err) {
	if (err) return console.log(err)
})
