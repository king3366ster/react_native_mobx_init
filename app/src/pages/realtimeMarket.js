import React, { Component } from 'react'
import { globalStyle, headerStyle, baseBlueColor } from '../common/styles'
import dinfo from '../common/deviceInfo'
import { Text, View, TouchableOpacity, ScrollView, WebView } from 'react-native'
import { Header } from 'react-native-elements'
import { inject, observer } from 'mobx-react/native'
import { Search, Edit, GoBack, BtnBottom } from '../components'

@inject('config')
@observer
export default class Page extends Component {
  constructor(props) {
    super(props)
    const navigation = this.props.navigation
    const { params } = navigation.state
    this.state = {
      code: params.code,
      name: params.name,
      isWatch: false
    }
  }
  renderTitle = () => {
    return (
      <View style={{
        alignContent: 'center',
        top: 2 * dinfo.RFT
      }}>
        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 5 * dinfo.RFT }}>{this.state.name}</Text>
        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 3 * dinfo.RFT }}>{this.state.code}</Text>
      </View>
    )
  }
  watchStock = () => {
    console.log(this.state.isWatch)
    // const currentWatched = !this.state.isWatch
    // this.setState({
    //   isWatch: currentWatched
    // })
  }
  renderWatch = () => {
    return (
      <TouchableOpacity onPress={this.watchStock()}>
        {
          this.state.isWatch ?
            <Text style={{ color: '#fff', fontSize: 4 * dinfo.RFT }}>已关注</Text>
            : <Text style={{ color: '#fff', fontSize: 4 * dinfo.RFT }}>+关注</Text>
        }
      </TouchableOpacity>
    )
  }
  render() {
    const navigation = this.props.navigation
    return (
      <View style={globalStyle.container}>
        <Header
          outerContainerStyles={headerStyle.wrapper}
          leftComponent={<GoBack navigation={navigation} />}
          centerComponent={this.renderTitle()}
          rightComponent={this.renderWatch()}
        />
        <ScrollView>
          <WebView
            automaticallyAdjustContentInsets={false}
            source={{ uri: 'https://m.baidu.com/', method: 'GET' }}
            style={{
              width: dinfo.deviceWidth,
              height: dinfo.deviceHeight
            }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate="normal"
            startInLoadingState={true}
          />
        </ScrollView>
        <BtnBottom
          title = '买 入'
          navigation = {navigation}
          navigateDest = 'OrderBuy'
          navigateParam={{code: this.state.code, name: this.state.name}}
        />
      </View>
    )
  }
}