import React from 'react';
import styled from 'styled-components/native';
import { FlexStyle, StyleProp, TextStyle, View } from 'react-native';
import Color from '@src/assets/Color';
import { CtText } from '@src/components/necessary';

interface BtnData {
  title?: string;
  onPress: Function;
  backgroundColor?: string;
  titleColor?: string;
}

interface Props {
  fontSize?: number;
  fontWeight?: 'bold' | 'normal';
  value: string;
  onChangeText: Function;
  placeholder?: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  title?: string;
  titleColor?: string;
  color?: string;
  style?: StyleProp<FlexStyle | TextStyle>;
  btn?: BtnData;
}

const CtInput: React.FC<Props> = (props) => {
  return (
    // @ts-ignore
    <TextInputContainer style={props.style} fontSize={props.fontSize} fontWeight={props.fontWeight}>
      <View style={{ justifyContent: 'center' }}>
        {props.title && props.value !== '' && (
          <CtText
            color={props.titleColor || Color.gray50}
            fontSize={props.fontSize && props.fontSize * 0.7}
            fontWeight={props.fontWeight}
            style={{ position: 'absolute', zIndex: 1, top: 7 }}
          >
            {props.title}
          </CtText>
        )}

        <TextInput
          value={props.value}
          // @ts-ignore
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor || Color.gray30}
          fontSize={props.fontSize}
          fontWeight={props.fontWeight}
          color={props.color}
          secureTextEntry={props.secureTextEntry}
          btn={props.btn}
        />

        {props.btn && (
          <ConfirmBtn color={props.btn.backgroundColor || Color.black} onPress={() => props.btn?.onPress()}>
            <CtText color={props.btn.titleColor || Color.white} fontWeight={'bold'} fontSize={13}>
              {props.btn.title}
            </CtText>
          </ConfirmBtn>
        )}
      </View>
    </TextInputContainer>
  );
};

const TextInputContainer = styled.View<{ fontSize?: number; fontWeight?: 'bold' | 'normal' }>`
  width: 300px;
  height: ${(props) => `${props.fontSize ? props.fontSize * 3.5 : 40}px `};
  font-weight: ${(props) => `${props.fontWeight || 'normal'}`};
  background-color: ${Color.gray5};
  justify-content: center;
`;

const TextInput = styled.TextInput<Props>`
  width: ${(props: Props) => `${props.btn ? '70%' : '100%'}`};
  height: 100%;
  padding-top: ${(props: Props) => `${props.value === '' ? 0 : 7}px`};
  font-size: ${(props: Props) => `${props.fontSize || 15}px`};
  color: ${(props: Props) => `${props.color || Color.black}`};
  font-weight: ${(props: Props) => `${props.fontWeight || 'normal'}`};
`;

const ConfirmBtn = styled.TouchableOpacity<{ color?: string }>`
  position: absolute;
  right: -14px;
  width: 75px;
  height: 40px;
  border-radius: 30px;
  background: ${(props) => props.color || Color.blue40};
  justify-content: center;
  align-items: center;
`;
export default CtInput;
