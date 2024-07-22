import React from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  StatusBar,
} from 'react-native';
import {BLACK, BORDERCOLOR, TEXTCOLOR, WHITE_I} from '../Theme/Colors';
import {fonts} from '../Theme/AppFonts';
import {ArrowForward} from '../Assets/Svgs';

type MyComponentProps = {
  Title: string;
  leftIcon?: any;
  OnTap?: any;
};

const ProfileTab: React.FC<MyComponentProps> = props => {
  return (
    <TouchableOpacity onPress={props.OnTap} style={styles.ProfileTab}>
      {props.leftIcon}
      <View style={styles.MessageContentContainer}>
        <View style={{alignContent: 'center', marginLeft: 10}}>
          <Text style={styles.NotificationTitle}>{props.Title}</Text>
        </View>
      </View>
      <ArrowForward></ArrowForward>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ProfileTab: {
    height: 64,
    borderRadius: 10,
    borderColor: BORDERCOLOR,
    borderWidth: 1,
    backgroundColor: WHITE_I,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginTop: 14,
  },

  MessageContentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  NotificationTitle: {
    fontSize: 14,
    fontFamily: fonts.MontserratBold,
    color: TEXTCOLOR,
    lineHeight: 17.07,
  },
});
export default ProfileTab;
