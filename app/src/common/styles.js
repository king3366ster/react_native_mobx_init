import { StyleSheet } from 'react-native'
import dinfo from './deviceInfo'

export const baseBlueColor = '#4f85ce'
export const darkBlueColor = '#014fbd'

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1
  }
})

export const headerStyle = StyleSheet.create({
  wrapper: {
    height: Math.round(14 * dinfo.RVW),
    backgroundColor: baseBlueColor,
    borderBottomWidth: 0
  },
  center: {
    color: '#fff',
    fontSize: 5 * dinfo.RFT
  },
  icon: {
    fontSize: 8 * dinfo.RFT
  },
  iconSlim: {
    fontSize: 6 * dinfo.RFT
  },
  buttonGroup: {
    top: 2 * dinfo.RVW,
    width: 30 * dinfo.RVW,
    height: 8 * dinfo.RVW,
    borderRadius: 6
  }
})

// 导航菜单
export const tabStyle = {
  tabs: {
    borderTopColor: '#999',
    borderTopWidth: 1 * dinfo.RPX,
    backgroundColor: '#f0f0f0', // TabBar 背景色
    height: 12.5 * dinfo.RVW
  },
  label: {
    marginTop: 1,
    fontSize: 2.5 * dinfo.RFT
  },
  icon: {
    width: 4 * dinfo.RVW,
    height: 4 * dinfo.RVW,
    marginTop: 0,
    marginBottom: 0
  },
  activeTintColor: baseBlueColor, // 文字和图片选中颜色
  inactiveTintColor: '#666' // 文字和图片未选中颜色
}
