import models from '../models/index'
const { User } = models;

export default class UsersRepository {
  async list() {
    return await User.findAll()
  }
}
