import React, { Component } from 'react'
import { globalStyle, headerStyle } from '../common/styles'
import { Text, View, ScrollView } from 'react-native'
import { Header } from 'react-native-elements'
import { inject, observer } from 'mobx-react/native'
import { Search, Edit, IndexBox, CustomStockList } from '../components'

@inject('config')
@observer
export default class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      indexInfo: [],
      customStocks: []
    }
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        indexInfo: [
          {
            title: '上证指数',
            value: 3163.26,
            change: 11.15,
            changePercent: '0.35%'
          },
          {
            title: '深圳成指',
            value: 10634.26,
            change: -11.15,
            changePercent: '-0.35%'
          },
          {
            title: '创业板指',
            value: 1834.26,
            change: '0.00',
            changePercent: '0.00%'
          },
        ],
        stocks: [{
          name: '浦发银行',
          code: 'sh600000',
          price: 1133.49,
          change: 44.30
        }, {
          name: '360',
          code: 'sh601360',
          price: 1133.49,
          change: -44.30
        }]
      })
    }, 0);
  }
  render() {
    const navigation = this.props.navigation
    return (
      <View style={globalStyle.container}>
        <Header
          outerContainerStyles={headerStyle.wrapper}
          leftComponent={<Edit navigation={navigation} />}
          centerComponent={{ text: '自选', style: headerStyle.center }}
          rightComponent={<Search navigation={navigation} />}
        />
        <View style={{
          flexDirection: 'row',
          flexWrap: 'nowrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          alignContent: 'flex-start',
          backgroundColor: '#36b',
          padding: 12
        }}>
          {
            this.state.indexInfo.map(
              (info, i) => (<IndexBox
                key={i}
                title={info.title}
                value={info.value}
                change={info.change}
                changePercent={info.changePercent}
              />)
            )
          }
        </View>
        <ScrollView>
          <CustomStockList stocks={this.state.stocks} navigation={navigation} />
        </ScrollView>
      </View>
    )
  }
}
