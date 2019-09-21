import BaseRepository from './BaseRepository'
import User from '../User';

class UserRepository extends BaseRepository {

  constructor(model) {
    super(model)
  }

}

export default new UserRepository(User);