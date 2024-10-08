import React, {useEffect, useRef, useState} from 'react';
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
  CrossIcon,
  Download,
  LocationSearching,
  MessageBox,
  OneStar,
  StarIcon,
} from '../../../Assets/Svgs';
import InfoLine from '../../../Components/InfoLineBar';
import {
  LIGHT_GREEN,
  LIGHT_GREEN_I,
  LIGHTGREY,
  PLACEHOLDERCOLOR,
  PRIMARY,
  TEXTCOLOR,
  WHITE,
} from '../../../Theme/Colors';
import CustomButton from '../../../Components/CustomButton';
import {fonts} from '../../../Theme/AppFonts';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import InputText from '../../../Components/InputText';
import InputLabel from '../../../Components/InputLabel';

const ParcelDetail = props => {
  const {status} = props.route.params;
  const RateBottomRef = useRef<any>();

  const navigation = useNavigation<any>();
  const [cancelPopup, setCancelPopup] = useState(false);
  const [comment, setComment] = useState('');

  const handleComment = txt => {
    setComment(txt);
  };

  return (
    <View style={styles.body}>
      <AppBar
        text="Parcel Details"
        leftIcon={<BackIcon></BackIcon>}
        OnLeftPress={() => navigation.goBack()}></AppBar>
      <ScrollView style={styles.content}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.trackingId}>#4589632579</Text>
            <ClipIcon></ClipIcon>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('TrackingParcelDetail')}
            style={styles.PickUpBox}>
            <View style={styles.locationIconStyle}>
              <LocationSearching></LocationSearching>
            </View>
            <Text style={styles.PickupStatusColor}>Track Parcel</Text>
          </TouchableOpacity>
        </View>

        {status === 'Delivered' ? (
          <Image
            style={{
              height: 60,
              width: '95%',
              alignSelf: 'center',
              marginHorizontal: 40,
            }}
            source={require('../../../Assets/Images/deliver_status.png')}></Image>
        ) : (
          <Image
            style={{width: '93%', alignSelf: 'center', paddingHorizontal: 30}}
            source={require('../../../Assets/Images/status1.png')}></Image>
        )}
        <View style={styles.content1}>
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
            {status === 'Delivered' ? (
              <View></View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  // width: 90,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('InBoxScreen')}
                  style={{marginRight: 12}}>
                  <MessageBox></MessageBox>
                </TouchableOpacity>
                <CallBox></CallBox>
              </View>
            )}
          </View>

          <Text style={styles.titleText}>Sender Details</Text>
          <InfoLine
            title="Name"
            value="Robert Smith"
            isDivider={true}></InfoLine>
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
          <InfoLine
            title="Name"
            value="Robert Smith"
            isDivider={true}></InfoLine>
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
          {status === 'Delivered' ? (
            <CustomButton
              text="Rate Driver"
              onPress={() => RateBottomRef.current.open()}
              TextStyle={{
                color: TEXTCOLOR,
                fontSize: 16,
                fontFamily: fonts.MontserratBold,
              }}
              leftIcon={<StarIcon></StarIcon>}
              extraStyle={{
                marginTop: 24,
                marginBottom: 65,
                backgroundColor: 'rgba(168, 230, 207, 1)',
              }}
            />
          ) : (
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

                  backgroundColor: 'rgba(168, 230, 207, 1)',
                }}
              />
            </View>
          )}
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
                If you cancel this order then according our policies,{' '}
                <Text style={styles.CanclePopupSpanText}>14%</Text> of your
                total amount will be deducted.
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

        <RBSheet
          ref={RateBottomRef}
          draggable={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'rgba(0,0,0,0.5)',
            },
            draggableIcon: {
              marginTop: 10,
              width: 155,
            },
            container: {
              height: '50%',
              backgroundColor: '#FFFAFB',
              // maxHeight: '100%',

              alignContent: 'center',
              borderTopRightRadius: 25,
              borderTopLeftRadius: 25,
            },
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.filterBottomSheetContainer}>
              <TouchableOpacity onPress={()=>RateBottomRef.current.close()} style={styles.StarIcon}><CrossIcon></CrossIcon></TouchableOpacity>
              <Text style={styles.AddReview}>Add Review</Text>
              <StarRatingDisplay
              style={styles.StarStyle}
                starSize={40}
                rating={4}
                emptyColor={LIGHTGREY}
              />
              <InputLabel label="Add Reviews"  />
              <InputText
                placeholder="Type here..."
                extraStyle={{
                  height: 113,
                  alignItems: 'flex-start',
                }}
                onChange={handleComment}
                value={comment}
              />
                <CustomButton
              text="Submit"
              onPress={() => RateBottomRef.current.close()}
              TextStyle={{
                color: WHITE,
                fontSize: 16,
                fontFamily: fonts.MontserratBold,
              }}
              extraStyle={{
                marginTop: 24,
                marginBottom: 40,
                backgroundColor: PRIMARY,
              }}
            />
            </View>
          </ScrollView>
        </RBSheet>
      </ScrollView>
    </View>
  );
};

export default ParcelDetail;
