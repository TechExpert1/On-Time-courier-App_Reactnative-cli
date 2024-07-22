import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import AppBar from '../../../../Components/AppBar';
import {ArrowDown, BackIcon, InfoIcon} from '../../../../Assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import InputLabel from '../../../../Components/InputLabel';
import InputText from '../../../../Components/InputText';
import CustomButton from '../../../../Components/CustomButton';
import {
  BORDERCOLOR,
  DARKGREYCOLOR,
  LIGHT_GREEN_I,
  PLACEHOLDERCOLOR,
  PRIMARY,
  WHITE,
} from '../../../../Theme/Colors';
import {RadioButton} from 'react-native-paper';
import {ParcelType, VehiclesList} from '../../../../utils/constant';


const RegularDeliveryParcelDetail = () => {
  const navigation = useNavigation<any>();
  const [parcelType, setParcelType] = useState('');
  const [parcelWeight, setParcelWeight] = useState('');
  const [boxHeight, setBoxHeight] = useState('');
  const [boxWidth, setBoxWidth] = useState('');
  const [other, setOther] = useState('');
  const [checked, setChecked] = React.useState('first');
  const [isDriver, setIsDriver] = useState(true);
  const [ParcelModel, setParcelModel] = useState(false);


  useEffect(() => {
    console.log(isDriver);
    const timer = setTimeout(() => {
      setIsDriver(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  const handleNextButton = () => {
    if (isDriver) {
      navigation.navigate('Checkout');
    } else {
    }
  };

  const handleParcelType = txt => {
    setParcelType(txt);
  };
  const handleParcelWeight = txt => {
    setParcelWeight(txt);
  };
  const handleBoxHeight = txt => {
    setBoxHeight(txt);
  };
  const handleOther = txt => {
    setOther(txt);
  };
  const handleBoxWidth = txt => {
    setBoxWidth(txt);
  };
  return (
    <View style={styles.body}>
      <AppBar
        text="Regular Delivery"
        leftIcon={<BackIcon></BackIcon>}
        OnLeftPress={() => navigation.goBack()}></AppBar>

      <ScrollView style={styles.content}>
        <Text style={styles.headingStyle}>Parcel Details</Text>

        <InputLabel label="Parcel Type" />
        <InputText
          placeholder="Parcel Type"
          onChange={handleParcelType}
          addRight={<ArrowDown></ArrowDown>}
          readonly={true}
          onRightPress={() => setParcelModel(true)}
          value={parcelType}
        />

        <InputLabel label="Parcel Weight" />
        <InputText
          placeholder="0"
          type={'numeric'}
          onChange={handleParcelWeight}
          addRight={<Text>lbs</Text>}
          value={parcelWeight}
        />

        <InputLabel label="Box Size" />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.InputTextBox}>
            <TextInput
              placeholder="Height"
              placeholderTextColor={PLACEHOLDERCOLOR}
              onChange={handleBoxHeight}
              value={boxHeight}
            />

            <Text style={styles.ft}>ft</Text>
          </View>
          <View style={styles.InputTextBox}>
            <TextInput
              placeholder="Width"
              placeholderTextColor={PLACEHOLDERCOLOR}
              onChange={handleBoxWidth}
              value={boxWidth}
            />
            <Text style={styles.ft}>ft</Text>
          </View>
        </View>
        <Text style={[styles.headingStyle, {marginTop: 20, marginBottom: 10}]}>
          Tip
        </Text>
        <View style={styles.rowCenter}>
          <RadioButton
            value="first"
            color={PRIMARY}
            uncheckedColor="rgba(227, 227, 227, 1)"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <Text style={styles.TIPStyle}>$5</Text>
        </View>
        <View style={styles.rowCenter}>
          <RadioButton
            value="second"
            color={PRIMARY}
            uncheckedColor="rgba(227, 227, 227, 1)"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
          <Text style={styles.TIPStyle}>$10</Text>
        </View>
        <View style={styles.rowCenter}>
          <RadioButton
            value="third"
            color={PRIMARY}
            uncheckedColor="rgba(227, 227, 227, 1)"
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('third')}
          />
          <Text style={styles.TIPStyle}>$15</Text>
        </View>
        <View style={styles.rowCenter}>
          <RadioButton
            value="other"
            color={PRIMARY}
            uncheckedColor="rgba(227, 227, 227, 1)"
            status={checked === 'other' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('other')}
          />
          <InputText
            placeholder="Other"
            onChange={handleOther}
            // addRight={<Text>ft</Text>}
            extraStyle={{width: '45%', marginTop: 0}}
            //   addRight={<PickupAddress></PickupAddress>}
            value={other}
          />
        </View>
        <Text style={[styles.headingStyle, {marginTop: 20, marginBottom: 14}]}>
          Available Vehicles
        </Text>
        {isDriver ? (
          <FlatList
            data={VehiclesList}
            renderItem={({item, index}) => {
              return (
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <Image source={item.image}></Image>
                  <View style={{marginLeft: 16}}>
                    <Text style={styles.TitleStyle}>{item.title}</Text>
                    <Text style={styles.AvailabilityStyle}>
                      {item.available}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        ) : (
          <View>
            <Text style={styles.sorryText}>
              Sorry! Vehicles are not available for this parcel
            </Text>
          </View>
        )}
        <View
          style={[
            styles.InfoBox,
            {
              backgroundColor: isDriver
                ? LIGHT_GREEN_I
                : 'rgba(236, 236, 236, 1)',
            },
          ]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <InfoIcon></InfoIcon>
            <Text style={styles.totalCharges}>Out of city charges</Text>
          </View>

          <View>
            <Text style={styles.paymentPrice}>CAD 5/Km</Text>
          </View>
        </View>
        {isDriver ? (
          <View>
            <View style={styles.container}>
              <Text style={styles.leftTextStyle}>Shipment Charges</Text>
              <Text style={[styles.RightTextStyle]}>CAD 40/-</Text>
            </View>

            <View style={styles.container}>
              <Text style={styles.leftTextStyle}>Taxes (GST+PST)</Text>
              <Text style={[styles.RightTextStyle]}>12%</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.leftTextStyle}>Tip</Text>
              <Text style={[styles.RightTextStyle]}>CAD 5/-</Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.leftTextStyle}>Total Charges</Text>
              <Text style={[styles.RightTextStyle]}>CAD 52.2/-</Text>
            </View>
          </View>
        ) : (
          <View></View>
        )}
        <CustomButton
          text="Confirm"
          onPress={handleNextButton}
          TextStyle={{color: isDriver ? WHITE : DARKGREYCOLOR}}
          extraStyle={{
            marginTop: 24,
            marginBottom: 70,
            backgroundColor: isDriver ? PRIMARY : 'rgba(229, 229, 229, 1)',
          }}
        />
      </ScrollView>

      <Modal
        transparent={true}
        visible={ParcelModel}
        animationType="slide"
        onRequestClose={() => setParcelModel(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={ParcelType}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setParcelModel(false);
                      setParcelType(item.title + item.spantitle);
                    }}>
                    <Text style={styles.parcelTypeText}>
                      {item.title}{' '}
                      <Text style={styles.parcelTypeTextSpan}>
                        {item.spantitle}
                      </Text>
                    </Text>
                    {index < ParcelType.length - 1 && <View style={styles.divider}></View>}
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

export default RegularDeliveryParcelDetail;
