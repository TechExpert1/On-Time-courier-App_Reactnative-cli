import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {
  BackIcon,
  NotificationIcon,
  NotificationSelected,
  NotificationUnSelected,
} from '../../Assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import {NotifcationData} from '../../utils/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NotificationScreen = () => {
  const navigation = useNavigation<any>();
  const [selectedIndex, setSelected] = useState(0);
  const UserRoleKey = 'UserRole';
  const [userRole, setUserRole] = useState(null);

  const handleContinueButton = async () => {
    try {
      const storedRole = await AsyncStorage.getItem(UserRoleKey);
      setUserRole(storedRole!);
      console.log(userRole);
    } catch (error) {
      console.error('Error fetching user role:', error);
    }
  };

  useEffect(() => {
    handleContinueButton(); // Fetch role when the screen loads
  }, [userRole]);

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
          <View></View>
        )}
      </View>
    </View>
  );
};

export default NotificationScreen;
