import { Formik } from 'formik';
import React from 'react';
import SignInIndexForm from './SignInIndexForm';
import * as yup from 'yup';

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(2, 'Need more 2 chars')
      .required('Username is required'),
    password: yup
      .string()
      .min(3, 'Need 3 chars')
      .required('password is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInIndexForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
