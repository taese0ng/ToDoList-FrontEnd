import React from 'react';
import styled from 'styled-components/native';
import { height } from '@src/assets/Size';
import { CtText } from '@src/components/necessary';
import Color from '@src/assets/Color';

interface Props {
  backgroundColor: String;
}

const SignInPage: React.FC<Props> = (props) => {
  const { backgroundColor } = props;

  return (
    <Container backgroundColor={backgroundColor}>
      <TitleArea>
        <CtText fontSize={70} fontWeight={'bold'} color={Color.white}>
          To-Do
        </CtText>
        <CtText fontSize={50} fontWeight={'bold'} color={Color.white}>
          LIST
        </CtText>
      </TitleArea>
    </Container>
  );
};

const Container = styled.View<Props>`
  flex: 1;
  padding: 0 25px;
  background-color: ${(props: Props) => `${props.backgroundColor || Color.white}`};
`;

const TitleArea = styled.View`
  flex: 1;
  align-items: center;
  top: ${height * 0.25}px;
`;

export default SignInPage;
