import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import AppBar from '../../../../Components/AppBar';
import {BackIcon, MasterCard, PayPal, Visa} from '../../../../Assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import InputLabel from '../../../../Components/InputLabel';
import InputText from '../../../../Components/InputText';
import InfoLine from '../../../../Components/InfoLineBar';
import {BORDERCOLOR, PRIMARY, WHITE} from '../../../../Theme/Colors';
import CustomButton from '../../../../Components/CustomButton';

const Checkout = () => {
  const navigation = useNavigation<any>();
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiry, setExpiry] = useState('');

  const handleNextButton = () => {
    navigation.navigate('DeliverySuccess');
  };

  const handleCardNubmber = txt => {
    setCardNumber(txt);
  };

  const handleCVV = txt => {
    setCvv(txt);
  };
  const handleExpiry = txt => {
    setExpiry(txt);
  };
  return (
    <View style={styles.body}>
      <AppBar
        text="Check Out"
        leftIcon={<BackIcon></BackIcon>}
        OnLeftPress={() => navigation.goBack()}></AppBar>

      <ScrollView style={styles.content}>
        <Text style={styles.headingStyle}>Your Parcel</Text>
        <View
          style={styles.UserDetailBox}>
          <InfoLine
            title="Recipient Name"
            value="Robert Smith"
            isDivider={true}></InfoLine>
          <InfoLine
            title="EST. Delivery"
            value="June 5, 2024"
            isDivider={true}></InfoLine>
           <View style={{flexDirection:'row',justifyContent:'space-between', marginTop:10}}>
           <View style={{width:'50%'}}>
              <Text style={styles.FromTo}>From</Text>
              <Text style={styles.AddressInfo}>1234 Elm Street Springfield, IL 62701</Text>

            </View>
            <View style={{width:'50%'}}>
              <Text style={styles.FromTo}>To</Text>
              <Text style={styles.AddressInfo}>5678 Maple Avenue Seattle, WA 98101</Text>

            </View>
           </View>
        </View>
        <Text style={styles.heading1Style}>Select Payment Method</Text>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:15}}>
          <Visa></Visa>
          <MasterCard></MasterCard>
          <PayPal></PayPal>
        </View>
        <Text style={[styles.headingSemiStyle, {marginTop:18}]}>Please enter details to pay.</Text>
        <InputLabel label="Card Number" />
        <InputText
          placeholder="Card Number"
          type={'numeric'}
          onChange={handleCardNubmber}
          value={cardNumber}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width: '45%'}}>
            <InputLabel label="CVV" />
            <InputText
              placeholder="CVV"
              type={'numeric'}
              onChange={handleCVV}
              value={cvv}
            />
          </View>
          <View style={{width: '45%'}}>
            <InputLabel label="Expiry" />
            <InputText
              placeholder="Expiry"
              type={'numeric'}
              onChange={handleExpiry}
              value={expiry}
            />
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:15,}}>
          <Text style={styles.TotalCharges}>Total Charges</Text>
          <Text style={styles.TotalChargesPayment}>CAD 72.2/-</Text>
        </View>

        <CustomButton
          text="Pay Now"
          onPress={handleNextButton}
          TextStyle={{color: WHITE}}
          extraStyle={{
            marginTop: 24,
            marginBottom: 50,
            backgroundColor: PRIMARY,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Checkout;
