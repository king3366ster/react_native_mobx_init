import React from 'react'
import { headerStyle } from '../common/styles'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

export default class Component extends React.Component {
  constructor(props) {
    super(props)
  }
  turnEditPage = () => {
    alert('编辑自选股')
    // this.props.navigation.navigate('Intro', { cid: Math.random() })
  }
  render() {
    return (
      <TouchableOpacity onPress={this.turnEditPage}>
        <Icon name="edit" type="font-awesome" color="#fff" iconStyle={headerStyle.iconSlim} />
      </TouchableOpacity>
    )
  }
}
