import React from 'react';
import styled from 'styled-components/native';
import { To_DoPage } from '@src/pages';
import Color from '@src/assets/Color';

const backgroundColor = Color.blue30;

const To_DoContainer: React.FC = () => {
  return (
    <Container>
      <To_DoPage />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${backgroundColor};
`;

export default To_DoContainer;
