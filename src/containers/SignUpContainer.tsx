import React from 'react';
import { SignUpPage } from '@src/pages';
import styled from 'styled-components/native';
import Color from '@src/assets/Color';
import { signUpAPI } from '@src/api/accounts/signup';

const backgroundColor = Color.blue30;

const SignUpContainer: React.FC = () => {
  const signUp = async () => {
    const res = await signUpAPI();
    console.log(res);
  };

  return (
    <Container>
      <SignUpPage signUp={signUp} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

export default SignUpContainer;
