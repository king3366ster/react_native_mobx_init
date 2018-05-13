import React from 'react'
import { headerStyle, baseBlueColor } from '../common/styles'
import { TouchableOpacity } from 'react-native'
import { ButtonGroup } from 'react-native-elements'


export default class Component extends React.Component {
  constructor() {
    super()
    // this.state = {
    //   selectedIndex: 0
    // }
  }

  // updateIndex = (selectedIndex) => {
  //   this.setState({ selectedIndex })
  // }

  render() {
    const buttons = ['持仓', '查询']
    // const { selectedIndex } = this.state

    return (
      <ButtonGroup
        onPress={this.props.updateHoldIndex}
        selectedIndex={this.props.selectedHoldIndex}
        buttons={buttons}
        containerStyle={headerStyle.buttonGroup}
        buttonStyle={{ backgroundColor: baseBlueColor}}
        selectedButtonStyle={{ backgroundColor: '#fff'}}
        textStyle={{ color: '#fff'}}
        selectedTextStyle={{ color: baseBlueColor}}
      />
    )
  }
}
