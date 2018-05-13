import React, { Component } from 'react'
import { globalStyle, headerStyle } from '../common/styles'
import { Text, View, Image } from 'react-native'
import { Header, Icon } from 'react-native-elements'
import { inject, observer } from 'mobx-react/native'
import { Search, Faq, HoldBtn } from '../components'

@inject('config')
@observer
export default class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedHoldIndex: 0 // 0 持仓 1 查询
    }
  }
  updateHoldIndex = (selectedHoldIndex) => {
    this.setState({ selectedHoldIndex })
  }
  render() {
    const navigation = this.props.navigation
    return (
      <View style={globalStyle.container}>
        <Header
          outerContainerStyles={headerStyle.wrapper}
          leftComponent={<Faq navigation={navigation} />}
          centerComponent={<HoldBtn
            selectedHoldIndex={this.state.selectedHoldIndex}
            updateHoldIndex={this.updateHoldIndex}
          />}
          rightComponent={<Search navigation={navigation} />}
        />
        <View>
          <Text style={{ fontSize: 20 * global.RFT }}>交易</Text>
        </View>
      </View>
    )
  }
}

