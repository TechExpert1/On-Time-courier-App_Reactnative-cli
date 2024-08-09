import React from 'react';
import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import CustomButton from '../../../Components/CustomButton';
import {PRIMARY, WHITE} from '../../../Theme/Colors';
import {useNavigation} from '@react-navigation/native';

const PasswordRecover = props => {
  const navigation = useNavigation<any>();
  const {from} = props?.route?.params;
  console.log('🚀 ~ PasswordRecover ~ from:', from);
  const handleContinueButton = () => {
    navigation.navigate('CustomerLogin');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={styles.imageStyle}
        source={require('../../../Assets/Images/SplashScreen.png')}>
        <Image
          style={styles.RecoverImageStyle}
          source={require('../../../Assets/Images/PasswordRecoverTick.png')}></Image>
        <Text style={styles.PasswordRecover}>Password Recovered</Text>
        <Text style={styles.NormalTextStyle}>
          The password has been successfully recovered, you can log in back with
          a new password
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
  );
};

export default PasswordRecover;
