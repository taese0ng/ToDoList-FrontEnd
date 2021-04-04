import React, { useState, useRef } from 'react';
import styled from 'styled-components/native';
import { CtCheckBox } from '@src/components/necessary';
import Color from '@src/assets/Color';
import { width } from '@src/assets/Size';

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
  const scrollRef = useRef(null);

  const onValueChange = (e: any) => {
    item.status = e;
    setValue(e);
    onChange();
  };

  const horizontalScroll = (e: any) => {
    const scrolling = e.nativeEvent.contentOffset.x;

    if (scrolling > 30) {
      // @ts-ignore
      scrollRef.current?.scrollTo({ x: width });
    } else {
      // @ts-ignore
      scrollRef.current?.scrollTo({ x: 0 });
    }
  };

  return (
    <Container
      bounces={false}
      ref={scrollRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      onScrollEndDrag={horizontalScroll}
    >
      <FrontArea>
        <CtCheckBox value={value} onValueChange={onValueChange} />

        <TextArea>
          <TextInput
            value={todoItem}
            onChangeText={setTodoItem}
            color={value ? Color.gray10 : Color.black}
            textDecorationLine={value}
          />
        </TextArea>
      </FrontArea>

      <BackArea>
        <Icon source={require('@src/assets/icons/deleteIcon.png')} />
      </BackArea>
    </Container>
  );
};

const Container = styled.ScrollView`
  border-bottom-width: 1.5px;
  border-bottom-color: ${Color.blue0};
`;

const FrontArea = styled.View`
  padding: 20px;
  width: ${width}px;
  flex-direction: row;
  align-items: center;
`;

const BackArea = styled.TouchableOpacity`
  width: 60px;
  height: 100%;
  background-color: ${Color.red30};
  justify-content: center;
  align-items: center;
`;

const Icon = styled.Image`
  width: 25px;
  height: 25px;
`;

const TextArea = styled.View`
  padding-left: 10px;
  min-width: 15%;
`;

const TextInput = styled.TextInput<{ color: string; textDecorationLine: boolean }>`
  font-size: 17px;
  font-weight: bold;
  width: 100%;
  color: ${(props) => props.color};
  text-decoration-line: ${(props) => (props.textDecorationLine ? 'line-through' : 'none')};
`;

export default To_DoItem;
