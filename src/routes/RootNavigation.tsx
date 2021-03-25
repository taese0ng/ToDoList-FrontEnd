import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import STRINGS from '@src/assets/Strings';
import { SignInContainer, SignUpContainer, To_DoContainer } from '@src/containers';
import { useRecoilValue } from 'recoil';
import { userLoginStatus } from '@src/recoil/Recoil';

const RouteNavigation: React.FC = () => {
  const Stack = createStackNavigator();
  const loginStatus = useRecoilValue(userLoginStatus);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loginStatus ? (
          <React.Fragment>
            <Stack.Screen
              component={SignInContainer}
              name={STRINGS.NAVIGATION.SIGN_IN}
              options={{ header: () => null }}
            />
            <Stack.Screen
              component={SignUpContainer}
              name={STRINGS.NAVIGATION.SIGN_UP}
              options={{ header: () => null }}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Stack.Screen component={To_DoContainer} name={STRINGS.NAVIGATION.TO_DO} options={{ header: () => null }} />
          </React.Fragment>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteNavigation;
