"use stric";
import DB from '../../db'

class Schedule {
  constructor() {

  }
  static getSchedule() {
    return new Promise((resolve, reject) => {
      resolve(DB.ScheduleDB)
    })
  }
}
export default Schedule