import { AppRegistry, Platform } from 'react-native'
import App from './App'
import deviceInfo from './src/common/deviceInfo'

global.__IOS__ = false
global.__ANDROID = false

if (Platform.OS === 'android') {
  global.__ANDROID = true
} else if (Platform.OS === 'iOS') {
  global.__IOS__ = true
}

Object.assign(global, deviceInfo)

AppRegistry.registerComponent('app', () => App)
