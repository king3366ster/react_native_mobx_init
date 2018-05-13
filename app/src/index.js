import { createStackNavigator } from 'react-navigation'

import Pages from './pages'
import Navigator from './navigator'

const App = createStackNavigator(
  {
    // tab导航
    Index: {
      screen: Navigator,
    },
    // 实时行情
    RealtimeMarket: {
      screen: Pages.RealtimeMarket
    },
    // 买入页面
    OrderBuy: {
      screen: Pages.OrderBuy
    },
    Intro: {
      screen: Pages.Intro
    },
    Upload: {
      screen: Pages.Upload
    }
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none'
  }
)

export default App
