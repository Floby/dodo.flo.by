import Service from '@ember/service'
import uuid from 'uuid/v4'
import store from 'store2'
import moment from 'moment'

export default Service.extend({
  create (title) {
    const createdAt = moment()
    const id = uuid()
    const note = {
      id,
      title,
      createdAt
    }
    store.set(`note:${id}`, note)
  }
});
