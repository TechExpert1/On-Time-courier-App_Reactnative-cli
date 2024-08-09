import {View, Text, Image, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../../Theme/Index';
import {MainStyle} from '../../Theme/MainStyle';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import FastImage from 'react-native-fast-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

const Splash = () => {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const {onBoardingState} = useSelector(state => state.user);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (onBoardingState) {
        navigation.navigate('SelectRole');
      } else {
        navigation.navigate('OnBoardingScreen');
      }
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FastImage
        style={styles.imageStyle}
        source={require('../../Assets/Images/splash.gif')}
      />
    </SafeAreaView>

    // <Image style={styles.imageStyle} source={require('../../Assets/Images/SplashScreen.png')}></Image>
  );
};

export default Splash;
