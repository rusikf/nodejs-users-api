import { readUsers, saveUsers } from '~/store'

export default id => {
  const users = readUsers()

  const existUser = users.find(user => user.id === id)
  if (!existUser) return

  const newUsers = users.map(user => user.id === id ? null : user)
    .filter(user => user)

  saveUsers(newUsers)

  return
}
