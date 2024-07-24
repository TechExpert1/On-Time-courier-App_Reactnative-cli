import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
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
  CIINFO,
  EditProfile,
  RedCrossIcon,
} from '../../../Assets/Svgs';
import InputLabel from '../../../Components/InputLabel';
import InputText from '../../../Components/InputText';
import CustomButton from '../../../Components/CustomButton';
import {PRIMARY, TEXTCOLOR, WHITE} from '../../../Theme/Colors';
import styles from './styles';
import {AllVehiclesList} from '../../../utils/constant';
import { fonts } from '../../../Theme/AppFonts';

const DriverEditProfile = () => {
  const navigation = useNavigation<any>();
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [addrss, setAddress] = useState('');
  const [SelectVehicleModel, setVehicleModel] = useState(false);
  const [selectVehicle, setSelectVehicle] = useState('');

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
    navigation.navigate('DriverBottomTab');
  };

  const hanldePlateNumber = txt => {
    setPlateNumber(txt);
  };

  const hanldeSelectVehicle = txt => {
    setSelectVehicle(txt);
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
          <EditProfile></EditProfile>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <InputLabel label="Full Name" />
        <InputText
          placeholder="Full Name"
          onChange={handleFullName}
          value={fullName}
        />
        <InputLabel label="Phone #" />
        <InputText
          placeholder="Phone #"
          type={'numeric'}
          onChange={handlePhonNumber}
          value={phoneNumber}
        />
        <InputLabel label="Address" />
        <InputText
          placeholder="Address"
          onChange={handleAddrss}
          value={addrss}
        />
        <InputLabel label="Vehicle" />
        <InputText
          placeholder="Select Vehicle"
          addRight={<ArrowDown></ArrowDown>}
          readonly={true}
          onChange={hanldeSelectVehicle}
          onRightPress={() => setVehicleModel(true)}
          value={selectVehicle}
        />

        <InputLabel label="License Plate Number" />
        <InputText
          placeholder="Plate Number"
          onChange={hanldePlateNumber}
          value={plateNumber}
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
          <Text style={{width:292, fontFamily:fonts.MontserratRegular, color:TEXTCOLOR, fontSize:14, marginLeft:2}}>
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
    </View>
  );
};

export default DriverEditProfile;
