import { readUsers } from '../store'
import UsersCreate from '../services/users/create'
import UsersUpdate from '../services/users/update'
import UsersDelete from '../services/users/delete'

export default function App(app) {
  app.get('/users', (_req, res) => {
    const users = readUsers()
    return res.send({ success: true, users })
  })

  app.post('/users', (req, res) => {
    const { user } = new UsersCreate(req.body)
    return res.send({ success: true, user })
  })

  app.patch('/users/:id', (req, res) => {
    const params = { ...req.body, id: req.params.id }
    const { user } = new UsersUpdate(params)
    return res.send({ success: true, user })
  })

  app.delete('/users/:id', (req, res) => {
    const { id } = req.params
    new UsersDelete(id)
    return res.send( { success: true })
  })
}
