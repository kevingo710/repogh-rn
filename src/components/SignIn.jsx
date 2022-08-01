import { Formik } from 'formik';
import React from 'react';
import SignInIndexForm from './SignInIndexForm';

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInIndexForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
