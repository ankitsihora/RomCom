import {StyleSheet} from 'react-native';
import PixelRatio from 'react-native/Libraries/Utilities/PixelRatio';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15 / PixelRatio.get(),
  },
  image: {
    flex: 1 / 3,
    height: 175,
    aspectRatio: 2 / 3,
    paddingHorizontal: 15 / PixelRatio.get(),
  },
  text: {
    maxWidth: '100%',
    color: 'white',
    fontFamily: 'TitilliumWeb-Light',
    fontSize: 36 / PixelRatio.get(),
    marginTop: 24 / PixelRatio.get(),
  },
});
