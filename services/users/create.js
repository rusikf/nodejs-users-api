import { readUsers, saveUsers } from '~/store'

export default params => {
  const users = readUsers()

  const existUser = users.find(user => user.id === params.id)
  if (existUser) return
  users.push(params)
  saveUsers(users)
  console.log('return params',)
  return params
}
