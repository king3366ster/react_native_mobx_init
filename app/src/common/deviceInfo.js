import { Dimensions, PixelRatio } from 'react-native'

const deviceWidth = Dimensions.get('window').width //设备的宽度
const deviceHeight = Dimensions.get('window').height //设备的高度
const fontScale = PixelRatio.getFontScale() //返回字体大小缩放比例
const pixelRatio = PixelRatio.get() //当前设备的像素密度

const RVW = deviceWidth / 100
const RVH = deviceHeight / 100
const RFT = RVW / fontScale
const RPX = 1 / pixelRatio

export default {
  RVW,
  RVH,
  RFT,
  RPX,
  deviceWidth,
  deviceHeight
}
