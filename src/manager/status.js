const statusModel = require('../models/StatusDTO')

class Status {
  mapStatus(_status) {
    const status = new statusModel()

    status.setId(_status.id)
    status.setName(_status.name)

    return status
  }

  getStatusById(id) {
    const status = {
      id: 1,
      name: "Todo",
    }

    return this.mapStatus(status)
  }
}

module.exports = Status