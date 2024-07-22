import React, {useState} from 'react';
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

const NotificationScreen = () => {
  const navigation = useNavigation<any>();
  const [selectedIndex, setSelected] = useState(0);
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
        <FlatList
          data={NotifcationData}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={()=> setSelected(index)}
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
    </View>
  );
};

export default NotificationScreen;
