import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {MainStyle} from '../../Theme/MainStyle';
import {COLORS} from '../../Theme/Index';
import styles from './styels';
import {NotificationIcon} from '../../Assets/Svgs';
import DeliveryBox from '../../Components/DeliveryBox';
import {listOfDeliveries, TabBarStatus} from '../../utils/constant';
import {useNavigation} from '@react-navigation/native';
import {LIGHT_GREEN_I} from '../../Theme/Colors';

const MyOrderScreeen = () => {
  const navigation = useNavigation<any>();

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
      <FlatList
        
        data={TabBarStatus}
        horizontal={true}
        renderItem={({item, index}) => {
          return (
            // <View
            //   style={{
            //     height: 50,
            //     width: 100,

            //     borderRadius: 7,
            //     backgroundColor: LIGHT_GREEN_I,
            //   }}>
             
            // </View>
            <Text>{item.title}</Text>
          );
        }}
      />

      <View style={{marginHorizontal: 20}}>
        <FlatList
          data={listOfDeliveries}
          renderItem={({item, index}) => {
            return (
              <DeliveryBox
                onTap={() => navigation.navigate('ParcelDetail')}></DeliveryBox>
            );
          }}
        />
      </View>
    </View>
  );
};

export default MyOrderScreeen;
