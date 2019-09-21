import UserRepository from '../models/repositories/UserRepository'
import ScheduleRepository from '../models/repositories/ScheduleRepository'

function listUsers(req, res) {

  UserRepository.list()
    .then((data) => res.json(data))
    .catch((errors) => res.json({ errors }))

}

export default { listUsers };