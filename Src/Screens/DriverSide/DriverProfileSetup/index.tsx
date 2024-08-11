import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import AppBar from '../../../Components/AppBar';
import InputLabel from '../../../Components/InputLabel';
import InputText from '../../../Components/InputText';
import {AddIcon, ArrowDown, RedCrossIcon} from '../../../Assets/Svgs';
import {AllVehiclesList, VehiclesList} from '../../../utils/constant';
import CustomButton from '../../../Components/CustomButton';
import {PRIMARY, WHITE} from '../../../Theme/Colors';
import {useNavigation} from '@react-navigation/native';

const DriverProfileSetup = props => {
  const {status} = props.route.params;
  const navigation = useNavigation<any>();
  const [selectVehicle, setSelectVehicle] = useState('');
  const [selectedVehicleType, setSelectedVehicleType] = useState(null);
  const [selectedVehicleName, setSelectedVehiceName] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [SelectVehicleModel, setVehicleModel] = useState(false);

  const handleContinueButton = () => {
    if (status === '1') {
      navigation.navigate('RequestSubmit',{ status:'1'});
    } else {
      navigation.navigate('RequestSubmit', {status: '0'});
    }
  };

  const hanldeSelectVehicle = txt => {
    setSelectVehicle(txt);
  };

  const hanldePlateNumber = txt => {
    setPlateNumber(txt);
  };
  return (
    <View style={styles.body}>
      <AppBar text="Profile Setup"></AppBar>
      <View style={styles.content}>
        <Text>Enter your details please.</Text>
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
            <TouchableOpacity onPress={()=>setVehicleModel(true)} style={{marginTop:20,marginLeft:-25}}><ArrowDown></ArrowDown></TouchableOpacity>
          </View>
        )}

        <InputLabel label="License Plate Number" />
        <InputText
          placeholder="Plate Number"
          onChangeText={hanldePlateNumber}
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
        <CustomButton
          text="Continue"
          onPress={handleContinueButton}
          TextStyle={{color: WHITE}}
          extraStyle={{
            marginTop: 150,
            backgroundColor: PRIMARY,
          }}
        />
      </View>

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
    </View>
  );
};

export default DriverProfileSetup;
