import { observable, action } from 'mobx'

class Config {
  // 是否正在审核
  @observable isInReview = false
  @action
  checkWhetherReview = () => {
    this.isInReview = true
  }
}

export default new Config()
