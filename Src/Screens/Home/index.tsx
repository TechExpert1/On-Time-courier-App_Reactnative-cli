import React from 'react'
import { Text, View } from 'react-native'
import { MainStyle } from '../../Theme/MainStyle'
import { COLORS } from '../../Theme/Index'

const HomeScreen = () => {
  return (
    <View style={MainStyle.flex_parent}>
    <Text
      style={{
        color: COLORS.BLACK,
      }}>
      Home Screen
    </Text>
  </View>
  )
}

export default HomeScreen
