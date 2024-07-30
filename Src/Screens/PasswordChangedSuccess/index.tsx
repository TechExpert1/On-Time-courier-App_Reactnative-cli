import React from 'react'
import { Image, ImageBackground, SafeAreaView, Text, View } from 'react-native'
import styles from './styles'
import CustomButton from '../../Components/CustomButton'
import { PRIMARY, WHITE } from '../../Theme/Colors'
import { useNavigation } from '@react-navigation/native'

const PasswordChangedSuccess = props => {
  const {isRole} = props.route.params;
    const navigation = useNavigation<any>();
    const handleContinueButton = () => {
        if(isRole === 'driver'){
          navigation.navigate('DriverBottomTab');
        }else {
          navigation.navigate('BottomTab');
        }
      };
    return (
        <SafeAreaView style={{flex:1}}>
        <ImageBackground
          style={styles.imageStyle}
          source={require('../../Assets/Images/SplashScreen.png')}>
          <Image
            style={styles.RecoverImageStyle}
            source={require('../../Assets/Images/PasswordRecoverTick.png')}></Image>
          <Text style={styles.PasswordRecover}>{'Password Changed'}</Text>
          <Text style={styles.NormalTextStyle}>
          {'The password has been successfully recovered, you can log in back with a new password'}
          </Text>
    
          <View style={styles.content}>
            <CustomButton
              text="Continue"
              onPress={handleContinueButton}
              TextStyle={{color: WHITE}}
              extraStyle={{
                marginTop: 50,
    
                backgroundColor: PRIMARY,
              }}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
      )
}

export default PasswordChangedSuccess
