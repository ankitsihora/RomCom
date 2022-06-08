/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import colors from './app/utils/colors';

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView
          forceInset={{top: 'always'}}
          style={styles.container}></SafeAreaView>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  headerContainer: {
    height: 45,
    flexDirection: 'row',
  },
  headerTxt: {
    color: colors.white,
  },
});
