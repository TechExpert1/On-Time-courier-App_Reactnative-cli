import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {BackIcon, EyeHide, EyeShow} from '../../Assets/Svgs';
import InputLabel from '../../Components/InputLabel';
import InputText from '../../Components/InputText';
import CustomButton from '../../Components/CustomButton';
import {PRIMARY, WHITE} from '../../Theme/Colors';
import {fonts} from '../../Theme/AppFonts';

const DeleteAccountScreen = () => {
  const navigation = useNavigation<any>();
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [deleteAccount, setDeleteAccount] = useState(false);

  const handlePassword = txt => {
    setPassword(txt);
  };
  const handlePasswordVisible = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  const handleContinueButton = () => {
    navigation.navigate('Splash');
  };

  return (
    <View style={styles.body}>
      <View style={styles.appBarStyle}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon></BackIcon>
          </TouchableOpacity>
          <Text style={styles.TitleName}>Delete Account</Text>
          <View></View>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.contentText}>
          This action is permanent and will erase all of your data, including
          Order Details, Chats & Personal Information.
        </Text>
        <Text style={styles.passwordToContinue}>
          Enter you password to continue.
        </Text>
        <InputLabel label="Password" />
        <InputText
          placeholder="Password"
          value={password}
          onChange={handlePassword}
          onRightPress={handlePasswordVisible}
          secureTextEntry={isPasswordHidden}
          addRight={
            isPasswordHidden ? <EyeHide></EyeHide> : <EyeShow></EyeShow>
          }
        />

        <CustomButton
          text="Continue"
          onPress={() => setDeleteAccount(true)}
          TextStyle={{color: WHITE}}
          extraStyle={{
            marginTop: 180,
            backgroundColor: PRIMARY,
          }}
        />
      </View>

      <Modal
        transparent={true}
        visible={deleteAccount}
        animationType="slide"
        onRequestClose={() => setDeleteAccount(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.CanclePopupTitle}>
              {'You are attempting to Delete account.'}
            </Text>
            <Text style={styles.CanclePopupText}>Are you sure?</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // alignContent: 'space-between',
                alignItems: 'center',
                marginTop: 40,
              }}>
              <TouchableOpacity
                style={{width: '50%'}}
                onPress={() => setDeleteAccount(false)}>
                <Text style={styles.NoText}>Cancel</Text>
              </TouchableOpacity>
              <CustomButton
                text="Delete"
                onPress={handleContinueButton}
                TextStyle={{
                  color: WHITE,
                  fontSize: 16,
                  fontFamily: fonts.MontserratBold,
                }}
                extraStyle={{
                  width: '50%',
                  marginRight: 30,
                  backgroundColor: PRIMARY,
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DeleteAccountScreen;
