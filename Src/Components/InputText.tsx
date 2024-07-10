import React, {useState} from 'react';
import {Image, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import { BORDERCOLOR, PLACEHOLDERCOLOR, TEXTCOLOR, WHITE } from '../Theme/Colors';

type MyComponentProps = {
  placeholder?: string;
  placeholderTextColor?:any,
  TextStyle?:any,
  value?: string;
  onChange?: any;
  secureTextEntry?: boolean;
  addLeft?: React.ReactNode;
  addRight?: React.ReactNode;
  onRightPress?: any;
  onLeftPress?:any;
  ref?: any;
  borderWidth?: any;
  readonly?:any;
  extraStyle?: any;
  rightIconStyle?: any;
  type?: any;
  multiline?: boolean;
};

const InputText: React.FC<MyComponentProps> = props => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <View
      style={[
        styles.container,
        {borderWidth: props.borderWidth ?? 1, borderColor: BORDERCOLOR},
        props.extraStyle,
      ]}>
      {props.addLeft != null ? (
        <TouchableOpacity onPress={props.onLeftPress} style={[styles.imageLeftContainer, {width: props.addLeft ? 20 : 0}]}>
          {props.addLeft}
        </TouchableOpacity>
      ) : (
        <View></View>
      )}
      <TextInput
        placeholderTextColor={props.placeholderTextColor ?? PLACEHOLDERCOLOR}
        ref={props.ref}
        aria-label=""
        style={[styles.text, props.TextStyle]}
        placeholder={props.placeholder}
        value={props.value}
        multiline={props.multiline ?? false}
        readOnly={props.readonly ?? false}
        onChangeText={props.onChange}
        onFocus={handleFocus} // Handle focus event
        onBlur={handleBlur} // Handle blur event
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.type}
      />
      {props.addRight != null ? (
        <TouchableOpacity
        onPress={props.onRightPress}
          style={[
            styles.imageContainer,
            props.rightIconStyle,
            {width: props.addRight ? 30 : 0},
          ]}>
          {props.addRight}
        </TouchableOpacity>
      ) : (
        <View></View>
      )}
    </View>
  );
};
export default InputText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: WHITE,
    marginTop: '2%',
    height: 55,
    borderColor: BORDERCOLOR,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    padding: 5,
    width: 280,
    paddingLeft: '5%',
    color: TEXTCOLOR,
    // borderWidth:1
  },
  imageLeftContainer: {
    height: 24,
    width:24,
    justifyContent:'center',
    alignSelf:'center',
    marginLeft:"2%"
  },
  imageContainer: {
    height: 24,
    width:24,
    justifyContent:'center',
    alignSelf:'center',
    marginVertical:"4%"
  },
});
