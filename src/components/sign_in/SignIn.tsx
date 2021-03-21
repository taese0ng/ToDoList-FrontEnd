import React, { useState } from 'react';
import styled from 'styled-components/native';
import { CtInput, CtText } from '@src/components/necessary';
import Color from '@src/assets/Color';

const SignIn: React.FC = () => {
  const [id, setID] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSignIn = () => {
    console.log(password);
    console.log(id);
  };

  return (
    <Container>
      <Header />
      <Body>
        <InputContainer>
          <CtText fontSize={30} fontWeight={'bold'} style={{ marginBottom: 5 }}>
            환영합니다
          </CtText>
          <CtText fontSize={15} color={Color.gray40} style={{ marginBottom: 40 }}>
            나만의 ToDoList 시작하기
          </CtText>
          <CtInput
            value={id}
            onChangeText={setID}
            placeholder={'아이디를 입력해주세요'}
            title={'아이디'}
            fontSize={15}
            style={{ paddingHorizontal: 20, marginVertical: 8, width: '90%', borderRadius: 30 }}
          />

          <CtInput
            value={password}
            onChangeText={setPassword}
            placeholder={'비밀번호를 입력해주세요'}
            title={'비밀번호'}
            secureTextEntry={true}
            fontSize={15}
            style={{ paddingHorizontal: 20, marginVertical: 5, width: '90%', borderRadius: 30 }}
          />

          <SignInBtn onPress={onSignIn}>
            <CtText color={Color.white} fontWeight={'bold'} fontSize={15}>
              로그인하기
            </CtText>
          </SignInBtn>
        </InputContainer>
      </Body>
    </Container>
  );
};

const Container = styled.View`
  height: 100%;
  align-items: center;
  padding: 0 25px;
  background: ${Color.white};
`;

const Header = styled.View`
  width: 60px;
  height: 10px;
  background: ${Color.gray5};
  border-radius: 5px;
  margin: 20px 0;
`;

const Body = styled.View`
  flex: 1;
  width: 100%;
`;

const InputContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  top: 12%;
`;

const SignInBtn = styled.TouchableOpacity`
  width: 140px;
  height: 50px;
  border-radius: 30px;
  background: ${Color.blue40};
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export default SignIn;
