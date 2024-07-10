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
import {BLACK, BORDERCOLOR, DARKGREYCOLOR, TEXTCOLOR} from '../Theme/Colors';
import {fonts} from '../Theme/AppFonts';

type MyComponentProps = {
  title: string;
  value: string;
  isDivider?: boolean;
  rightStyle?:any;
};

const InfoLine: React.FC<MyComponentProps> = props => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.leftTextStyle}>{props.title}</Text>
        <Text style={[styles.RightTextStyle, props.rightStyle]}>{props.value}</Text>
      </View>
      {props.isDivider ? <View style={styles.divider}></View> : <View></View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    alignItems: 'center',
  },
  divider: {
    width: '100%',
    borderWidth: 1,
    borderColor: BORDERCOLOR,
    paddingHorizontal: 20,
    marginTop: 15,
  },
  leftTextStyle: {
    fontSize: 14,
    fontFamily: fonts.MontserratMedium,
    color: DARKGREYCOLOR,
    lineHeight: 21.94,
  },
  RightTextStyle: {
    width: 120,
    fontSize: 14,
    fontFamily: fonts.MontserratBold,
    color: TEXTCOLOR,
    lineHeight: 21.94,
  },
});
export default InfoLine;
