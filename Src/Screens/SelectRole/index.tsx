import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {roleList} from '../../utils/constant';
import {
  GREYCOLOR_I,
  GREYCOLOR_II,
  GREYCOLOR_III,
  PRIMARY,
  WHITE,
} from '../../Theme/Colors';
import CustomButton from '../../Components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const SelectRole = () => {
  const navigation = useNavigation<any>();
  const [selectedRole, setSelectedRole] = useState();

  const handleSelectRole = (index: any) => {
    setSelectedRole(index);
  };

  const handleContinueButton = () => {
    if (selectedRole != null) {
      if (selectedRole === 0) {
        navigation.navigate('CustomerRegister', {
          selectedRole: selectedRole === 0 ? 'customer' : 'driver',
        });
      } else {
        navigation.navigate('DriverRegister')
      }
    } else {
      Alert.alert('Select Role', 'Please Select Role', [{text: 'OK'}]);
      return;
    }
  };
  return (
    <View style={styles.body}>
      <Image
        style={styles.headerLogo}
        source={require('../../Assets/Images/HeaderLogo.png')}></Image>
      <View style={styles.content}>
        <Text style={styles.choseYourRoleText}>Choose Your Role</Text>
        <Text style={styles.welcomeText}>
          Welcome to{' '}
          <Text style={styles.welcomeSpanText}>On Time Couriers</Text>
        </Text>
        <FlatList
          data={roleList}
          scrollEnabled={false}
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{width: 12}}></View>}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => handleSelectRole(index)}
                style={[
                  styles.roleBox,
                  {
                    backgroundColor:
                      selectedRole === index ? PRIMARY : GREYCOLOR_I,
                  },
                ]}>
                <Image
                  style={styles.roleImageStyle}
                  source={item.image}></Image>
                <Text
                  style={[
                    styles.roleText,
                    {color: selectedRole === index ? WHITE : GREYCOLOR_II},
                  ]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        <CustomButton
          text="Continue"
          onPress={handleContinueButton}
          TextStyle={{color: selectedRole != null ? WHITE : GREYCOLOR_II}}
          extraStyle={{
            marginTop: 90,
            backgroundColor: selectedRole != null ? PRIMARY : GREYCOLOR_III,
          }}
        />
      </View>
    </View>
  );
};

export default SelectRole;
