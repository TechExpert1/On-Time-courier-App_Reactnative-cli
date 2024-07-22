import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {Attach, BackIcon, DoubleTick, Emoji, SendMessageButton} from '../../Assets/Svgs';
import { useNavigation } from '@react-navigation/native';
import { PLACEHOLDERCOLOR } from '../../Theme/Colors';


const InBoxScreen = () => {
  const navigation = useNavigation<any>();
  const [messages, setMessages] = useState([
    {id: 1, sender: 'John', text: 'Hello there!', time: '9:45 AM'},
    {id: 2, sender: 'Jane', text: 'Hi John!', time: '9:45 AM'},
    // Add more messages as needed
  ]);
  const [newMessage, setNewMessage] = useState('');
  const sendMessage = () => {
    console.log('Hello');
    if (newMessage.trim() !== '') {
      setMessages(prevMessages => [
        ...prevMessages,
        {
          id: prevMessages.length + 1,
          sender: 'You',
          text: newMessage,
          time: '9:45 AM',
        },
      ]);
      setNewMessage('');
    }
  };

  const handleMessage = txt => {
    setNewMessage(txt);
  };

  return (
    <View style={styles.body}>
      <View style={styles.appBarStyle}>
        <View style={styles.UserInfoContainer}>
          <TouchableOpacity onPress={()=> navigation.goBack()}><BackIcon></BackIcon></TouchableOpacity>
          <Image
            style={styles.ImageStyle}
            source={require('../../Assets/Images/user4.png')}></Image>
          <Text style={styles.userName}>Ronald Richard</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.TodayText}>Today</Text>
        <ScrollView>
          {messages.map(messages => (
            <View>
              <View style={styles.messageSendBox}>
                <Text style={styles.messageText}>{messages.text}</Text>
                <Text style={styles.messageTime}>{messages.time}</Text>
              </View>
             <View style={{alignSelf:'flex-end', marginRight:20}}><DoubleTick></DoubleTick></View>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20,}}>
        
      <View style={styles.InputTextBox}>
        <TextInput
          placeholder="Your message"
          onChange={handleMessage}
          style={styles.text}
          placeholderTextColor={PLACEHOLDERCOLOR}
          value={newMessage}
        />
        <View style={{flexDirection:'row',}}>
          <Attach></Attach>
          <View style={{width:10}}></View>
          <Emoji></Emoji>
        </View>
       
      </View>
      <SendMessageButton></SendMessageButton>
      </View>
    </View>
  );
};

export default InBoxScreen;
