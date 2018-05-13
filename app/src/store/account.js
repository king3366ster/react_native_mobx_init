import { observable, action } from 'mobx'

class Account {
  @observable name = 'hahaha'
  @action
  updateName = name => {
    this.name = name
  }
}

export default new Account()
