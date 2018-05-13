import React from 'react'
import { headerStyle } from '../common/styles'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

export default class Component extends React.Component {
  constructor(props) {
    super(props)
  }
  goBack = () => {
    this.props.navigation.goBack()
  }
  render() {
    return (
      <TouchableOpacity onPress={this.goBack}>
        <Icon name="ios-arrow-back" type="ionicon" color="#fff" iconStyle={headerStyle.icon} />
      </TouchableOpacity>
    )
  }
}
