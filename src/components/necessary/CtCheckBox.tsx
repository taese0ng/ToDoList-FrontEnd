import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import { CtText } from '@src/components/necessary';
import Color from '@src/assets/Color';
import styled from 'styled-components/native';
import { FlexStyle, StyleProp, TextStyle } from 'react-native';

interface Props {
  value: boolean;
  onValueChange: Function;
  disabled?: boolean;
  onCheckColor?: string;
  onTintColor?: string;
  onFillColor?: string;
  onAnimationType?: 'stroke' | 'fill' | 'bounce' | 'flat' | 'one-stroke' | 'fade';
  offAnimationType?: 'stroke' | 'fill' | 'bounce' | 'flat' | 'one-stroke' | 'fade';
  boxType?: 'circle' | 'square';
  hideBox?: boolean;
  lineWidth?: number;
  animationDuration?: number;
  label?: string;
  size?: number;
  fontSize?: number;
  fontWeight?: 'normal' | 'bold';
  fontColor?: string;
  style?: StyleProp<FlexStyle | TextStyle>;
}

const CtCheckBox: React.FC<Props> = (props) => {
  const {
    label,
    value,
    onValueChange,
    disabled,
    onCheckColor,
    onTintColor,
    onFillColor,
    onAnimationType,
    offAnimationType,
    hideBox,
    lineWidth,
    animationDuration,
    boxType,
    size,
    fontSize,
    fontWeight,
    fontColor,
    style,
  } = props;

  return (
    // @ts-ignore
    <CheckArea style={style}>
      <CheckBox
        onCheckColor={onCheckColor || 'black'}
        onTintColor={onTintColor || 'black'}
        onFillColor={onFillColor}
        value={value}
        animationDuration={animationDuration}
        lineWidth={lineWidth}
        hideBox={hideBox}
        boxType={boxType}
        disabled={disabled}
        offAnimationType={offAnimationType}
        onAnimationType={onAnimationType}
        onValueChange={(newValue) => {
          onValueChange(newValue);
        }}
        style={size ? { width: size, height: size } : { width: 20, height: 20 }}
      />
      {label && (
        <CtText
          color={fontColor || Color.gray30}
          style={{ paddingLeft: 5, paddingTop: 2 }}
          fontSize={fontSize || 12}
          fontWeight={fontWeight || 'normal'}
        >
          {label}
        </CtText>
      )}
    </CheckArea>
  );
};

const CheckArea = styled.View`
  flex-direction: row;
  padding: 3px;
  align-items: center;
`;

export default CtCheckBox;
