const StatusController = require('../controllers/statusController')
const TodoController = require('../controllers/todoController')

class Routes {
    mountRoutes(router) {
        router.get('/', (req, res) => res.send('Hello World!'))
        router.get('/status', StatusController.getAll)
        router.get('/status/:id', StatusController.get)
        router.post('/status', StatusController.add)
        router.delete('/status/delete', StatusController.delete)
        router.put('/status/update', StatusController.update)
        router.get('/todos', TodoController.getAll)
        router.get('/todo/:id', TodoController.get)
        router.post('/todo', TodoController.add)
        router.delete('/todo/:id', TodoController.delete)
        router.put('/todo/:id', TodoController.update)
    }
}

module.exports = Routes