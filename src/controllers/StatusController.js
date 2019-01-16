const statusManager = require('../manager/status')

class StatusController {
  constructor() {
    this.manager = new statusManager()
  }

  get(id) {
    return this.manager.getStatusById(id)
  }
}

module.exports = StatusController