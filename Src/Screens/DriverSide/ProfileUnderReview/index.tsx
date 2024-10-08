import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Flag, NotificationIcon} from '../../../Assets/Svgs';
import {useNavigation} from '@react-navigation/native';

const ProfileUnderReview = props => {
  const navigation = useNavigation<any>();
  const {ScreenName} = props.route.params;
  useEffect(() => {
    const timer = setTimeout(() => {
      if (ScreenName === 'edit-profile') {
        navigation.navigate('DriverBottomTab');
      }
      {
        navigation.navigate('ProjectRejected');
      }
    }, 7000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.body}>
      <View style={styles.appBarStyle}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../../Assets/Images/UserProfile.png')}></Image>
          <View style={{marginLeft: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.helloText}>Hello!👋</Text>
              <View style={{marginTop: 5, marginLeft: 5}}>
                <Flag></Flag>
              </View>
            </View>
            <Text style={styles.name}>Robert Smith</Text>
          </View>
        </View>
        <TouchableOpacity
        //    onPress={handleNotifictionNavigation}
        >
          <NotificationIcon></NotificationIcon>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 200,
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={styles.imageStyle}
          source={require('../../../Assets/Images/waiting_review.png')}></Image>
        <Text style={styles.contentText}>
          You Profile is under review. After verification you can start your
          journey with{' '}
        </Text>
        <Text style={styles.ONTIMECOURIER}>ON TIME COURIERS</Text>
      </View>
    </View>
  );
};

export default ProfileUnderReview;
