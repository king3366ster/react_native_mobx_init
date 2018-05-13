import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const photoOptions = {
  title: '请选择',
  quality: 0.8,
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '选择相册',
  allowsEditing: true,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

export default class UploadPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: {
        uri: 'http://netease.im/res/image/base/logo/logo-white@2x.png?v=3'
      }
    };
  }
  choosePicker = () => {
    ImagePicker.showImagePicker(photoOptions, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {
          uri: `data:${response.type};base64,${response.data}`
        }
        this.setState({
          avatarSource: source
        });
      }
    });
  };
  render() {
    return (
      <View>
        <Text>上传页面</Text>
        <Image
          source={this.state.avatarSource}
          style={{ width: 100, height: 100 }}
        />
        <Button title="选择图片" onPress={this.choosePicker} />
      </View>
    );
  }
}
