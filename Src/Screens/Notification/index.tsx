import React, {useEffect, useState} from 'react';
import {FlatList, Modal, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {
  BackIcon,
  NotificationIcon,
  NotificationSelected,
  NotificationUnSelected,
} from '../../Assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import {NotifcationData, NotifcationDataCustomerSide} from '../../utils/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../Components/CustomButton';
import { COLORS } from '../../Theme/Index';
import { fonts } from '../../Theme/AppFonts';

const NotificationScreen = () => {
  const navigation = useNavigation<any>();
  const [selectedIndex, setSelected] = useState(0);
  const UserRoleKey = 'UserRole';
  const [userRole, setUserRole] = useState(null);
  const [cancelPopup, setCancelPopup] = useState(false);

  const handleContinueButton = async () => {
   navigation.navigate('BottomTab',{screen:'My Orders'})
  };

 

  return (
    <View style={styles.body}>
      <View style={styles.appBarStyle}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon></BackIcon>
          </TouchableOpacity>
          <Text style={styles.TitleName}>Notifications</Text>
          <View></View>
        </View>
      </View>

      <View style={{marginHorizontal: 20, marginTop: 25}}>
        <Text style={styles.MessageText}>Today</Text>
        {userRole === 'driver' ? (
          <FlatList
            data={NotifcationData}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelected(index);
                    if (item.Title === 'Order Cancelled!') {
                      navigation.navigate('ParcelDetailDriver', {
                        status: 'Cancel',
                      });
                    }
                  }}
                  style={
                    selectedIndex === index
                      ? styles.NotifictionSelected
                      : styles.NotifictionUnSelected
                  }>
                  {selectedIndex === index ? (
                    <NotificationSelected></NotificationSelected>
                  ) : (
                    <NotificationUnSelected></NotificationUnSelected>
                  )}
                  <View style={styles.MessageContentContainer}>
                    <View style={{alignContent: 'center', marginLeft: 10}}>
                      <Text style={styles.NotificationTitle}>{item.Title}</Text>
                      <Text style={styles.MessageText}>{item.message}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        ) : (
          <View>
            <FlatList
            data={NotifcationDataCustomerSide}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelected(index);
                    if (item.Title === 'Parcel Cancelled!') {
                      setCancelPopup(true)
                    }
                  }}
                  style={
                    selectedIndex === index
                      ? styles.NotifictionSelected
                      : styles.NotifictionUnSelected
                  }>
                  {selectedIndex === index ? (
                    <NotificationSelected></NotificationSelected>
                  ) : (
                    <NotificationUnSelected></NotificationUnSelected>
                  )}
                  <View style={styles.MessageContentContainer}>
                    <View style={{alignContent: 'center', marginLeft: 10}}>
                      <Text style={styles.NotificationTitle}>{item.Title}</Text>
                      <Text style={styles.MessageText}>{item.message}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
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
              You’ve cancelled your order #13452435,
              </Text>

              <Text style={styles.CanclePopupText}>
              Please confirm that you’ve received your order?
              </Text>
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
                  <Text style={styles.NoText}>Not  Yet</Text>
                </TouchableOpacity>
                <CustomButton
                  text="Received"
                  onPress={handleContinueButton}
                  TextStyle={{
                    color: COLORS.WHITE,
                    fontSize: 16,
                    fontFamily: fonts.MontserratBold,
                  }}
                  extraStyle={{
                    width: '50%',
                    marginRight: 30,
                    backgroundColor: COLORS.PRIMARY,
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
        
    </View>
  );
};

export default NotificationScreen;
