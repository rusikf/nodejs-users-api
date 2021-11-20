import models from '../../models/index'
const { User } = models

export default async (params) => {
  const { id, ...attributes } = params
  const [updated] = await User.update(attributes, { where: { id: id } })
  return updated ? params : null
}

