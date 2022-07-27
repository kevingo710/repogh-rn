import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { TouchableWithoutFeedback } from 'react-native-web';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    // ...
  },
  // ...
});

const AppBar = () => {
  return <View style={styles.container}>
    <TouchableWithoutFeedback>
        <Text fontSize={'subheading'} fontWeight={'bold'} color={'textWhite'}>Repositores</Text>
    </TouchableWithoutFeedback>
  </View>;
};

export default AppBar;