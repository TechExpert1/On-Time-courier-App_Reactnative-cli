import React from 'react'
import { Image, ImageBackground, SafeAreaView, Text, View } from 'react-native'
import styles from './styles'
import CustomButton from '../../../../Components/CustomButton'
import { PRIMARY, WHITE } from '../../../../Theme/Colors'
import { useNavigation } from '@react-navigation/native'

const DeliverySuccess = () => {
    const navigation = useNavigation<any>();
    const handleContinueButton = () => {
        navigation.navigate('BottomTab');
      };

  return (
    <SafeAreaView style={{flex:1}}>
    <ImageBackground
      style={styles.imageStyle}
      source={require('../../../../Assets/Images/SplashScreen.png')}>
      <Image
        style={styles.RecoverImageStyle}
        source={require('../../../../Assets/Images/PasswordRecoverTick.png')}></Image>
      <Text style={styles.PasswordRecover}>{'Your Courier has been \nbooked successfully'}</Text>
      <Text style={styles.NormalTextStyle}>
      {'You can track you parcel with \ntracking ID: #4589632579'}
      </Text>

      <View style={styles.content}>
        <CustomButton
          text="Continue"
          onPress={handleContinueButton}
          TextStyle={{color: WHITE}}
          extraStyle={{
            marginTop: 80,

            backgroundColor: PRIMARY,
          }}
        />
      </View>
    </ImageBackground>
  </SafeAreaView>
  )
}

export default DeliverySuccess
