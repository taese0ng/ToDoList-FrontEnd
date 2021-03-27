import React, { useState } from 'react';
import { Platform, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import styled from 'styled-components/native';
import Color from '@src/assets/Color';
import { CtInput, CtText } from '@src/components/necessary';
import STRINGS from '@src/assets/Strings';
import { useNavigation } from '@react-navigation/native';

interface Props {
  signUp: Function;
}

const SignUpPage: React.FC<Props> = (props) => {
  const { signUp } = props;

  const navigation = useNavigation();
  const [Name, setName] = useState<string>('');
  const [ID, setID] = useState<string>('');
  const [PW, setPW] = useState<string>('');
  const [PWConfirm, setPWConfirm] = useState<string>('');
  const [Email, setEmail] = useState<string>('');
  const [ConfirmCode, setConfirmCode] = useState<string>('');

  const goBack = () => {
    navigation.goBack();
  };

  const IDConfirm = () => {
    console.log('Confirm ID');
  };

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, width: '100%' }}>
          <Header>
            <CtText color={Color.white} fontWeight={'bold'} fontSize={33}>
              {STRINGS.NAVIGATION.SIGN_UP}
            </CtText>
          </Header>

          <Body bounces={false}>
            <InputArea>
              <CtInput
                value={ID}
                onChangeText={setID}
                placeholder={'아이디를 입력해주세요'}
                title={'아이디'}
                fontSize={15}
                style={{ paddingHorizontal: 20, marginVertical: 8, width: '100%', borderRadius: 30 }}
                btn={{ title: '중복검사', onPress: IDConfirm }}
              />

              <CtInput
                value={Name}
                onChangeText={setName}
                placeholder={'이름를 입력해주세요'}
                title={'이름'}
                fontSize={15}
                style={{ paddingHorizontal: 20, marginVertical: 8, width: '100%', borderRadius: 30 }}
              />

              <CtInput
                value={PW}
                onChangeText={setPW}
                placeholder={'비밀번호를 입력해주세요'}
                title={'비밀번호'}
                fontSize={15}
                style={{ paddingHorizontal: 20, marginVertical: 8, width: '100%', borderRadius: 30 }}
              />

              <CtInput
                value={PWConfirm}
                onChangeText={setPWConfirm}
                placeholder={'비밀번호 확인을 해주세요'}
                title={'비밀번호 확인'}
                fontSize={15}
                style={{ paddingHorizontal: 20, marginVertical: 8, width: '100%', borderRadius: 30 }}
              />

              <CtInput
                value={Email}
                onChangeText={setEmail}
                placeholder={'이메일을 입력 해주세요'}
                title={'이메일'}
                fontSize={15}
                style={{ paddingHorizontal: 20, marginVertical: 8, width: '100%', borderRadius: 30 }}
              />

              <CtInput
                value={ConfirmCode}
                onChangeText={setConfirmCode}
                placeholder={'인증번호를 입력해주세요'}
                title={'인증번호'}
                fontSize={15}
                style={{ paddingHorizontal: 20, marginVertical: 8, width: '100%', borderRadius: 30 }}
                btn={{ title: '인증하기', onPress: () => {} }}
              />

              <ActionBtnArea>
                <ActionBtn color={Color.black} onPress={goBack}>
                  <CtText color={Color.white} fontWeight={'bold'} fontSize={15}>
                    취소하기
                  </CtText>
                </ActionBtn>

                <ActionBtn
                  color={Color.black}
                  onPress={() => {
                    signUp();
                  }}
                >
                  <CtText color={Color.white} fontWeight={'bold'} fontSize={15}>
                    회원가입 하기
                  </CtText>
                </ActionBtn>
              </ActionBtnArea>
            </InputArea>
          </Body>
        </View>
      </TouchableWithoutFeedback>
    </Container>
  );
};

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  padding: 0 10px;
`;

const Header = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 80px 0 40px 0;
`;

const Body = styled.ScrollView`
  flex: 1;
  width: 100%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 40px 30px;
  background-color: ${Color.white};
`;

const InputArea = styled.View`
  align-items: center;
  width: 100%;
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

export default SignUpPage;
