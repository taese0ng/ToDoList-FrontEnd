import React, { useState } from 'react';
import styled from 'styled-components/native';
import { CtCheckBox, CtText } from '@src/components/necessary';
import Color from '@src/assets/Color';

interface itemProps {
  status: boolean;
  title: string;
}

interface Props {
  item: itemProps;
  onChange: Function;
}

const To_DoItem: React.FC<Props> = (props) => {
  const { item, onChange } = props;
  const [value, setValue] = useState<boolean>(item.status || false);

  const onValueChange = (e: any) => {
    item.status = e;
    setValue(e);
    onChange();
  };

  return (
    <Container>
      <Body>
        <CtCheckBox value={value} onValueChange={onValueChange} />

        <TextArea>
          <CtText
            fontSize={17}
            fontWeight={'bold'}
            color={value ? Color.gray10 : Color.black}
            style={value && { textDecorationLine: 'line-through' }}
          >
            {item.title}
          </CtText>
        </TextArea>
      </Body>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  padding: 20px;
  border-bottom-width: 1.5px;
  border-bottom-color: ${Color.blue0};
`;

const Body = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const TextArea = styled.View`
  padding-left: 10px;
`;
export default To_DoItem;
