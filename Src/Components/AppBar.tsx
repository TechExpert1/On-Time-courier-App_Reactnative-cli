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
import {BLACK, TEXTCOLOR} from '../Theme/Colors';
import {fonts} from '../Theme/AppFonts';

type MyComponentProps = {
  text: string;
  leftIcon?: any;
  rightIcon?: any;
  OnLeftPress?: () => void;
  OnRightpress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  rightIconStyle?: any;
  leftIconStyle?: any;
};

const AppBar: React.FC<MyComponentProps> = props => {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity onPress={props.OnLeftPress}>
        {<View style={[styles.leftIconStyle]}>{props.leftIcon}</View>}
      </TouchableOpacity>
      <Text style={[styles.textStyle, props.textStyle]}>{props.text}</Text>
      {props.rightIcon ? (
        <TouchableOpacity onPress={props.OnRightpress}>
          {
            <View style={[styles.rightIconStyle, props.rightIconStyle]}>
              {props.rightIcon}
            </View>
          }
        </TouchableOpacity>
      ) : (
        <View style={{width: '5%'}}></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'flex-start',
    paddingTop: '5%',
    // paddingBottom: '5%',
    backgroundColor: 'transparent',
  },
  leftIconStyle: {
    marginLeft: 10,
  },
  rightIconStyle: {
    marginRight: 24,
  },
  textStyle: {
    fontSize: 18,
    fontFamily: fonts.MontserratExtraBold,
    color: TEXTCOLOR,
    lineHeight: 21.94,
  },
});
export default AppBar;
