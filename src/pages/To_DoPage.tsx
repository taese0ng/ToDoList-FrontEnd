import React, { useRef, useState } from 'react';
import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { CtText } from '@src/components/necessary';
import { To_DoItem, ProgressBar } from '@src/components/To_Do';
import Color from '@src/assets/Color';
import { width } from '@src/assets/Size';

interface Props {
  headerColor?: string;
  onCheckList: Function;
}

const To_DoPage: React.FC<Props> = (props) => {
  const { headerColor, onCheckList } = props;
  const [scrollTop, setScrollTop] = useState<boolean>(true);
  const bodyRef = useRef(null);
  const headerHeightRef = useRef(new Animated.Value(100)).current;
  const [arr, setArr] = useState<Array<{ title: string; status: boolean }>>([
    { title: 'test1', status: true },
    { title: 'test2', status: true },
    { title: 'test3', status: true },
    { title: 'test4', status: true },
    { title: 'test5', status: true },
    { title: 'test6', status: true },
    { title: 'test7', status: true },
    { title: 'test8', status: true },
    { title: 'test9', status: true },
    { title: 'test9', status: true },
    { title: 'test9', status: true },
    { title: 'test9', status: true },
    { title: 'test9', status: true },
    { title: 'test9', status: true },
  ]);

  const initProgressBar = () => {
    let trueNum = 0;
    arr.forEach((item) => {
      if (item.status) {
        trueNum++;
      }
    });
    const value = (((width / 100) * trueNum) / arr.length) * 100;

    return value === width ? value + 10 : value;
  };

  const percentageRef = useRef(new Animated.Value(initProgressBar())).current;

  const setProgressBar = () => {
    const value = initProgressBar();

    Animated.timing(percentageRef, {
      toValue: value === width ? value + 10 : value,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const changeHeaderSize = (isTop: boolean) => {
    if (isTop) {
      setScrollTop(true);
      Animated.timing(headerHeightRef, {
        toValue: 100,
        duration: 180,
        useNativeDriver: false,
      }).start();
    } else {
      setScrollTop(false);
      Animated.timing(headerHeightRef, {
        toValue: 50,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }
  };

  const scrollEvent = (e: any) => {
    const scrolling = e.nativeEvent.contentOffset.y;
    if (scrolling > 1) {
      changeHeaderSize(false);
    } else {
      changeHeaderSize(true);
    }
  };

  const onChecking = () => {
    onCheckList();
    setProgressBar();
  };

  const createList = async () => {
    const newValue = { title: '', status: false };
    await setArr([...arr, newValue]);
    // @ts-ignore
    bodyRef.current.scrollToEnd({ animated: true });
  };

  return (
    <Container>
      <Header headerColor={headerColor} style={{ height: headerHeightRef }}>
        {scrollTop ? (
          <React.Fragment>
            <CtText fontWeight={'bold'} color={Color.white} fontSize={40}>
              To-Do
            </CtText>
            <CtText fontWeight={'bold'} color={Color.white} fontSize={35}>
              List
            </CtText>
          </React.Fragment>
        ) : (
          <CtText fontWeight={'bold'} color={Color.white} fontSize={25}>
            To-Do List
          </CtText>
        )}
        <CreateBtn onPress={createList}>
          <CtText color={Color.white} fontSize={40} fontWeight={'bold'}>
            +
          </CtText>
        </CreateBtn>
      </Header>

      <ProgressBar percentage={percentageRef} />

      <Body
        ref={bodyRef}
        bounces={false}
        scrollEventThrottle={0}
        onScroll={(e) => {
          scrollEvent(e);
        }}
      >
        {arr.map((item, idx) => {
          return <To_DoItem item={item} onChange={onChecking} key={idx} />;
        })}
      </Body>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  width: 100%;
`;

const Header = styled(Animated.View)<{ headerColor?: string }>`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.headerColor || Color.white};
`;

const CreateBtn = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 0;
  padding: 3px 8px;
  justify-content: center;
  align-items: center;
`;

const Body = styled.ScrollView`
  width: 100%;
  background-color: ${Color.white};
`;

export default To_DoPage;
