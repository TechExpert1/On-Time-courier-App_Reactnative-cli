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
import Toast from 'react-native-toast-message';
import {deleteUserAPI} from '../../Services/apis/authAPIs';
import LoadingModal from '../../Components/LoadingModal';

const DeleteAccountScreen = () => {
  const navigation = useNavigation<any>();
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [visible, setVisible] = useState(false);

  const handlePassword = txt => {
    setPassword(txt);
  };
  const handlePasswordVisible = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  const handleContinueButton = () => {
    setDeleteAccount(false);
    setTimeout(async () => {
      setVisible(true);
      try {
        const result = await deleteUserAPI();
        console.log('🚀 ~ handleContinueButton ~ result:', result?.data);
        setVisible(false);
        if (result) {
          Toast.show({
            type: 'success',
            text1: 'Delete Account',
            text2: 'Account deleted successfully',
            visibilityTime: 3000,
          });
          navigation.navigate('CustomerLogin');
        }
      } catch (error) {
        setVisible(false);
        if (error?.response?.data?.JWTErr?.message) {
          Toast.show({
            type: 'error',
            text1: 'Token Error',
            text2: error?.response?.data?.JWTErr?.message,
            visibilityTime: 3000,
          });
        }
        console.log(
          '🚀 ~ handleContinueButton ~ error:',
          error?.response?.data,
        );
      }
    }, 300);
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
          Enter your password to continue.
        </Text>
        <InputLabel label="Password" />
        <InputText
          placeholder="Password"
          value={password}
          onChangeText={handlePassword}
          onRightPress={handlePasswordVisible}
          secureTextEntry={isPasswordHidden}
          addRight={
            isPasswordHidden ? <EyeHide></EyeHide> : <EyeShow></EyeShow>
          }
        />

        <CustomButton
          text="Continue"
          onPress={() => {
            if (password?.length === 0) {
              Toast.show({
                type: 'error',
                text1: 'Delete Account Error',
                text2: 'Password field is required.',
                visibilityTime: 3000,
              });
              return;
            } else if (password !== 'qwerty123@') {
              Toast.show({
                type: 'error',
                text1: 'Delete Account Error',
                text2: 'Incorrect password, please try again',
                visibilityTime: 3000,
              });
              return;
            } else {
              setDeleteAccount(true);
            }
          }}
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
        animationType="fade"
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
      <LoadingModal visible={visible} message={'Deleting account...'} />
    </View>
  );
};

export default DeleteAccountScreen;
