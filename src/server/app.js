const express = require('express')
const routes = require('./Routes')
const app = express()
const port = 2500
const router = new routes()

appInitializer = () => {
    router.mountRoutes(app)
}


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
