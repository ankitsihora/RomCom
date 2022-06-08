/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import ListView from '../../components/ListView';
import {styles} from './styles';

// Romantic comedy screen
const Romantic = props => {
  return (
    <SafeAreaProvider>
      <SafeAreaView forceInset={{top: 'always'}} style={styles.container}>
        <ListView listProps={props} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Romantic;
