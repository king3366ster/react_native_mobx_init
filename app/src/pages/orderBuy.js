import React, { Component } from 'react'
import { globalStyle, headerStyle, darkBlueColor } from '../common/styles'
import dinfo from '../common/deviceInfo'
import { Text, TextInput, View, ScrollView } from 'react-native'
import { Header, Icon } from 'react-native-elements'
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
      name: params.name
    }
  }
  render() {
    const navigation = this.props.navigation
    return (
      <View style={globalStyle.container}>
        <Header
          outerContainerStyles={headerStyle.wrapper}
          leftComponent={<GoBack navigation={navigation} />}
          centerComponent={{ text: '买入', style: headerStyle.center}}
        />
        <ScrollView>
          <View style={{
            padding: 2 * dinfo.RVW,
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            backgroundColor: '#e0e0e0'
          }}>
            <Icon name='warning' type='font-awesome' color={darkBlueColor} style={{
              fontSize: 3.5 * dinfo.RFT,
            }}/>
            <Text style={{
              marginLeft: dinfo.RVW,
              width: 90 * dinfo.RVW,
              flexWrap: 'wrap',
              fontSize: 3.2 * dinfo.RFT
            }}>因价格变动频繁，实时价格与最终价格可能略有出入，以最终成交价格为准</Text>
          </View>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <View style={{
              flexDirection: 'row'
            }}>
              <Text>买入股票</Text>
              <TextInput style={{
                backgroundColor: '#e0e0e0'
              }}
              value={navigation.state.params.code}
                editable={false}
              />
            </View>
          </View>
        </ScrollView>
        <BtnBottom
          title='确认下单'
          navigation={navigation}
          navigateDest='Custom'
          navigateParam={{ code: this.state.code, name: this.state.name }}
        />
      </View>
    )
  }
}