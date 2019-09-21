
export default class BaseRepository {

  constructor(model) {
    this.model = model
  }

  findById(id) {
    return this.model.findById(id)
  }

  list() {
    return this.model.list()
  }

}
