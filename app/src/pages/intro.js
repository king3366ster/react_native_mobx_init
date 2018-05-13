import React, { Component } from 'react'
import {
  StyleSheet,
  Modal,
  Text,
  TouchableHighlight,
  View,
  Button
} from 'react-native'
import { inject, observer } from 'mobx-react/native'

class Title extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text style={{ color: '#fff' }}>信息页面</Text>
      </View>
    )
  }
}

@inject('account')
@observer
export default class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = { modalVisible: false, info: '111' }
  }
  componentDidMount() {
    let formData = new FormData()
    formData.append('name', 'admin')
    formData.append('password', 'admin123')
    let url = 'https://netease.im'
    fetch(url, {
      method: 'GET'
      // headers: {},
      // body: formData,
    })
      .then(response => {
        if (response.ok) {
          return JSON.stringify(response)
        }
      })
      .then(json => {
        alert(json)
      })
      .catch(error => {
        console.error(error)
      })
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }
  render() {
    const navigation = this.props.navigation
    const { params } = this.props.navigation.state
    return (
      <View>
        <Text>信息介绍</Text>
        <Text>`CID: ${params.cid}`</Text>
        <Text style={{ color: '#f0f' }}>{this.state.info}</Text>
        <Modal
          animationType={'fade'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.')
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <Button
          title="Show Modal"
          onPress={() => {
            this.setModalVisible(true)
          }}
        />
        <Button
          title="返回首页"
          onPress={() => {
            navigation.goBack()
          }}
        />
      </View>
    )
  }
}
