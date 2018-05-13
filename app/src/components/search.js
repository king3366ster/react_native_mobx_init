import React from 'react'
import { headerStyle } from '../common/styles'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

export default class Component extends React.Component {
  constructor(props) {
    super(props)
  }
  turnSearchPage = () => {
    this.props.navigation.navigate('Intro', { cid: Math.random() })
  }
  render() {
    return (
      <TouchableOpacity onPress={this.turnSearchPage}>
        <Icon name="search" type="evilicon" color="#fff" iconStyle={headerStyle.icon} />
      </TouchableOpacity>
    )
  }
}
