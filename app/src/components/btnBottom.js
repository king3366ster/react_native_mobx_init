import React from 'react'
import dinfo from '../common/deviceInfo'
import { baseBlueColor } from '../common/styles'
import { Text, View, TouchableOpacity } from 'react-native'

export default class Component extends React.Component {
  static defaultProps = {
    title: '',
    navigateDest: 'Custom',
    navigateParam: {}
  }
  constructor(props) {
    super(props)
  }
  turnEditPage = () => {
    alert('投资之星交易规则')
    // this.props.navigation.navigate('Intro', { cid: Math.random() })
  }
  render() {
    const navigation = this.props.navigation
    return (
      <TouchableOpacity onPress={() => {
        navigation.navigate(this.props.navigateDest, this.props.navigateParam)
      }}>
        <View style={{
          height: 10 * dinfo.RVW,
          backgroundColor: baseBlueColor
        }}>
          <Text style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 5 * dinfo.RFT,
            lineHeight: 10 * dinfo.RVW
          }}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
