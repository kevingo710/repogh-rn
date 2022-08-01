import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

import Text from './Text';

const SignInIndexForm = ({ onSubmit }) => {
  return (
    <View style={styles.formContainer}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable style={styles.buttonSignIn} onPress={onSubmit}>
        <Text color={'textWhite'}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignInIndexForm;

const styles = StyleSheet.create({
  formContainer: {
    flexGrow: 1,
    flexShrink: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
  buttonSignIn: {
    backgroundColor: theme.colors.primary,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
});
