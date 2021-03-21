import React, { useState } from 'react';
import styled from 'styled-components/native';
import { FlexStyle, StyleProp, TextStyle } from 'react-native';
import Color from '@src/assets/Color';

interface Props {
  fontSize?: Number;
  borderRadius?: Number;
  padding?: Number;
  width?: Number | String;
  height?: Number | String;
  backgroundColor?: String;
  fontWeight?: String;
  value: String;
  onChangeText: Function;
  placeholder?: String;
  placeholderTextColor?: String;
  style?: StyleProp<FlexStyle | TextStyle>;
}

const CtInput: React.FC<Props> = ({ style, ...props }) => {
  return (
    <TextInput
      style={style}
      {...props}
      onChangeText={props.onChangeText}
      value={props.value}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor}
    />
  );
};

const TextInput = styled.TextInput<Props>`
  border-radius: ${(props: Props) => `${props.borderRadius || 3}px`};
  padding: ${(props: Props) => `${props.padding || 10}px`};
  width: ${(props: Props) => `${props.width || '300px'}`};
  height: ${(props: Props) => `${props.height || '38px'}`};
  font-size: ${(props: Props) => `${props.fontSize || 15}px`};
  font-weight: ${(props: Props) => `${props.fontWeight || 'normal'}`};
  background-color: ${(props: Props) => `${props.backgroundColor || Color.gray5}`};
`;

export default CtInput;
