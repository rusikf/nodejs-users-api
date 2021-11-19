import UsersCreate from '../services/users/create'
import UsersUpdate from '../services/users/update'
import UsersDelete from '../services/users/delete'
import Repository from '../repositories/users'

export default function App(app) {
  app.get('/users', async (_req, res) => {
    const repo = new Repository()
    const users = await repo.list()

    return res.status(200).json(users)
  })

  app.post('/users', async (req, res) => {
    const { user } = new UsersCreate(req.body)
    return res.status(201).json(user)
  })

  app.patch('/users/:id', (req, res) => {
    const params = { ...req.body, id: req.params.id }
    const { user } = new UsersUpdate(params)
    return res.status(201).json(user)
  })

  app.delete('/users/:id', (req, res) => {
    const { id } = req.params
    new UsersDelete(id)
    return res.status(201).json({ deleted: true })
  })
}
