import BaseRepository from './BaseRepository'
import Schedule from '../Schedule';


class ScheduleRepository extends BaseRepository {

  constructor(model) {
    super(model)
  }

  getSchedule() {
    return this.model.getSchedule()
  }
}

export default new ScheduleRepository(Schedule);