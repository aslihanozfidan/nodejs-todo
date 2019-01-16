const express = require('express')
const Routes = require('./Routes')
const app = express()
const port = 2500
const router = new Routes()

appInitializer = () => {
    router.mountRoutes(app)
}


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
