import React, { useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { Flag, NotificationIcon } from '../../../Assets/Svgs'
import { DriverTabStatus,  listOfDriverDeliverDeliveries, listOfDriverDeliveries } from '../../../utils/constant'
import DriverDeliveryBox from '../../../Components/DriverDeliveryBox'
import { useNavigation } from '@react-navigation/native'

const DriverHome = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigation = useNavigation<any>();
  return (
    <View style={styles.body}>
      <View style={styles.appBarStyle}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../../Assets/Images/UserProfile.png')}></Image>
          <View style={{marginLeft: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.helloText}>Hello!👋</Text>
              <View style={{marginTop: 5, marginLeft: 5}}>
                <Flag></Flag>
              </View>
            </View>
            <Text style={styles.name}>Robert Smith</Text>
          </View>
        </View>
        <TouchableOpacity
        //    onPress={handleNotifictionNavigation}
        >
          <NotificationIcon></NotificationIcon>
        </TouchableOpacity>
      </View>

      <View style={{marginLeft: 20, marginTop: 33, marginBottom: 20}}>
        <FlatList
          data={DriverTabStatus}
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
            selectedIndex === 2 ? listOfDriverDeliverDeliveries : listOfDriverDeliveries
          }
          style={{marginBottom: 200}}
          renderItem={({item, index}) => {
            return (
              <DriverDeliveryBox
                pickup_date={item.pickup_date}
                pickup_city={item.pickup_city}
                delivery_city={item.delivery_city}
                delivery_date={item.delivery_date}
                driver_name={item.driver_name}
                status={item.status}
                isNew={selectedIndex ===0 ? 'New' : ''}
                onTap={() =>
                  navigation.navigate('ParcelDetailDriver', {status: selectedIndex === 0 ? 'New' : selectedIndex === 1 ? 'Pending' : item.status})
                }
                onMapPress={()=> navigation.navigate('GoForPickUp')}
                // OnTapDriver={() =>
                //   navigation.navigate('DriverProfileCustomerSide')
                // }
                ></DriverDeliveryBox>
            );
          }}
        />
      </View>
      
     
    </View>
  )
}

export default DriverHome
