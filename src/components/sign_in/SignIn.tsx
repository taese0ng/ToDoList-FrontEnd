import React, { useState } from 'react';
import styled from 'styled-components/native';
import { CtInput } from '@src/components/necessary';
import Color from '@src/assets/Color';

const SignIn: React.FC = () => {
  const [text, setText] = useState<String>('');
  return (
    <Container>
      <CtInput width={'100%'} borderRadius={7} value={text} onChangeText={setText} placeholder={'d'} />
    </Container>
  );
};

const Container = styled.View`
  height: 100%;
  align-content: center;
  padding: 25px;
  background: ${Color.white};
`;

export default SignIn;
