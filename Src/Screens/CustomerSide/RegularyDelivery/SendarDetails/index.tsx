import React, {useState} from 'react';
import {Modal, ScrollView, Text, TextInput, View} from 'react-native';
import styles from './styles';
import AppBar from '../../../../Components/AppBar';
import {
  AMPM,
  BackIcon,
  CalendarSVG,
  PickupAddress,
} from '../../../../Assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import InputLabel from '../../../../Components/InputLabel';
import InputText from '../../../../Components/InputText';
import CustomButton from '../../../../Components/CustomButton';
import {BLACK, BLACK_DARK, PLACEHOLDERCOLOR, PRIMARY, WHITE} from '../../../../Theme/Colors';
import {Calendar} from 'react-native-calendars';

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
  const [showCalendar, setShowCalendar] = useState(false);
  const [selected, setSelected] = useState('');

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
          addRight={<CalendarSVG></CalendarSVG>}
          readonly={true}
          onRightPress={() => setShowCalendar(true)}
          value={pickupDate}
        />
        <InputLabel label="Pickup Time" />
        <View style={styles.InputTextBox}>
          <TextInput
            placeholder="-- : --"
            placeholderTextColor={PLACEHOLDERCOLOR}
            onChange={handlePickUpTime}
            value={pickupTime}
          />

          <AMPM></AMPM>
        </View>

        <Text style={[styles.headingStyle, {marginTop: 20}]}>
          Receiver Details
        </Text>
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
            marginBottom: 70,
            backgroundColor: PRIMARY,
          }}
        />
      </ScrollView>
      <Modal
        transparent={true}
        visible={showCalendar}
        animationType="slide"
        onRequestClose={() => setShowCalendar(false)}>
        <View style={styles.modalContainer}>
          <Calendar
            onDayPress={day => {
              // setBillingDate(day.dateString)
              setSelected(day.dateString);
              // console.log(selected)
            }}
            // dayComponent={({ date, state }) => {
            //   return <CustomDayComponent date={date} state={state} />;
            // }}
            style={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedTextColor: PRIMARY,
              },
            }}
          />
          <View style={styles.dashboardView1}></View>
        </View>
      </Modal>
    </View>
  );
};

export default RegularDeliverySenderDetail;
