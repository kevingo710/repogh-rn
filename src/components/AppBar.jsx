import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';
import { Link, useLocation } from 'react-router-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  linkTab: { paddingHorizontal: 15 },
  scrollTabContainer: {
    paddingBottom: 15,
  },
});

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname === to;

  return (
    <Link to={to} style={styles.linkTab}>
      <Text
        fontSize={'subheading'}
        fontWeight={'bold'}
        color={active ? 'textWhite' : 'textSecondary'}
      >
        {children}
      </Text>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollTabContainer}>
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
        <AppBarTab to={'/'}>Repositories</AppBarTab>
        <AppBarTab to={'/signin'}>Sign In</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
