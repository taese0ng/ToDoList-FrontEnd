import React, { useRef } from 'react';
import styled from 'styled-components/native';
import { CtText } from '@src/components/necessary';
import BottomSheet from 'reanimated-bottom-sheet';
import { SignIn } from '@src/components/sign_in';
import Color from '@src/assets/Color';

interface Props {
  backgroundColor: String;
}

const SignInPage: React.FC<Props> = (props) => {
  const { backgroundColor } = props;
  const sheetRef = useRef(null);

  return (
    <Container backgroundColor={backgroundColor}>
      <CtText>SignInPaged</CtText>
      <BottomSheet ref={sheetRef} snapPoints={[450, 300, 100]} borderRadius={40} renderContent={() => <SignIn />} />
    </Container>
  );
};

const Container = styled.View<Props>`
  flex: 1;
  background-color: ${(props: Props) => `${props.backgroundColor || Color.white}`};
`;

export default SignInPage;
