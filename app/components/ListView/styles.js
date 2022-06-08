import {StyleSheet} from 'react-native';
import PixelRatio from 'react-native/Libraries/Utilities/PixelRatio';

export const styles = StyleSheet.create({
  columnWrapper: {
    flex: 1 / 3,
    paddingBottom: 90 / PixelRatio.get(),
    alignSelf: 'flex-start',
  },
});
