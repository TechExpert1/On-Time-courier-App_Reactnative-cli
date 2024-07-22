import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Flag, NotificationIcon } from '../../../Assets/Svgs';
import CustomButton from '../../../Components/CustomButton';
import { PRIMARY, WHITE } from '../../../Theme/Colors';
import { useNavigation } from '@react-navigation/native';

const ProjectRejected = () => {
    const navigation = useNavigation<any>();
    const handleContinueButton = () => {
        navigation.navigate('RequestSubmit',{status:'1'});
      };
    return (
        <View style={styles.body}>
          <View style={styles.appBarStyle}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../../Assets/Images/UserProfile.png')}></Image>
              <View style={{marginLeft: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.helloText}>Hello!👋</Text>
                  <View style={{marginTop: 5, marginLeft: 5}}>
                    <Flag></Flag>
                  </View>
                </View>
                <Text style={styles.name}>Robert Smith</Text>
              </View>
            </View>
            <TouchableOpacity
            //    onPress={handleNotifictionNavigation}
            >
              <NotificationIcon></NotificationIcon>
            </TouchableOpacity>
          </View>
          <View
            style={styles.content}>
            <Image
              style={styles.imageStyle}
              source={require('../../../Assets/Images/crossImageReject.png')}></Image>
               <Text style={styles.ONTIMECOURIER}>Sorry!</Text>
              <Text style={styles.contentText
              }>Sorry!
              Your profile has rejected by the admin.
              Please resubmit your details.</Text>
             
          </View>
          <CustomButton
          text="Resubmit"
          onPress={handleContinueButton}
          TextStyle={{color: WHITE}}
          extraStyle={{
            marginTop: 90,
          
            backgroundColor: PRIMARY,
          }}
        />
        </View>
      );
}

export default ProjectRejected
