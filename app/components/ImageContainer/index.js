/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Image, Text} from 'react-native';

import Icons from '../../assets/images';
import Images from '../../assets/backendImages';
import {styles} from './styles';

// Image container component for showing images with name in list view
const ImageContainer = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1 / 3}}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={Images[item['poster-image']]}
          defaultSource={Icons.placeholder}
        />
      </View>
      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text}>
        {item.name}
      </Text>
    </View>
  );
};

export default ImageContainer;
