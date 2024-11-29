import React from 'react';
import styles from './styles';
import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';
import CustomButton from '../../../Components/CustomButton';
import {PRIMARY, WHITE} from '../../../Theme/Colors';
import {useNavigation} from '@react-navigation/native';

const RequestSuccess = () => {
  const navigation = useNavigation<any>();
  const handleContinueButton = () => {
    navigation.navigate('DriverBottomTab');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={styles.imageStyle}
        source={require('../../../Assets/Images/SplashScreen.png')}>
        <Image
          style={styles.RecoverImageStyle}
          source={require('../../../Assets/Images/PasswordRecoverTick.png')}></Image>
        <Text style={styles.PasswordRecover}>{'Request Sent'}</Text>
        <Text style={styles.NormalTextStyle}>
          {
            'Your payout request has sent to admin . You amount will be transferred to you given account.'
          }
        </Text>

        <View style={styles.content}>
          <CustomButton
            text="OK"
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
  );
};

export default RequestSuccess;
