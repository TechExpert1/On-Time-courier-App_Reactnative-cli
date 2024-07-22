import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { BackIcon } from '../../Assets/Svgs';

const TermsAndCondition = () => {
    const navigation = useNavigation<any>();
    return (
      <View style={styles.body}>
      <View style={styles.appBarStyle}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon></BackIcon>
          </TouchableOpacity>
          <Text style={styles.TitleName}>Terms & Conditions</Text>
          <View></View>
        </View>
      </View>
  
      <View style={styles.content}>
        <Image style={styles.ImageStyle} source={require('../../Assets/Images/app_logo.png')}></Image>
        <Text style={styles.contentText}>{'Lorem ipsum dolor sit amet consectetur. Varius duis tellus donec felis auctor. Non viverra dictumst sapien id id consequat fringilla tincidunt. Sit in amet sed in id morbi enim pharetra. Neque nibh dignissim dictum integer gravida. Tortor consectetur risus neque volutpat.'}</Text>
        <Text style={styles.contentText}>{'Mauris blandit phasellus a bibendum sit neque morbi viverra vitae. Elementum sem sit quis risus nisl lorem orci amet malesuada. Faucibus cursus quam quisque ut quam sed. Quis lectus dui vel suspendisse duis sit cursus amet. Pellentesque dictum bibendum gravida viverra morbi justo.'}</Text>
        <Text style={styles.contentText}>{'Mauris blandit phasellus a bibendum sit neque morbi viverra vitae. Elementum sem sit quis risus nisl lorem orci amet malesuada. Faucibus cursus quam quisque ut quam sed. Quis lectus dui vel suspendisse duis sit cursus amet. Pellentesque dictum bibendum gravida viverra morbi justo.'}</Text>
      </View>
    </View>
    )
}

export default TermsAndCondition
