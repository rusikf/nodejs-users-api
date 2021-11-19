import models from '../../models/index'
const { User } = models;

export default async (id) => {
  await User.destroy({ where: { id: id }})
}
