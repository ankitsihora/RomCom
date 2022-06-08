/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import {styles} from './styles';

// Home screen
const Home = ({navigation}) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Romantic')}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;
