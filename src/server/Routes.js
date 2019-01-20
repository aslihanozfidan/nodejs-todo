const StatusController = require('../controllers/StatusController')

class Routes {
    mountRoutes(router) {
        router.get('/', (req, res) => res.send('Hello World!'))
        router.get('/status', StatusController.get)
    }
}

module.exports = Routes