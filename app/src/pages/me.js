import React, { Component } from 'react'
import { globalStyle, headerStyle, baseBlueColor } from '../common/styles'
import { Text, View, ScrollView } from 'react-native'
import { Header, ListItem } from 'react-native-elements'
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
          centerComponent={{ text: '我的', style: headerStyle.center }}
          rightComponent={<Search navigation={navigation} />}
        />
        <ScrollView>
          <View style={{ backgroundColor: '#fff', minHeight: 100 }}>
            <Text>我的</Text>
          </View>
          <View style={{ backgroundColor: '#fff', minHeight: 200, marginTop: 10 }}>
            <ListItem
              key={0}
              leftIcon={{ name: 'trophy', type: 'evilicon', color: baseBlueColor }}
              title='我的业绩'
              onPress={() => { navigation.navigate('Custom') }}
              chevronColor={baseBlueColor}
            />
            <ListItem
              key={1}
              leftIcon={{ name: 'credit-card', type: 'evilicon', color: baseBlueColor }}
              title='我的账户'
              onPress={() => { navigation.navigate('Custom') }}
              chevronColor={baseBlueColor}
            />
            <ListItem
              key={2}
              leftIcon={{ name: 'pencil', type: 'evilicon', color: baseBlueColor }}
              title='资金记录'
              onPress={() => { navigation.navigate('Custom') }}
              chevronColor={baseBlueColor}
            />
            <ListItem
              key={3}
              leftIcon={{ name: 'comment', type: 'evilicon', color: baseBlueColor }}
              title='我的消息'
              onPress={() => { navigation.navigate('Custom') }}
              chevronColor={baseBlueColor}
            />
            <ListItem
              key={4}
              leftIcon={{ name: 'question', type: 'evilicon', color: baseBlueColor }}
              title='常见问题'
              onPress={() => { navigation.navigate('Custom') }}
              chevronColor={baseBlueColor}
            />
            <ListItem
              key={5}
              leftIcon={{ name: 'gear', type: 'evilicon', color: baseBlueColor }}
              title='设置'
              onPress={() => { navigation.navigate('Custom') }}
              chevronColor={baseBlueColor}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}