import React from 'react'
import { headerStyle } from '../common/styles'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

export default class Component extends React.Component {
  constructor(props) {
    super(props)
  }
  turnEditPage = () => {
    alert('投资之星交易规则')
    // this.props.navigation.navigate('Intro', { cid: Math.random() })
  }
  render() {
    return (
      <TouchableOpacity onPress={this.turnEditPage}>
        <Icon name="question" type="evilicon" color="#fff" iconStyle={headerStyle.icon} />
      </TouchableOpacity>
    )
  }
}
