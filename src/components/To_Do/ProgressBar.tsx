import React from 'react';
import styled from 'styled-components/native';
import Color from '@src/assets/Color';
import { Animated } from 'react-native';

interface Props {
  percentage: Animated.Value;
}

const ProgressBar: React.FC<Props> = (props) => {
  const { percentage } = props;

  return (
    <Container>
      <Body style={{ width: percentage }} />
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 6px;
`;

const Body = styled(Animated.View)`
  height: 100%;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: ${Color.blue60};
`;
export default ProgressBar;
