import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {
  Attach,
  BackIcon,
  CameraIcon,
  DoubleTick,
  Emoji,
  GalleryIcon,
  SendMessageButton,
} from '../../Assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import {PLACEHOLDERCOLOR} from '../../Theme/Colors';
import {
  requestGalleryPermission,
  requestPermissionsForCamera,
} from '../../utils/permission';
import {
  ImageLibraryOptions,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import EmojiSelector, {Categories} from 'react-native-emoji-selector';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const InBoxScreen = () => {
  const navigation = useNavigation<any>();
  const [showPicker, setShowPicker] = useState(false);
  const [messages, setMessages] = useState([
    {id: 1, sender: 'John', text: 'Hello there!', time: '9:45 AM'},
    {id: 2, sender: 'Jane', text: 'Hi John!', time: '9:45 AM'},
    // Add more messages as needed
  ]);
  const picker = useRef<any>(null);
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

  useEffect(() => {
    requestGalleryPermission();
    requestPermissionsForCamera();
  }, []);

  const openImagePicker = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('Image picker error');
      } else {
        let imageUri = response.assets?.[0];
        if (imageUri) {
          // setSelectedImage(imageUri);
          picker.current.close();
          // setModalVisible(!modalVisible)
        } else {
          console.log('image uri is undefined');
        }
      }
    });
  };

  const openCamera = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorMessage) {
        console.log('Camera error');
      } else {
        let imageUri = response.assets?.[0]?.uri;
        if (imageUri) {
          // setSelectedImage(imageUri);
          picker.current.close();
        } else {
          console.log('image uri is undefined');
        }
      }
    });
  };

  return (
    <View style={styles.body}>
      <View style={styles.appBarStyle}>
        <View style={styles.UserInfoContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon></BackIcon>
          </TouchableOpacity>
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
              <View style={{alignSelf: 'flex-end', marginRight: 20}}>
                <DoubleTick></DoubleTick>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <View style={styles.InputTextBox}>
          <TextInput
            placeholder="Your message"
            onChange={handleMessage}
            style={styles.text}
            placeholderTextColor={PLACEHOLDERCOLOR}
            value={newMessage}
          />
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={()=> picker.current.open()}>
              <Attach></Attach>
            </TouchableOpacity>
            <View style={{width: 10}}></View>
            <TouchableOpacity onPress={() => setShowPicker(true)}>
              <Emoji></Emoji>
            </TouchableOpacity>
          </View>
        </View>
        <SendMessageButton></SendMessageButton>
      </View>
      {showPicker && (
        <EmojiSelector
          onEmojiSelected={() => {}}
          category={Categories.all}
          showTabs={true}
          showSearchBar={true}
          showHistory={true}
          columns={10}
          placeholder="Search emoji..."
        />
      )}

      <RBSheet
        ref={picker}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          draggableIcon: {
            marginTop: 50,
            width: 83,
          },
          container: {
            height: '20%',
            // maxHeight: '100%',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            paddingHorizontal: 20,
          },
        }}>
        <View
          style={{
            flexDirection: 'row',
            padding: 30,
            paddingTop: heightPercentageToDP(5),
          }}>
          <TouchableOpacity onPress={openCamera} style={{alignItems: 'center'}}>
            <CameraIcon />
            <Text style={styles.PickerText}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={openImagePicker}
            style={{alignItems: 'center', marginLeft: widthPercentageToDP(20)}}>
            <GalleryIcon />
            <Text style={styles.PickerText}>Gallery</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
};

export default InBoxScreen;
