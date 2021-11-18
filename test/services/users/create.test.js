import createUser from '~/services/users/create'
import fs from 'fs'

jest.mock('fs')

describe('Create User', () => {
  test('save user to file', () => {
    const newUser = { id: 1, name: 'Ruslan' }
    fs.readFileSync.mockReturnValue(JSON.stringify([]))
    fs.writeFileSync.mockReturnValue()
    expect(createUser(newUser)).toEqual(newUser)
  })
})
