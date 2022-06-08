/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {Provider as PaperProvider, Appbar} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';

import Romantic from './app/screens/Romantic';
import HomeScreen from './app/screens/Home';

const Stack = createNativeStackNavigator();
let searchVisible = false;

// main stack screen
function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'My home',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Romantic"
        component={Romantic}
        options={{
          title: 'Romantic Comedy',
          header: props => {
            return CustomNavigationBar(props);
          },
        }}
      />
    </Stack.Navigator>
  );
}

// custom search bar in header
function CustomNavigationBar({navigation, back}) {
  const _handleSearch = () => navigation.setParams({search: !searchVisible});
  return (
    <Appbar.Header style={{backgroundColor: 'black'}}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content
        style={{alignItems: 'flex-start'}}
        title="My awesome app"
      />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
    </Appbar.Header>
  );
}

export default class App extends Component {
  render() {
    return (
      <PaperProvider>
        <NavigationContainer
          theme={{
            dark: true,
            colors: {background: 'black', text: 'white'},
          }}>
          <StackScreen />
        </NavigationContainer>
      </PaperProvider>
    );
  }
}
