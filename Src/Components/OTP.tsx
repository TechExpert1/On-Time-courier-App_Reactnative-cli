import React, {useState} from 'react';
import {StyleSheet, View, Text, Keyboard, TouchableOpacity} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {BG_COLOR, PRIMARY, TEXTCOLOR, WHITE} from '../Theme/Colors';
import {fonts} from '../Theme/AppFonts';
import OTPTextInput from 'react-native-otp-textinput';
import {widthPercentageToDP} from 'react-native-responsive-screen';
type NavType = {
  NewPassword: undefined;
};
type NavProp = NavigationProp<NavType>;
const CELL_COUNT = 4;
const EnterOTP = ({otp, setOTP}) => {
  const navigation = useNavigation<NavProp>();
  const [value, setValue] = useState('');
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});

  return (
    <View style={{alignSelf: 'center'}}>
      <OTPTextInput
        {...props}
        handleTextChange={setOTP}
        inputCount={CELL_COUNT}
        textInputStyle={styles.cell}
        tintColor={PRIMARY}
        offTintColor={'rgba(234, 234, 234, 0.5)'}
        autoFocus={true}
        keyboardType="number-pad"
      />
    </View>
  );
};
export default EnterOTP;

const styles = StyleSheet.create({
  cell: {
    width: 64,
    height: 50,
    alignSelf: 'center',
    borderWidth: 0.5,
    backgroundColor: WHITE,
    borderRadius: 8,
    borderBottomWidth: widthPercentageToDP(0.3),
    marginHorizontal: 12,
    marginTop: 40,
  },

  textStyle: {
    fontSize: 20,
    fontFamily: fonts.MontserratMedium,
    lineHeight: 22.8,
    color: TEXTCOLOR,
  },
});
