import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import AppIntroSlider from 'react-native-app-intro-slider';
import {slides} from '../../utils/constant';
import CustomButton from '../../Components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const OnBoardingScreen = () => {
  const navigation = useNavigation<any>();
  const sliderRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const renderItem = ({item, index}: {item: any; index: number}) => {
    const isLastSlide = index === slides.length - 1;

    const handleNextSlide = () => {
      setCurrentIndex(index + 1);
      if (isLastSlide) {
        navigation.navigate('SelectRole');
      } else {
        sliderRef.current?.goToSlide(index + 1);
      }
    };

    const handleSkipButton = () => {
      navigation.navigate('SelectRole');
    };

    return (
      <View style={styles.Slide}>
        {/* Images */}
        <ImageBackground source={item?.image} style={styles.Image}>
          <TouchableOpacity onPress={handleSkipButton}>
            <Text style={styles.Skip}>Skip</Text>
          </TouchableOpacity>
          <View style={styles.BottomCardContainer}>
            <Text style={styles.TitleText}>{item?.title}</Text>
            <Text style={styles.Description}>{item?.description}</Text>

            <CustomButton
              onPress={handleNextSlide}
              extraStyle={{width: '90%', marginTop: '10%'}}
              text={isLastSlide ? 'Get Started' : 'Next'}
            />
          </View>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <AppIntroSlider
        ref={sliderRef}
        renderItem={renderItem}
        data={slides}
        onSlideChange={index => setCurrentIndex(index)}
        renderNextButton={() => null}
        renderDoneButton={() => null}
        renderPagination={() => null}
      />
    </View>
  );
};

export default OnBoardingScreen;
