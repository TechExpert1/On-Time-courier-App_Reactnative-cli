import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from './styles';
import AppBar from '../../../../Components/AppBar';
import {AMPM, BackIcon, Calendar, PickupAddress} from '../../../../Assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import InputLabel from '../../../../Components/InputLabel';
import InputText from '../../../../Components/InputText';
import CustomButton from '../../../../Components/CustomButton';
import { PRIMARY, WHITE } from '../../../../Theme/Colors';
import { matrixTransform } from 'react-native-svg/lib/typescript/elements/Shape';

const RegularDeliverySenderDetail = () => {
  const navigation = useNavigation<any>();
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pickupAddress, setPickUpAddress] = useState('');
  const [pickupDate, setPickUpDate] = useState('');
  const [pickupTime, setPickUpTime] = useState('');

  const [ReceiverFullName, setReceiverFullName] = useState('');
  const [ReciverPhoneNumber, setReceiverPhoneNumber] = useState('');
  const [ReciverAddress, setReceiverAddress] = useState('');

  const handleFullName = txt => {
    setFullName(txt);
  };
  const handlePhonNumber = txt => {
    setPhoneNumber(txt);
  };
  const handlePickUpAddress = txt => {
    setPickUpAddress(txt);
  };
  const handlePickUpDate = txt => {
    setPickUpDate(txt);
  };
  const handlePickUpTime = txt => {
    setPickUpTime(txt);
  };

  const handleReceiverFullName = txt => {
    setReceiverFullName(txt);
  };
  const handleReceiverPhoneNumber = txt => {
    setReceiverPhoneNumber(txt);
  };
  const handleReceiverAddress = txt => {
    setReceiverAddress(txt);
  };

  const handleNextButton = () => {
    navigation.navigate('RegularDeliveryParcelDetail');
  };

  return (
    <View style={styles.body}>
      <AppBar
        text="Regular Delivery"
        leftIcon={<BackIcon></BackIcon>}
        OnLeftPress={() => navigation.goBack()}></AppBar>

      <ScrollView style={styles.content}>
        <Text style={styles.headingStyle}>Sender Details</Text>

        <InputLabel label="Name" />
        <InputText
          placeholder="Full Name"
          onChange={handleFullName}
          value={fullName}
        />

        <InputLabel label="Phone #" />
        <InputText
          placeholder="Phone #"
          type={'numeric'}
          onChange={handlePhonNumber}
          value={phoneNumber}
        />

        <InputLabel label="Pickup Address" />
        <InputText
          placeholder="Address"
          onChange={handlePickUpAddress}
          addRight={<PickupAddress></PickupAddress>}
          value={pickupAddress}
        />
        <InputLabel label="Pickup Date" />
        <InputText
          placeholder="Date"
          onChange={handlePickUpDate}
          addRight={<Calendar></Calendar>}
          value={pickupDate}
        />
        <InputLabel label="Pickup Time" />
        <InputText
          placeholder="-- : --"
          onChange={handlePickUpTime}
          addRight={
          <AMPM></AMPM>
          }
          value={pickupTime}
        />
         <Text style={[styles.headingStyle, {marginTop:20}]}>Receiver Details</Text>
         <InputLabel label="Name" />
        <InputText
          placeholder="Full Name"
          onChange={handleReceiverFullName}
          value={ReceiverFullName}
        />
        <InputLabel label="Phone #" />
        <InputText
          placeholder="Phone #"
          type={'numeric'}
          onChange={handleReceiverPhoneNumber}
          value={ReciverPhoneNumber}
        />
        
        <InputLabel label="Drop off Address" />
        <InputText
          placeholder="Address"
          onChange={handleReceiverAddress}
          addRight={<PickupAddress></PickupAddress>}
          value={ReciverAddress}
        />
         <CustomButton
          text="Next"
          onPress={handleNextButton}
          TextStyle={{color: WHITE}}
          extraStyle={{
            marginTop: 24,
            marginBottom:70,
            backgroundColor: PRIMARY,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default RegularDeliverySenderDetail;
