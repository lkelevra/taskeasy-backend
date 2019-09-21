"use stric";
import DB from '../../db'
export default class User {

  constructor() {

  }
  static getMeetingsByUserId(id) {
    return new Promise((resolve, reject) => {
      const record = DB.UserDB.filter(item => {
        return item.id == id
      })
      if (record.length > 0)
        resolve(record[0].meetings)
      else
        reject('User doesnt Exist')
    })
  }
  static list() {
    return new Promise((resolve, reject) => {
      resolve(DB.UserDB)
    })
  }

  static findById(id) {
    return new Promise((resolve, reject) => {
      const record = DB.UserDB.filter(item => {
        return item.id == id
      })

      resolve(record)
    })

  }

}