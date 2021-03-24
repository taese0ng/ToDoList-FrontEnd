import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { CtInput, CtText, CtCheckBox } from '@src/components/necessary';
import Color from '@src/assets/Color';
import STRINGS from '@src/assets/Strings';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

const SignInPage: React.FC = () => {
  const [ID, setID] = useState<string>('');
  const [PW, setPW] = useState<string>('');
  const [SaveUser, setSaveUser] = useState<boolean>(false);
  const navigation = useNavigation();

  const onSignIn = () => {
    console.log(PW);
    console.log(ID);
  };

  const moveSignUp = () => {
    navigation.navigate(STRINGS.NAVIGATION.SIGN_UP);
    console.log('move to SignUp');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              value={ID}
              onChangeText={setID}
              placeholder={'아이디를 입력해주세요'}
              title={'아이디'}
              fontSize={15}
              style={{ paddingHorizontal: 20, marginVertical: 8, width: '100%', borderRadius: 30 }}
            />

            <CtInput
              value={PW}
              onChangeText={setPW}
              placeholder={'비밀번호를 입력해주세요'}
              title={'비밀번호'}
              secureTextEntry={true}
              fontSize={15}
              style={{ paddingHorizontal: 20, marginVertical: 5, width: '100%', borderRadius: 30 }}
            />

            <CtCheckBox
              animationDuration={0.3}
              size={13}
              fontWeight={'bold'}
              fontSize={12}
              value={SaveUser}
              onValueChange={setSaveUser}
              label={'아이디 비밀번호 저장하기'}
              boxType={'square'}
              style={{ alignSelf: 'flex-start', marginTop: 5, marginLeft: 10 }}
            />

            <ActionBtnArea>
              <ActionBtn onPress={moveSignUp} color={Color.black}>
                <CtText color={Color.white} fontWeight={'bold'} fontSize={15}>
                  회원가입하기
                </CtText>
              </ActionBtn>

              <ActionBtn onPress={onSignIn} color={Color.black}>
                <CtText color={Color.white} fontWeight={'bold'} fontSize={15}>
                  로그인하기
                </CtText>
              </ActionBtn>
            </ActionBtnArea>
          </InputContainer>
        </Body>
      </Container>
    </TouchableWithoutFeedback>
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
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  top: 12%;
`;

const ActionBtnArea = styled.View`
  margin-top: 50px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const ActionBtn = styled.TouchableOpacity<{ color?: string }>`
  width: 140px;
  height: 50px;
  border-radius: 30px;
  background: ${(props) => props.color || Color.blue40};
  justify-content: center;
  align-items: center;
`;

export default SignInPage;
