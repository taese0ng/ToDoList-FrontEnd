import React, { useRef } from 'react';
import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { CtText } from '@src/components/necessary';

const To_DoPage: React.FC = () => {
  const headerHeightRef = useRef(new Animated.Value(100)).current;

  const changeHeaderSize = () => {
    Animated.timing(headerHeightRef, {
      toValue: 50,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Container>
      <Header style={{ height: headerHeightRef }} />
      <Body onScrollBeginDrag={changeHeaderSize}>
        <CtText>test</CtText>
      </Body>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  width: 100%;
`;

const Header = styled(Animated.View)`
  width: 100%;
  background-color: blue;
`;

const Body = styled.ScrollView`
  width: 100%;
  background-color: red;
`;

export default To_DoPage;
