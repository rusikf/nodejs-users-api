import models from '../../models/index'
const { User } = models

export default async (params) => {
  const { id, ...attributes } = params
  await User.update(attributes, { where: { id: id } })
  return { user: await User.findOne({ where: { id: id }}) }
}
