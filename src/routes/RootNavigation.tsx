import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import STRINGS from '@src/assets/Strings';
import { SignInContainer } from '@src/containers';

const RouteNavigation: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={SignInContainer} name={STRINGS.NAVIGATION.SIGN_IN} options={{ header: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteNavigation;
