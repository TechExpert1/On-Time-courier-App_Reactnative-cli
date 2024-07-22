import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {MainStyle} from '../../Theme/MainStyle';
import {COLORS} from '../../Theme/Index';
import styles from './styels';
import {NotificationIcon} from '../../Assets/Svgs';
import DeliveryBox from '../../Components/DeliveryBox';
import {
  listOfDeliverDeliveries,
  listOfDeliveries,
  TabBarStatus,
} from '../../utils/constant';
import {useNavigation} from '@react-navigation/native';
import {LIGHT_GREEN_I} from '../../Theme/Colors';
import {fonts} from '../../Theme/AppFonts';

const MyOrderScreeen = () => {
  const navigation = useNavigation<any>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={styles.body}>
      <View style={styles.appBarStyle}>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginLeft: 10}}>
            <Text style={styles.name}>My Orders</Text>
          </View>
        </View>
        <NotificationIcon></NotificationIcon>
      </View>

      <View style={{marginLeft: 20, marginTop: 33, marginBottom: 20}}>
        <FlatList
          data={TabBarStatus}
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{width: 20}}></View>}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => setSelectedIndex(index)}
                style={
                  selectedIndex === index
                    ? styles.SelectedTab
                    : styles.UnSelectedTab
                }>
                <Text
                  style={
                    selectedIndex === index
                      ? styles.TabSelectedText
                      : styles.TabUnSelectedText
                  }>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View style={{marginHorizontal: 20}}>
        <FlatList
          data={
            selectedIndex === 2 ? listOfDeliverDeliveries : listOfDeliveries
          }
          style={{marginBottom: 200}}
          renderItem={({item, index}) => {
            return (
              <DeliveryBox
                pickup_date={item.pickup_date}
                pickup_city={item.pickup_city}
                delivery_city={item.delivery_city}
                delivery_date={item.delivery_date}
                driver_name={item.driver_name}
                status={item.status}
                onTap={() =>
                  navigation.navigate('ParcelDetail', {status: item.status})
                }
                OnTapDriver={() =>
                  navigation.navigate('DriverProfileCustomerSide')
                }></DeliveryBox>
            );
          }}
        />
      </View>
    </View>
  );
};

export default MyOrderScreeen;
