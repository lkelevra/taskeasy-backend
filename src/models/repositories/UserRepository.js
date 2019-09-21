import BaseRepository from './BaseRepository'
import User from '../User';


class UserRepository extends BaseRepository {

  constructor(model) {
    super(model)
  }

  getMeetingsByUserId(id) {
    return this.model.getMeetingsByUserId(id)
  }
}

export default new UserRepository(User);