import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Header, Icon } from 'react-native-elements'

class BackIcon extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <View>
        <Icon
          name='chevron-left'
          color='#fff'
          onPress={() => {
            this.props.navigation.goBack()
          }} />
      </View>
    )
  }
}

export default class Page extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Header
          leftComponent={<BackIcon navigation={this.props.navigation}/>}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        ></Header>
        <Text>登录页面</Text>
      </View>
    )
  }
}
