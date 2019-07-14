const StatusController = require('../controllers/statusController')
const PriorityController = require('../controllers/priorityController')

class Routes {
    mountRoutes(router) {
        router.get('/', (req, res) => res.send('Hello World!'))
        router.get('/status', StatusController.getAll)
        router.get('/status/:id', StatusController.get)
        router.post('/status/add', StatusController.add)
        router.get('/priority', PriorityController.get)
    }
}

module.exports = Routes