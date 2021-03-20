import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import STRINGS from '@src/assets/Strings';
import { TestPage } from '@src/pages';

const RouteNavigation: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={TestPage} name={STRINGS.NAVIGATION.TEST} options={{ header: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteNavigation;
