import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {MainStyle} from '../../Theme/MainStyle';
import {COLORS} from '../../Theme/Index';
import styles from './styles';
import {DoubleTick, NotificationIcon} from '../../Assets/Svgs';
import {ChatList} from '../../utils/constant';
import {BORDERCOLOR, PRIMARY} from '../../Theme/Colors';
import { useNavigation } from '@react-navigation/native';

const ChatScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.body}>
      <View style={styles.appBarStyle}>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginLeft: 10}}>
            <Text style={styles.ScreeName}>Messages</Text>
          </View>
        </View>
        <NotificationIcon></NotificationIcon>
      </View>

      <View style={{marginHorizontal: 20, marginTop:25}}>
        <FlatList
          data={ChatList}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
              onPress={()=> navigation.navigate('InBoxScreen')}
                style={styles.ChatBox}>
                <Image style={styles.ImageStyle} source={item.image} />
                <View
                  style={styles.MessageContentContainer}>
                  <View style={{alignContent:'center', marginLeft: 10}}>
                    <Text style={styles.userName}>{item.name}</Text>
                    <Text style={styles.MessageText}>{item.message}</Text>
                  </View>
                 <View>
                 <Text style={styles.TimeText}>{item.time}</Text>
                 {item.isDeliver ? <View style={{alignSelf:'flex-end', marginTop:5}}><DoubleTick></DoubleTick></View> : <View></View>}
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

export default ChatScreen;
