import {StyleSheet} from 'react-native';
// import {COLORS} from '.';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {COLORS} from './Index';

export const MainStyle = StyleSheet.create({
  flex_parent: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: widthPercentageToDP(3.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  Primary_Parent: {
    flex: 1,
    backgroundColor: COLORS.BG_COLOR,
    alignItems: 'center',
    paddingVertical: heightPercentageToDP(4.5),
  },
  default_style: {
    flex: 1,
    backgroundColor: COLORS.BG_COLOR,
    alignItems: 'center',
    paddingHorizontal: widthPercentageToDP(3),
    paddingTop: heightPercentageToDP(4),
  },
  flex_center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  between: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  around: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  flex_between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  //   flex_align: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //   },
  //   main_flex: {
  //     justifyContent: 'space-between',
  //     alignItems: 'center',
  //     flex: 1,
  //     paddingVertical: heightPercentageToDP(3.5),
  //     backgroundColor: COLORS.BG_COLOR,
  //   },
  //   main_flex_one: {
  //     alignItems: 'center',
  //     flex: 1,
  //     paddingVertical: heightPercentageToDP(3),
  //     backgroundColor: COLORS.BG_COLOR,
  //   },

  //   shadow: {
  //     shadowColor: '#000000',
  //     shadowOffset: {
  //       width: 0,
  //       height: 3,
  //     },
  //     shadowOpacity: 0.17,
  //     shadowRadius: 3.05,
  //     elevation: 4,
  //   },
});
