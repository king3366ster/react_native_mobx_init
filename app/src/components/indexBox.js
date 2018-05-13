import React from 'react'
import dinfo from '../common/deviceInfo'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'

// props title value change changePercent 
export default class Component extends React.Component {
  static defaultProps = {
    title: '',
    value: '0.00',
    change: '0.00',
    changePercent: 0
  }
  constructor(props) {
    super(props)
  }
  renderDividerBar = () => {
    const change = +this.props.change
    if (change > 0) {
      return (<Divider style={{
        marginTop: 5,
        backgroundColor: '#ca0c16',
        height: 3
      }} />)
    } else if (change < 0) {
      return (<Divider style={{
        marginTop: 5,
        backgroundColor: '#239a3b',
        height: 3
      }} />)
    } else {
      return (<Divider style={{
        marginTop: 5,
        backgroundColor: '#d1d1d1',
        height: 3
      }} />)
    }
  }
  render() {
    return (
      <View>
        <Text style={{
          color: '#fff',
          fontSize: 3.2 * dinfo.RFT
        }}>{this.props.title}</Text>
        <Text style={{
          color: '#fff',
          fontSize: 4.8 * dinfo.RFT,
          marginTop: 2
        }}>{this.props.value}</Text>
        <View style={{
          flexDirection: 'row',
          flexWrap: 'nowrap',
          justifyContent: 'flex-start',
          marginTop: 2
        }}>
          <Text style={{
            color: '#fff',
            fontSize: 2.8 * dinfo.RFT
          }}>{this.props.change}</Text>
          <Text style={{
            color: '#fff',
            fontSize: 2.8 * dinfo.RFT,
            marginLeft: 10
          }}>{this.props.changePercent}</Text>
        </View>
        { this.renderDividerBar() }
      </View>
    )
  }
}
