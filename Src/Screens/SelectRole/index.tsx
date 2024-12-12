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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const SelectRole = () => {
  const navigation = useNavigation<any>();
  const [selectedRole, setSelectedRole] = useState();
  const UserRole = 'UserRole';

  const handleSelectRole = (index: any) => {
    setSelectedRole(index);
  };

  const handleContinueButton = async () => {
    if (selectedRole != null) {
      if (selectedRole === 0) {
        const userrole = await AsyncStorage.getItem(UserRole);
        console.log(userrole);
        await AsyncStorage.setItem(UserRole, 'customer');
        navigation.navigate('CustomerRegister', {
          selectedRole: selectedRole === 0 ? 'customer' : 'driver',
        });
      } else {
        await AsyncStorage.setItem(UserRole, 'driver');
        const userrole = await AsyncStorage.getItem(UserRole);
        console.log(userrole);
        navigation.navigate('DriverRegister', {
          selectedRole: selectedRole === 0 ? 'customer' : 'driver',
        });
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

       <View style={{flexDirection:'row', justifyContent:'space-between'}}>
       <TouchableOpacity
                onPress={() => handleSelectRole(0)}
                style={[
                  styles.roleBox,
                  {
                    backgroundColor:
                      selectedRole === 0 ? PRIMARY : GREYCOLOR_I,
                  },
                ]}>
                <Image
                  style={styles.roleImageStyle}
                  source={ require('../../Assets/Images/customer.png')}></Image>
                <Text
                  style={[
                    styles.roleText,
                    {color: selectedRole === 0 ? WHITE : GREYCOLOR_II},
                  ]}>
                  {'Customer'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleSelectRole(1)}
                style={[
                  styles.roleBox,
                  {
                    backgroundColor:
                      selectedRole === 1 ? PRIMARY : GREYCOLOR_I,
                  },
                ]}>
                <Image
                  style={styles.roleImageStyle}
                  source={require('../../Assets/Images/driver.png')}></Image>
                <Text
                  style={[
                    styles.roleText,
                    {color: selectedRole === 1 ? WHITE : GREYCOLOR_II},
                  ]}>
                  {'Driver'}
                </Text>
              </TouchableOpacity>
        </View> 
        {/* <FlatList
          data={roleList}
          contentContainerStyle={{alignItems: 'center'}}
          scrollEnabled={false}
          horizontal={true}
          ItemSeparatorComponent={() => (
            <View style={{width: widthPercentageToDP(10)}}></View>
          )}
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
        /> */}
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
