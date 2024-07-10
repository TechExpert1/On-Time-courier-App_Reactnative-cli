import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {
  ArrowNext,
  ArrowRightBox,
  LocationIcon,
  NotificationIcon,
  PriorityDelivery,
  RegularDelivery,
} from '../../../Assets/Svgs';
import InputText from '../../../Components/InputText';
import {listOfDeliveries} from '../../../utils/constant';
import DeliveryBox from '../../../Components/DeliveryBox';
import {useNavigation} from '@react-navigation/native';

const CustomerHome = () => {
  const navigation = useNavigation<any>();
  const handleTrackingId = () => {
    navigation.navigate('TrackingParcel');
  };
  const handleRegularDelivery = () => {
    navigation.navigate('RegularDeliverySenderDetail');
  };
  return (
    <View style={styles.body}>
      <View style={styles.appBarStyle}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../../Assets/Images/UserProfile.png')}></Image>
          <View style={{marginLeft: 10}}>
            <Text style={styles.helloText}>Hello!👋</Text>
            <Text style={styles.name}>Robert Smith</Text>
          </View>
        </View>
        <NotificationIcon></NotificationIcon>
      </View>
      <View style={{marginHorizontal: 20}}>
        <InputText
          placeholder="Enter tracking ID"
          onLeftPress={handleTrackingId}
          extraStyle={{marginTop: 30}}
          addLeft={<LocationIcon></LocationIcon>}></InputText>
        <Text style={styles.ourService}>Our Services</Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={handleRegularDelivery}
            style={[styles.roleBox]}>
            <RegularDelivery></RegularDelivery>
            <Text style={[styles.roleText]}>Regular</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleRegularDelivery}
            style={[styles.roleBox]}>
            <PriorityDelivery></PriorityDelivery>
            <Text style={[styles.roleText]}>On Priority</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.ourService}>Recent Delivery</Text>
        <FlatList
          data={listOfDeliveries}
          renderItem={({item, index}) => {
            return (
              <DeliveryBox
                onTap={() => navigation.navigate('ParcelDetail')}></DeliveryBox>
            );
          }}
        />
      </View>
    </View>
  );
};

export default CustomerHome;
