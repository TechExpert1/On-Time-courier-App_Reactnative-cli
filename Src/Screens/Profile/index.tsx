import React from 'react'
import { Text, View } from 'react-native'
import { MainStyle } from '../../Theme/MainStyle'
import { COLORS } from '../../Theme/Index'

const ProfileScreen = () => {
  return (
    <View style={MainStyle.flex_parent}>
    <Text
      style={{
        color: COLORS.BLACK,
      }}>
      Profile Screen Under Development
    </Text>
  </View>
  )
}

export default ProfileScreen
