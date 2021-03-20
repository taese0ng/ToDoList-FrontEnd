/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { RecoilRoot } from 'recoil';
import RootNavigation from '@src/routes/RootNavigation';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <RecoilRoot>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootNavigation />
    </RecoilRoot>
  );
};

export default App;
