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
  YELLOW,
} from '../../../Theme/Colors';
import CustomButton from '../../../Components/CustomButton';
import {fonts} from '../../../Theme/AppFonts';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import InputText from '../../../Components/InputText';
import InputLabel from '../../../Components/InputLabel';
import {COLORS} from '../../../Theme/Index';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const ParcelDetailDriver = props => {
  const {status} = props.route.params;
  const [pickupStatus, setPickupStatus] = useState(status);
  console.log(status);
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.trackingId}>#4589632579</Text>
            {/* <ClipIcon></ClipIcon> */}
          </View>
          {pickupStatus === 'Pending' ||
          pickupStatus === 'Delivered' ||
          pickupStatus === 'Picked Up' ? (
            <TouchableOpacity
              style={[
                pickupStatus === 'Pending'
                  ? styles.PickUpBox
                  : pickupStatus === 'Picked Up'
                  ? styles.PickedUpBox
                  : styles.DeliverBox,
              ]}>
              <Text style={styles.PickupStatusColor}>{pickupStatus}</Text>
            </TouchableOpacity>
          ) : (
            <View></View>
          )}

          {/* {status === 'Delivered' ? (
            <TouchableOpacity style={styles.DeliverBox}>
              <Text style={styles.PickupStatusColor}>Delivered</Text>
            </TouchableOpacity>
          ) : (
            <View style={{ paddingHorizontal:10,}}></View>
          )} */}
        </View>
        {pickupStatus === 'Cancel' ? (
          <View style={styles.CancelBox}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: fonts.MontserratMedium,
                color: COLORS.REDCOLOR,
                lineHeight: 20,
              }}>
              This order has been cancelled by the customer. Now you have to
              drip this parcel on its pickup location.
            </Text>
          </View>
        ) : (
          <View></View>
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
            {pickupStatus === 'Delivered' ? (
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
          {pickupStatus === 'Cancel' ? (
            <View></View>
          ) : (
            <View
              style={[
                styles.InfoBox,
                {
                  backgroundColor:
                    pickupStatus === 'New'
                      ? 'rgba(247, 240, 223, 1)'
                      : 'rgba(216, 234, 220, 1)',
                  marginBottom:
                    pickupStatus === 'Delivered' ? widthPercentageToDP(15) : 0,
                },
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {/* <InfoIcon></InfoIcon> */}
                <Text style={styles.totalCharges}>Total Charges</Text>
              </View>

              <View>
                <Text style={styles.paymentPrice}>CAD 72.2/-</Text>
                <Text
                  style={[
                    styles.statusText,
                    {
                      color:
                        pickupStatus === 'New'
                          ? COLORS.YELLOWDARK
                          : COLORS.PRIMARY,
                    },
                  ]}>
                  {pickupStatus === 'New' ? 'Pending' : 'Paid'}
                </Text>
              </View>
            </View>
          )}

          {pickupStatus === 'New' ? (
            <CustomButton
              text="Accept"
              onPress={() => navigation.navigate('DriverHome')}
              TextStyle={{
                color: WHITE,
                fontSize: 16,
                fontFamily: fonts.MontserratBold,
              }}
              extraStyle={{
                marginTop: 24,
                marginBottom: 65,
                backgroundColor: PRIMARY,
              }}
            />
          ) : pickupStatus === 'Accepted' ? (
            <CustomButton
              text="Confirm Pickup"
              onPress={() => setPickupStatus('Picked Up')}
              TextStyle={{
                color: WHITE,
                fontSize: 16,
                fontFamily: fonts.MontserratBold,
              }}
              extraStyle={{
                marginTop: 30,
                marginBottom: 65,
                backgroundColor: PRIMARY,
              }}
            />
          ) : pickupStatus === 'Picked Up' ? (
            <CustomButton
              text="Deliver"
              onPress={() => navigation.navigate('DriverHome')}
              TextStyle={{
                color: WHITE,
                fontSize: 16,
                fontFamily: fonts.MontserratBold,
              }}
              extraStyle={{
                marginTop: 30,
                marginBottom: 65,
                backgroundColor: PRIMARY,
              }}
            />
          ) : status === 'Cancel' ? (
            <CustomButton
              text="Back to Pickup"
              onPress={() => {
                navigation.navigate('LocationScreen', {
                  status: 'Cancel',
                });
              }}
              TextStyle={{
                color: WHITE,
                fontSize: 16,
                fontFamily: fonts.MontserratBold,
              }}
              extraStyle={{
                marginTop: 30,
                marginBottom: 65,
                backgroundColor: PRIMARY,
              }}
            />
          ) : (
            <View></View>
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
              <TouchableOpacity
                onPress={() => RateBottomRef.current.close()}
                style={styles.StarIcon}>
                <CrossIcon></CrossIcon>
              </TouchableOpacity>
              <Text style={styles.AddReview}>Add Review</Text>
              <StarRatingDisplay
                style={styles.StarStyle}
                starSize={40}
                rating={4}
                emptyColor={LIGHTGREY}
              />
              <InputLabel label="Add Reviews" />
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

export default ParcelDetailDriver;
