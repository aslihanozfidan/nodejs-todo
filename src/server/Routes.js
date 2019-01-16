class Routes {
    mountRoutes(router) {
        router.get('/', (req, res) => res.send('Hello World!'))
        router.get('/todo', (req, res) => res.send('Hey Todo!'))
        router.get('/best', (req, res) => res.send('I am prince of the universe!'))
    }
}

module.exports = Routes