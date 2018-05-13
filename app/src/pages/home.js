import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { inject, observer } from 'mobx-react/native';

@inject('account')
@observer
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '1'
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>{this.props.account.name}</Text>
        <Button
          title="信息页面"
          onPress={() => {
            navigate('Intro', { cid: Math.random() });
          }}
        />
        <Button
          title="登录页面"
          onPress={() => {
            navigate('Login');
          }}
        />
      </View>
    );
  }
}

