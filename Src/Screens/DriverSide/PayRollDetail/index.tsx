import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import AppBar from '../../../Components/AppBar';
import {BackIcon} from '../../../Assets/Svgs';
import CustomButton from '../../../Components/CustomButton';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {COLORS} from '../../../Theme/Index';
import {fonts} from '../../../Theme/AppFonts';

const PayRollDetail = () => {
  const navigation = useNavigation<any>();
  const [isConnected, setIsConnected] = useState(false);

  return (
    <View style={styles.body}>
      <AppBar
        text="Payroll Details"
        leftIcon={<BackIcon></BackIcon>}
        OnLeftPress={() => navigation.goBack()}></AppBar>
      <View style={styles.content}>
        <Text style={styles.accountText}>Account</Text>
        {isConnected ? (
          <View>
            <Text style={styles.AccountNumber}>3455 4562 7710 3507</Text>
            <TouchableOpacity
              onPress={() => setIsConnected(false)}
              style={styles.RemoveStrip}>
              <Text style={styles.removeText}>Remove Stripe</Text>
            </TouchableOpacity>
            <View style={styles.divider}></View>
          </View>
        ) : (
          <View>
            <CustomButton
              onPress={() => {
                setIsConnected(true);
              }}
              text={'Connect Stripe'}
              TextStyle={{
                color: COLORS.PRIMARY,
                fontFamily: fonts.MontserratBold,
              }}
              extraStyle={{
                marginTop: heightPercentageToDP(4),
                backgroundColor: COLORS.PRIMARYHALF,
              }}
            />
          </View>
        )}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: heightPercentageToDP(5),
          }}>
          <View>
            <Text style={styles.normalText}>Last Payout Date</Text>
            <Text style={isConnected ? styles.heading : styles.normalText}>
              {isConnected ? 'June 1, 2024' : '-'}{' '}
            </Text>
          </View>
          <View>
            <Text style={styles.normalText}>Next Payout Date</Text>
            <Text style={styles.heading}>June 15, 2024</Text>
          </View>
        </View>
        <Text style={styles.subheading}>
          {'\u2022 You can request your payout after every 2 '}
          {'  '}
          <Text> weeks.</Text>
        </Text>
        <View style={styles.footer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.normalText}>Total Deliveries</Text>
            <Text style={styles.heading}>10</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: heightPercentageToDP(1.5),
            }}>
            <Text style={styles.normalText}>Total Payout</Text>
            <Text style={styles.heading}>CAD 500</Text>
          </View>
          <CustomButton
            onPress={() => {
              if (isConnected) {
                navigation.navigate('RequestSuccess');
              }
            }}
            text={'Request Payout'}
            TextStyle={{
              color: isConnected ? COLORS.WHITE : COLORS.GREYCOLOR_II,
              fontFamily: fonts.MontserratBold,
            }}
            extraStyle={{
              marginTop: heightPercentageToDP(4),
              backgroundColor: isConnected
                ? COLORS.PRIMARY
                : COLORS.GREYCOLOR_III,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default PayRollDetail;
