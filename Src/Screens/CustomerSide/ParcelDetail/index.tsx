import React, {useEffect, useState} from 'react';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppBar from '../../../Components/AppBar';
import styles from './styles';
import {
  BackIcon,
  CallBox,
  ClipIcon,
  Download,
  LocationSearching,
  MessageBox,
  OneStar,
} from '../../../Assets/Svgs';
import InfoLine from '../../../Components/InfoLineBar';
import {LIGHT_GREEN_I, PLACEHOLDERCOLOR, PRIMARY, TEXTCOLOR, WHITE} from '../../../Theme/Colors';
import CustomButton from '../../../Components/CustomButton';
import {fonts} from '../../../Theme/AppFonts';
import {useNavigation} from '@react-navigation/native';

const ParcelDetail = () => {
  const navigation = useNavigation<any>();
  const [cancelPopup, setCancelPopup] = useState(false);


  return (
    <View style={styles.body}>
      <AppBar
        text="Parcel Details"
        leftIcon={<BackIcon></BackIcon>}
        OnLeftPress={() => navigation.goBack()}></AppBar>
      <ScrollView style={styles.content}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.trackingId}>#4589632579</Text>
            <ClipIcon></ClipIcon>
          </View>
          <View style={styles.PickUpBox}>
            <View style={styles.locationIconStyle}>
              <LocationSearching></LocationSearching>
            </View>
            <Text style={styles.PickupStatusColor}>Track Parcel</Text>
          </View>
        </View>

        <Image style={{width:'100%', }} source={require('../../../Assets/Images/status.png')}></Image>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={styles.StatusStyle}>Pending</Text>
          <Text style={styles.StatusStyle}>Picked Up</Text>
          <Text style={[styles.StatusStyle,{color:PLACEHOLDERCOLOR}]}>Delivered</Text>
        </View>

        <Text style={styles.titleText}>Driver</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 12,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../../Assets/Images/UserProfile.png')}></Image>
            <View style={{marginLeft: 10}}>
              <Text style={styles.cityTextStyle}>Ronald Richard</Text>
              {/* <Text style={styles.deliveryPartnerStyle}>Ronald Richard</Text> */}
              <View style={{flexDirection: 'row'}}>
                <OneStar></OneStar>
                <Text style={styles.deliveryPartnerStyle}>4.5</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // width: 90,
            }}>
           <View style={{marginRight:12}}><MessageBox></MessageBox></View>
            <CallBox></CallBox>
          </View>
        </View>

        <Text style={styles.titleText}>Sender Details</Text>
        <InfoLine title="Name" value="Robert Smith" isDivider={true}></InfoLine>
        <InfoLine
          title="Phone#"
          value="+1 234 567 8912"
          isDivider={true}></InfoLine>
        <InfoLine
          title="Pickup Address"
          value="1234 Elm Street Springfield, IL 62701"
          isDivider={true}></InfoLine>
        <InfoLine
          title="Pickup Date"
          value="May 5, 2024"
          isDivider={true}></InfoLine>
        <InfoLine title="Pickup Time" value="9:00 am"></InfoLine>

        <Text style={styles.titleText}>Receiver Details</Text>
        <InfoLine title="Name" value="Robert Smith" isDivider={true}></InfoLine>
        <InfoLine
          title="Phone#"
          value="+1 234 567 8912"
          isDivider={true}></InfoLine>
        <InfoLine
          title="Pickup Address"
          value="1234 Elm Street Springfield, IL 62701"></InfoLine>

        <Text style={styles.titleText}>Parcel Details</Text>

        <InfoLine
          title="Delivery Type"
          value="On Priority"
          isDivider={true}></InfoLine>
        <InfoLine
          title="Parcel Type"
          value="Small Box"
          isDivider={true}></InfoLine>
        <InfoLine
          title="Parcel Weight"
          value="5 lbs"
          isDivider={true}></InfoLine>
        <InfoLine
          title="Box Size"
          value="2ft x 2ft"
          isDivider={true}></InfoLine>
        <InfoLine title="EST. Delivery" value="June 5, 2024"></InfoLine>

        <View style={styles.InfoBox}>
          <Text style={styles.totalCharges}>Total Charges</Text>
          <View>
            <Text style={styles.paymentPrice}>CAD 72.2/-</Text>
            <Text style={styles.status}>Paid</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 65,
            marginTop: 24,
          }}>
          <TouchableOpacity onPress={() => setCancelPopup(true)}>
            <Text style={styles.CancelOrder}>Cancel Order</Text>
          </TouchableOpacity>
          <CustomButton
            text="Download Receipt"
            // onPress={handleContinueButton}
            TextStyle={{
              color: TEXTCOLOR,
              fontSize: 16,
              fontFamily: fonts.MontserratBold,
            }}
            leftIcon={<Download></Download>}
            extraStyle={{
              width: '65%',

              backgroundColor: LIGHT_GREEN_I,
            }}
          />
        </View>

        <Modal
          transparent={true}
          visible={cancelPopup}
          animationType="slide"
          onRequestClose={() => setCancelPopup(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.CanclePopupTitle}>
                {'You are attempting to Cancel your Order. \nID: #4589632579'}
              </Text>

              <Text style={styles.CanclePopupText}>
                If you cancel this order then according our policies, <Text style={styles.CanclePopupSpanText}>14%</Text> of
                your total amount will be deducted.
              </Text>
              <Text style={styles.CanclePopupText}>Are you sure?</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // alignContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <TouchableOpacity
                  style={{width: '50%'}}
                  onPress={() => setCancelPopup(false)}>
                  <Text style={styles.NoText}>No</Text>
                </TouchableOpacity>
                <CustomButton
                  text="Yes, Cancel"
                  // onPress={handleContinueButton}
                  TextStyle={{
                    color: WHITE,
                    fontSize: 16,
                    fontFamily: fonts.MontserratBold,
                  }}
                  extraStyle={{
                    width: '50%',
                    marginRight: 30,
                    backgroundColor: PRIMARY,
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default ParcelDetail;
