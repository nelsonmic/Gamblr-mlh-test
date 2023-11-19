/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { type RootStackParamList } from '../../navigations/types';
import { Screens } from '../../navigations/Screens';
import { HomeScreen } from '.';

const Stack = createStackNavigator<RootStackParamList>();

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name={Screens.Home}
        options={{
          header: () => null,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
