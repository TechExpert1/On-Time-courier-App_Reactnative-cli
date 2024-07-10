import React from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {BLACK, PRIMARY, WHITE} from '../Theme/Colors';

type MyComponentProps = {
  onPress?: any;
  extraStyle?: any;
  TextStyle?: any;
  rightIconStyle?: any;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  text?: string;
  disabled?: boolean;
};

const CustomButton: React.FC<MyComponentProps> = props => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.onPress}
      style={[styles.buttonStyle, props.extraStyle]}>
         {props.leftIcon != null ? (
        <View
          style={[
            styles.imageLeftContainer,
            props.rightIconStyle,
            {width: props.leftIcon ? 20 : 0},
          ]}>
          {props.leftIcon}
        </View>
      ) : (
        <View></View>
      )}
      <Text style={[styles.textStyle, props.TextStyle]}>{props.text}</Text>
      {props.rightIcon != null ? (
        <View
          style={[
            styles.imageContainer,
            props.rightIconStyle,
            {width: props.rightIcon ? 20 : 0},
          ]}>
          {props.rightIcon}
        </View>
      ) : (
        <View></View>
      )}
    </TouchableOpacity>
  );
};
export default CustomButton;

const styles = StyleSheet.create({
  buttonStyle: {
    color: WHITE,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    backgroundColor: PRIMARY,
    borderRadius: 8,
  },
  textStyle: {
    fontSize: 16,
    color: WHITE,
    alignItems:'center',
    alignSelf:'center',
    // fontFamily: fonts.SFProTextSemibold,
    lineHeight: 19.6,
  },
  imageContainer: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: '4%',
    marginLeft: '3%',
  },
  imageLeftContainer: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems:'center',
    // marginVertical: '4%',
    marginRight: '3%',
  },
});
