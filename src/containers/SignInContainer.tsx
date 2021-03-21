import React from 'react';
import styled from 'styled-components/native';
import { SignInPage } from '@src/pages';
import Color from '@src/assets/Color';

const backgroundColor = Color.blue30;

const SignInContainer: React.FC = () => {
  return (
    <Container>
      <SignInPage backgroundColor={backgroundColor} />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background: ${backgroundColor};
`;

export default SignInContainer;
