import { readUsers, saveUsers } from '../../store'

export default params => {
  const users = readUsers()

  const existUser = users.find(user => user.id === params.id)
  if (!existUser) return

  const newUsers = users.map(user => {
    if (user.id === params.id) {
      return { ...user, ...params }
    } else {
      return user
    }
  })

  saveUsers(newUsers)
  return params
}
