import React, { Component } from 'react'
import { globalStyle, headerStyle } from '../common/styles'
import { Text, View, Image } from 'react-native'
import { Header, Icon } from 'react-native-elements'
import { inject, observer } from 'mobx-react/native'
import { Search, Edit } from '../components'

@inject('config')
@observer
export default class Page extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const navigation = this.props.navigation
    return (
      <View style={globalStyle.container}>
        <Header
          outerContainerStyles={headerStyle.wrapper}
          centerComponent={{ text: '直播', style: headerStyle.center }}
          rightComponent={<Search navigation={navigation} />}
        />
        <View>
          <Text style={{ fontSize: 20 * global.RFT }}>直播</Text>
        </View>
      </View>
    )
  }
}