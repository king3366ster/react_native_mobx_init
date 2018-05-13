import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'

import Pages from './pages'
import Resources from './resource'
import { tabStyle, baseBlueColor } from './common/styles'

const Tabs = createBottomTabNavigator(
  {
    Custom: {
      screen: Pages.Custom,
      navigationOptions: {
        tabBarLabel: '自选',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={Resources.icons.icon1}
            style={[{ tintColor: tintColor }, tabStyle.icon]}
          />
        )
      }
    },
    Trader: {
      screen: Pages.Trader,
      navigationOptions: {
        tabBarLabel: '交易',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={Resources.icons.icon1}
            style={[{ tintColor: tintColor }, tabStyle.icon]}
          />
        )
      }
    },
    Live: {
      screen: Pages.Live,
      navigationOptions: {
        tabBarLabel: '直播',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={Resources.icons.icon1}
            style={[{ tintColor: tintColor }, tabStyle.icon]}
          />
        )
      }
    },
    Upload: {
      screen: Pages.Upload,
      navigationOptions: {
        tabBarLabel: '上传',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={Resources.icons.icon1}
            style={[{ tintColor: tintColor }, tabStyle.icon]}
          />
        )
      }
    },
    Me: {
      screen: Pages.Me,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={Resources.icons.icon2}
            style={[{ tintColor: tintColor }, tabStyle.icon]}
          />
        )
      }
    }
  },
  {
    initialRouteName: 'Custom',
    animationEnabled: true, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
      activeTintColor: tabStyle.activeTintColor, // 文字和图片选中颜色
      inactiveTintColor: tabStyle.inactiveTintColor, // 文字和图片未选中颜色
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: {
        height: 0 // 如TabBar下面显示有一条线，可以设高度为0后隐藏
      },
      style: tabStyle.tabs,
      labelStyle: tabStyle.label
    }
  }
)

export default Tabs
