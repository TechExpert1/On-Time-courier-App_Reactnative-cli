import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import AppBar from '../../../Components/AppBar';
import {BackIcon, GONextBox, LocationSearching} from '../../../Assets/Svgs';
import InputText from '../../../Components/InputText';
import MapView from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';

const TrackingParcel = () => {
  const navigation = useNavigation<any>();
  const [searchedId, setSearchedId] = useState('4753');
  const hanldeTrackingId = txt => {
    setSearchedId(txt);
  };

  const handleGoNext = () => {
    navigation.navigate('TrackingParcelDetail');
  };
  return (
    <View style={styles.body}>
      <AppBar text="Tracking Parcel" leftIcon={<BackIcon></BackIcon>} OnLeftPress={()=> navigation.goBack()}></AppBar>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <InputText
          placeholder="Enter tracking ID"
          value={searchedId}
          onChange={hanldeTrackingId}
          // onLeftPress={handleTrackingId}
          extraStyle={{width: '80%', marginTop: '0%'}}
          addLeft={<LocationSearching></LocationSearching>}></InputText>
        <TouchableOpacity onPress={handleGoNext}>
          <GONextBox></GONextBox>
        </TouchableOpacity>
      </View>
      <MapView
        style={{width: '100%', height: '100%', marginTop: 20}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>
    </View>
  );
};

export default TrackingParcel;
