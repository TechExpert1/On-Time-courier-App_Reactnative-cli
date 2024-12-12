import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  AddIcon,
  ArrowDown,
  BackIcon,
  CameraIcon,
  CIINFO,
  EditProfile,
  GalleryIcon,
  RedCrossIcon,
} from '../../../Assets/Svgs';
import InputLabel from '../../../Components/InputLabel';
import InputText from '../../../Components/InputText';
import CustomButton from '../../../Components/CustomButton';
import {PRIMARY, TEXTCOLOR, WHITE} from '../../../Theme/Colors';
import styles from './styles';
import {AllVehiclesList} from '../../../utils/constant';
import {fonts} from '../../../Theme/AppFonts';
import {
  requestGalleryPermission,
  requestPermissionsForCamera,
} from '../../../utils/permission';
import {
  ImageLibraryOptions,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const DriverEditProfile = () => {
  const navigation = useNavigation<any>();
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [plateFormNumber, setPlateFormNumber] = useState('');
  const [addrss, setAddress] = useState('');
  const [SelectVehicleModel, setVehicleModel] = useState(false);
  const [selectVehicle, setSelectVehicle] = useState('');
  const [selectedVehicleType, setSelectedVehicleType] = useState(null);
  const [selectedVehicleName, setSelectedVehiceName] = useState('');
  const [selectImage, setSelectedImage] = useState();
  const picker = useRef<any>(null);

  const handleFullName = txt => {
    setFullName(txt);
  };
  const handlePhonNumber = txt => {
    setPhoneNumber(txt);
  };

  const handleAddrss = txt => {
    setAddress(txt);
  };
  const handleContinueButton = () => {
    navigation.navigate('DriverProfileUnderReview');
  };

  const hanldePlateNumber = txt => {
    setPlateFormNumber(txt);
  };

  const hanldeSelectVehicle = txt => {
    setSelectVehicle(txt);
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
          setSelectedImage(imageUri);
          picker.current.close()
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
          setSelectedImage(imageUri);
          picker.current.close()
        } else {
          console.log('image uri is undefined');
        }
      }
    });
  };

  return (
    <View style={styles.body}>
      <View style={styles.appBarStyle}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon></BackIcon>
          </TouchableOpacity>
          <Text style={styles.TitleName}>Edit Profile</Text>
          <View></View>
        </View>
      </View>

      

      <ScrollView style={styles.content}>
      <View style={styles.ProfilePic}>
        <Image source={require('../../../Assets/Images/ProfilePic.png')} />
        <View
          style={{
            alignSelf: 'flex-end',
            position: 'absolute',
            justifyContent: 'flex-end',
            bottom: -10,
            right: -10,
          }}>
          <TouchableOpacity onPress={()=> picker.current.open()}>
            <EditProfile></EditProfile>
          </TouchableOpacity>
        </View>
      </View>
        <InputLabel label="Full Name" />
        <InputText
          placeholder="Full Name"
          onChangeText={handleFullName}
          value={fullName}
        />
        <InputLabel label="Phone #" />
        <InputText
          placeholder="Phone #"
          type={'numeric'}
          onChangeText={handlePhonNumber}
          value={phoneNumber}
        />
        <InputLabel label="Address" />
        <InputText
          placeholder="Address"
          onChangeText={handleAddrss}
          value={addrss}
        />
        <InputLabel label="Vehicle" />
        {selectedVehicleType === null ? (
          <InputText
            placeholder="Select Vehicle"
            addRight={<ArrowDown></ArrowDown>}
            readonly={true}
            onChangeText={hanldeSelectVehicle}
            onRightPress={() => setVehicleModel(true)}
            value={selectVehicle}
          />
        ) : (
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.container}>
              <Image
                style={styles.imageStyles}
                source={selectedVehicleType}></Image>
              <Text style={styles.parcelTypeText}>{selectedVehicleName}</Text>
            </View>
            <TouchableOpacity
              onPress={() => setVehicleModel(true)}
              style={{marginTop: 20, marginLeft: -25}}>
              <ArrowDown></ArrowDown>
            </TouchableOpacity>
          </View>
        )}

        <InputLabel label="License Plate Number" />
        <InputText
          placeholder="Plate Number"
          onChangeText={hanldePlateNumber}
          value={plateFormNumber}
        />
        <InputLabel label="License" />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.IdContainer}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'space-between',
              }}>
              <View></View>
              <Text style={styles.FrontBack}>Front</Text>
              <View style={{marginRight: 10}}>
                <RedCrossIcon></RedCrossIcon>
              </View>
            </View>
            <Image
              style={styles.idCardImageStyle}
              source={require('../../../Assets/Images/idcard.png')}></Image>
          </View>

          <View style={styles.IdContainer}>
            <View
              style={{
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={styles.FrontBack}>Back</Text>
              <View
                style={{
                  alignSelf: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                <AddIcon></AddIcon>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.InfoBox}>
          <CIINFO></CIINFO>
          <Text
            style={{
              width: 292,
              fontFamily: fonts.MontserratRegular,
              color: TEXTCOLOR,
              fontSize: 14,
              marginLeft: 2,
            }}>
            If you change your vehicle information then your profile will send
            to the admin for verification and till then you will not be able to
            get orders request
          </Text>
        </View>
        <CustomButton
          text="Save"
          onPress={handleContinueButton}
          TextStyle={{color: WHITE}}
          extraStyle={{
            marginTop: 30,
            marginBottom: 50,
            backgroundColor: PRIMARY,
          }}
        />
      </ScrollView>

      <Modal
        transparent={true}
        visible={SelectVehicleModel}
        animationType="slide"
        onRequestClose={() => setVehicleModel(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={AllVehiclesList}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedVehicleType(item.image);
                      setSelectedVehiceName(item.title);
                      setVehicleModel(false);
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image style={styles.imageStyles} source={item.image} />
                      <Text style={styles.parcelTypeText}>{item.title}</Text>
                    </View>
                    {index < AllVehiclesList.length - 1 && (
                      <View style={styles.divider}></View>
                    )}
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </Modal>
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
          <View style={{flexDirection:'row', padding:30, paddingTop:heightPercentageToDP(5)}}>
            <TouchableOpacity onPress={openCamera} style={{alignItems:'center'}}>
              <CameraIcon />
              <Text style={styles.PickerText}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openImagePicker} style={{alignItems:'center', marginLeft:widthPercentageToDP(20)}}>
              <GalleryIcon />
              <Text style={styles.PickerText}>Gallery</Text>
            </TouchableOpacity>
          </View>
      </RBSheet>
      
    </View>
  );
};

export default DriverEditProfile;
