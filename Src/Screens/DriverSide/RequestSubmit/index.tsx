import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, ImageBackground, SafeAreaView, Text, View } from 'react-native';
import styles from './styles';
import CustomButton from '../../../Components/CustomButton';
import { PRIMARY, WHITE } from '../../../Theme/Colors';

const RequestSubmit = props =>  {
  const {status} = props.route.params;
    const navigation = useNavigation<any>();
    const handleContinueButton = () => {
       if(status === '0'){
        navigation.navigate('ProfileUnderReview',{ScreenName: 'request-submit'});
       }else {
        navigation.navigate('DriverBottomTab')
       }
      };
    return (
        <SafeAreaView style={{flex:1}}>
        <ImageBackground
          style={styles.imageStyle}
          source={require('../../../Assets/Images/SplashScreen.png')}>
          <Image
            style={styles.RecoverImageStyle}
            source={require('../../../Assets/Images/PasswordRecoverTick.png')}></Image>
          <Text style={styles.PasswordRecover}>{'Request Submitted'}</Text>
          <Text style={styles.NormalTextStyle}>
          {'Your profile has sent to admin for verification. We’ll let you know soon.'}
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

export default RequestSubmit
