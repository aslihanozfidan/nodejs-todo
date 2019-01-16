const StatusController = require('../src/controllers/StatusController')

beforeEach(() => {
  return statusController = new StatusController()
})

describe('Status Controller test', () => {
  test('it should return todo', () => {
    expectedStatusValue = 'Todo'
    actualValue = statusController.get(1)
    expect(actualValue.getName()).toEqual(expectedStatusValue)
  })

  test('it should return in progress', () => {
    expectedStatusValue = 'In Progress'
    actualValue = statusController.get(2)
    expect(actualValue.getName()).toEqual(expectedStatusValue)
  })

  test('it should return done', () => {
    expectedStatusValue = 'Done'
    actualValue = statusController.get(3)
    expect(actualValue.getName()).toEqual(expectedStatusValue)
  })
})