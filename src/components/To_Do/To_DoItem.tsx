import React, { useState } from 'react';
import styled from 'styled-components/native';
import { CtCheckBox } from '@src/components/necessary';
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
  const [todoItem, setTodoItem] = useState<string>(item.title);

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
          <TextInput
            value={todoItem}
            onChangeText={setTodoItem}
            color={value ? Color.gray10 : Color.black}
            textDecorationLine={value}
          />
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

const TextInput = styled.TextInput<{ color: string; textDecorationLine: boolean }>`
  font-size: 17px;
  font-weight: bold;
  color: ${(props) => props.color};
  text-decoration-line: ${(props) => (props.textDecorationLine ? 'line-through' : 'none')};
`;

export default To_DoItem;
