import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {fonts} from '../Theme/AppFonts';
import {BLACK, TEXTCOLOR} from '../Theme/Colors';

type MyComponentProps = {
  label: string;
  icon?: any;
  extraStyle?:any,
  onPress?: () => void;
};

const InputLabel: React.FC<MyComponentProps> = props => {
  return (
    <View style={[styles.container,props.extraStyle]}>
      <Text style={styles.textStyle}>{props.label}</Text>
      {props.icon != null ? (
        <TouchableOpacity
          onPress={props.onPress}
          style={[styles.imageContainer, {width: props.icon ? 30 : 0}]}>
          {props.icon}
        </TouchableOpacity>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default InputLabel;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: '5%',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fonts.MontserratBold,
    color: TEXTCOLOR,
  },
  iconStyle: {
    marginRight: '3%',
  },
  imageContainer: {
    height: 14,
    width: 14,
  },
});
