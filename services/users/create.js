import models from '../../models/index'
const { User } = models;

export default async (params) => {
  const user = await User.create(params)
  return { id: user.id, name: user.name }
}
