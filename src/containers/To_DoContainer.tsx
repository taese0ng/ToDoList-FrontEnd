import React from 'react';
import styled from 'styled-components/native';
import { To_DoPage } from '@src/pages';
import Color from '@src/assets/Color';

const backgroundColor = Color.blue30;

const To_DoContainer: React.FC = () => {
  const onCheckList = () => {
    console.log('check');
  };

  return (
    <React.Fragment>
      <ContainerHeader />
      <Container>
        <To_DoPage headerColor={backgroundColor} onCheckList={onCheckList} />
      </Container>
    </React.Fragment>
  );
};

const ContainerHeader = styled.SafeAreaView`
  flex: 0;
  background-color: ${backgroundColor};
`;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Color.white};
`;

export default To_DoContainer;
