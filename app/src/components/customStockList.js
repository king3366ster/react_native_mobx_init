import React from 'react'
import dinfo from '../common/deviceInfo'
import { darkBlueColor } from '../common/styles'
import { View, Text, ScrollView, TouchableHighlight } from 'react-native'
import { Divider } from 'react-native-elements'

// props title value change changePercent 
export default class Component extends React.Component {
  static defaultProps = {
    stocks: []
  }
  constructor(props) {
    super(props)
  }
  renderTitle(text) {
    return (<Text style={{
      fontSize: 3 * dinfo.RFT,
      color: darkBlueColor
    }}>{text}</Text>)
  }
  renderStock = (stock, i) => {
    const navigate = this.props.navigation.navigate
    let changeColor = '#d1d1d1'
    if (stock.change > 0) {
      changeColor = '#ca0c16'
    } else if (stock.change < 0) {
      changeColor = '#239a3b'
    }
    return (
      <TouchableHighlight key={i} underlayColor='#ccc' onPress={() => { navigate('RealtimeMarket', {code: stock.code, name: stock.name})}}>
      <View style={{backgroundColor: '#fff'}}>
        <View style={styles.row}>
          <View style={styles.left}>
            <Text style={{ color: '#000', fontSize: 4 * dinfo.RFT }}>{stock.name}</Text>
            <Text style={{ color: '#666', fontSize: 3 * dinfo.RFT }}>{stock.code}</Text>
          </View>
          <View style={styles.center}>
            <Text style={{ textAlign: 'center', fontSize: 5 * dinfo.RFT, marginTop: 0.5 * dinfo.RFT, color: '#000' }}>{stock.price}</Text>
          </View>
          <View style={styles.right}>
            <View style={{
              backgroundColor: changeColor,
              height: 7 * dinfo.RVW,
              alignItems: 'center'
            }}>
              <Text style={{
                color: '#fff',
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: 3.5 * dinfo.RFT,
                marginTop: 1 * dinfo.RFT
              }}>{stock.change}%</Text>
            </View>
          </View>
        </View>
        <Divider style={{ backgroundColor: '#999', height: 2 * dinfo.RPX }} />
        </View>
      </TouchableHighlight>
    )
  }
  render() {
    return (
      <View>
        <View style={[styles.row, { backgroundColor: '#d9d9d9' }]}>
          <View style={styles.left}>
            {this.renderTitle('名 称')}
          </View>
          <View style={styles.center}>
            <Text style={{ textAlign: 'center' }}>
              {this.renderTitle('当前价')}
            </Text>
          </View>
          <View style={styles.right}>
            <Text style={{ textAlign: 'right' }}>
              {this.renderTitle('涨跌幅')}
            </Text>
          </View>
        </View>
        <ScrollView>
          {
            this.props.stocks.map((stock, i) => {
              return this.renderStock(stock, i)
            })
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 4,
    paddingLeft: 12,
    paddingBottom: 4,
    paddingRight: 12
  },
  left: {
    width: 50 * dinfo.RVW,
    flexDirection: 'column',
  },
  center: {
    width: 25 * dinfo.RVW
  },
  right: {
    width: 15 * dinfo.RVW,
    flexDirection: 'column',
    alignContent: 'center'
  }
}