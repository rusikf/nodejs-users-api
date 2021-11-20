import UsersCreate from '../services/users/create'
import UsersUpdate from '../services/users/update'
import UsersDelete from '../services/users/delete'

import Repository from '../repositories/users'
import Representer from '../representers/user'
import Validator from '../validators/user'

export default function App(app) {
  app.get('/users', async (_req, res) => {
    const repo = new Repository()
    const users = await repo.list()
    const represented = users.map(user => Representer(user))

    return res.status(200).json(represented)
  })

  app.post('/users', async (req, res) => {
    const validator = Validator(req.body)
    if (!validator.success) return res.status(422).json({ errors: validator.errors })

    const user = await new UsersCreate(req.body)
    const represented = Representer(user)
    return res.status(201).json(represented)
  })

  app.patch('/users/:id', async (req, res) => {
    const params = { ...req.body, id: req.params.id }
    const validator = Validator(params)
    if (!validator.success) return res.status(422).json({ errors: validator.errors })

    const user = await new UsersUpdate(params)

    if (!user) return res.status(404).json({ not_found: true })

    const represented = Representer(user)
    return res.status(200).json(represented)
  })

  app.delete('/users/:id', async (req, res) => {
    const { id } = req.params
    const deleted = await new UsersDelete(id)
    if (deleted) return res.status(200).json({ deleted: true })
    return res.status(404).json({ deleted: false })
  })
}
