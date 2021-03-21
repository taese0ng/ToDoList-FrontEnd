import React, { useRef, useEffect } from 'react';
import styled from 'styled-components/native';
import { SignInPage } from '@src/pages';
import Color from '@src/assets/Color';
import { SignIn } from '@src/components/sign_in';
import BottomSheet from 'reanimated-bottom-sheet';

const backgroundColor = Color.blue30;

const SignInContainer: React.FC = () => {
  const sheetRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    sheetRef.current.snapTo(2);
  }, []);

  return (
    <React.Fragment>
      <Container>
        <SignInPage backgroundColor={backgroundColor} />
      </Container>
      <BottomSheet ref={sheetRef} snapPoints={[700, 110, 110]} borderRadius={40} renderContent={() => <SignIn />} />
    </React.Fragment>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background: ${backgroundColor};
`;

export default SignInContainer;
