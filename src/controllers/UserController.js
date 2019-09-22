import UserRepository from "../models/repositories/UserRepository"
import ScheduleRepository from "../models/repositories/ScheduleRepository"
function getMeetingsByUserId(req, res) {
  let id = req.params.id
  UserRepository.getMeetingsByUserId(id)
    .then(data => res.json(data))
    .catch(errors => res.status(404).json({ errors }))
}

function getScheduleAvailableUsers(req, res) {
  ScheduleRepository.getSchedule()
    .then(fullSchedule => {
      let fullScheduleParsed = parseSchedule(fullSchedule)
      UserRepository.list()
        .then(users => {
          users.forEach((user, index) => {
            let _user = { id: user.id, name: user.nombre }
            let userSchedule = user.meetings
            fullSchedule.forEach((itemFullSchedule, indexFullSchedule) => {
              let existSchedule = existInScheduleOfUser(
                userSchedule,
                itemFullSchedule
              )
              if (!existSchedule)
                fullScheduleParsed[indexFullSchedule].users.push(_user)
            })
          })
          res.json(fullScheduleParsed)
        })
        .catch(errors => res.status(404).json({ errors }))
    })
    .catch(errors => res.status(404).json({ errors }))
}
function parseSchedule(fullSchedule) {
  return fullSchedule.map(item => ({ ...item, users: [] }))
}

function existInScheduleOfUser(userSchedule, schedule) {
  let existSchedule = false
  userSchedule.forEach((itemUserSchedule, indexUserSchedule) => {
    if (schedule.hour == itemUserSchedule.hour) {
      existSchedule = true
    }
  })
  return existSchedule
}
function getDisponibilityByUserId(req, res) {
  let id = req.params.id
  UserRepository.getMeetingsByUserId(id)
    .then(data => {
      let userScheduleParsed = parseUserSchedule(data)
      ScheduleRepository.getSchedule()
        .then(schedule => {
          let userAvailableSchedule = diferenceSchedule(
            schedule,
            userScheduleParsed
          )
          res.json(userAvailableSchedule)
        })
        .catch(errors => res.status(404).json({ errors }))
    })
    .catch(errors => res.status(404).json({ errors }))
}

function parseUserSchedule(data) {
  return data.map(item => {
    return item.hour
  })
}

function diferenceSchedule(schedule, userSchedule) {
  return schedule
    .map(itemSchedule => itemSchedule.hour)
    .filter(item => {
      return userSchedule.indexOf(item) < 0
    })
}
function findById(req, res) {
  let id = req.params.id

  UserRepository.findById(id)
    .then(data => res.json(data))
    .catch(errors => res.json({ errors }))
}
function listUsers(req, res) {
  UserRepository.list()
    .then(data => res.json(data))
    .catch(errors => res.json({ errors }))
}

export default {
  listUsers,
  findById,
  getMeetingsByUserId,
  getDisponibilityByUserId,
  getScheduleAvailableUsers
}
