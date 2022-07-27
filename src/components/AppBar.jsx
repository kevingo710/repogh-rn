import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // ...
  },
  // ...
});

const AppBarTab = ({ active, children, to }) => {
  return (
    <Link to={to}>
      <Text fontSize={'subheading'} fontWeight={'bold'} color={'textWhite'}>
        {children}
      </Text>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      {/* <Link active to={'/'}>
        <Text fontSize={'subheading'} fontWeight={'bold'} color={'textWhite'}>
          Repositories
        </Text>
      </Link>
      <Link active to={'/signin'}>
        <Text fontSize={'subheading'} fontWeight={'bold'} color={'textWhite'}>
          Sign In
        </Text>
      </Link> */}
      <AppBarTab active to={'/'}>
        Repositories
      </AppBarTab>
      <AppBarTab active to={'/signin'}>
        Sign In
      </AppBarTab>
    </View>
  );
};

export default AppBar;
