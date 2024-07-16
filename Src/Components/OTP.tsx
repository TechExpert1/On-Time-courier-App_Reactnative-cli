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
    <View>
      {/* <Headers Onpres={() => navigation.goBack()} />
      <ForgotPasswordTitle title="Enter the OTP sent to you" /> */}
      <View style={styles.BoxContainer}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={text => {
            setValue(text);
            setOTP(text);
            if (text.length === CELL_COUNT) {
              Keyboard.dismiss();
            }
          }}
          // textInputStyle={styles.textStyle}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>
    </View>
  );
};
export default EnterOTP;

const styles = StyleSheet.create({
  MainCOntainer: {
    backgroundColor: WHITE,
    height: 50,
  },
  codeFieldRoot: {
    // marginTop: "5%",
  },
  cell: {
    width: 50,
    height: 50,
    fontSize: 20,
    // fontWeight: 'bold',
    borderWidth: 1,
    fontFamily: fonts.MontserratMedium,
    borderColor: 'rgba(234, 234, 234, 1)',
    backgroundColor: WHITE,
    borderRadius: 8,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: TEXTCOLOR,
    paddingHorizontal: 12,
    marginHorizontal: 12,
    marginTop: 40,
    lineHeight: 50,
  },
  focusCell: {
    borderColor: PRIMARY,
  },
  BoxContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 20,
    fontFamily: fonts.MontserratSemiBold,
    lineHeight: 22.8,
    color: TEXTCOLOR,
  },
});
