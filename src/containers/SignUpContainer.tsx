import React from 'react';
import { SignUpPage } from '@src/pages';
import styled from 'styled-components/native';
import Color from '@src/assets/Color';

const backgroundColor = Color.blue30;

const SignUpContainer: React.FC = () => {
  return (
    <Container>
      <SignUpPage />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

export default SignUpContainer;
