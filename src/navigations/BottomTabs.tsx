/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import clsx from 'clsx';
import React, { type FC } from 'react';
import { Platform } from 'react-native';
// import {
// 	bottomTabPreset,
// 	transactionsBottomTabBarPreset,
// 	walletAssetListBottomTabBarPreset
// } from "./animations";
import { Text } from '../components/atoms';
import {
  Home, Profile, Chat, Market,
} from '../components/Icons';
import HomeNavigator from '../screens/Home/HomeNavigator';
import { ProfileScreen } from '../screens/Profile';
import { WagerScreen } from '../screens/Wager';
import { LobbyScreen } from '../screens/Lobby';
import { Screens } from './Screens';

const BottomTabs = createBottomTabNavigator();

function BottomTabsNavigation() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          height: Platform.OS === 'android' ? 60 : 80,
          paddingBottom: Platform.OS === 'android' ? 16 : 8,
        },
        tabBarItemStyle: {
          marginBottom: Platform.OS === 'android' ? 0 : 16,
        },
      }}
      tabBar={(props) => <BottomTabBar {...props} />}
    >
      <BottomTabs.Screen
        component={HomeNavigator}
        name={Screens.HomeNavigator}
        options={{
          // ...bottomTabPreset,
          tabBarIcon: () => <Home className="bg-red-500" height={22} width={22} />,
          tabBarLabel: ({ color, focused }) => Boolean(focused) && <Label label="Home" />,
        }}
      />
      <BottomTabs.Screen
        component={WagerScreen}
        name={Screens.Wager}
        options={{
          // ...walletAssetListBottomTabBarPreset,
          tabBarIcon: ({ focused }) => <Market height={24} width={24} />,
          tabBarLabel: ({ color, focused }) => Boolean(focused) && <Label label="Wager" />,
        }}
      />
      <BottomTabs.Screen
        component={LobbyScreen}
        name={Screens.Lobby}
        options={{
          // ...transactionsBottomTabBarPreset,
          tabBarIcon: ({ focused }) => <Chat fill="#555" height={22} width={22} />,
          tabBarLabel: ({ focused }) => Boolean(focused) && <Label label="Lobby" />,
        }}
      />
      <BottomTabs.Screen
        component={ProfileScreen}
        name={Screens.Profile}
        options={{
          // ...transactionsBottomTabBarPreset,
          tabBarIcon: ({ focused }) => <Profile fill="#555" height={21} width={21} />,
          tabBarLabel: ({ focused }) => Boolean(focused) && <Label label="Profile" />,
        }}
      />
    </BottomTabs.Navigator>
  );
}

interface LabelProps {
  label: string;
}

const Label: FC<LabelProps> = ({ label }) => (
  <Text
    className={clsx('font-interSemiBold text-center text-xs leading-3 font-[#010101]', {
      'font-interBold': Platform.OS === 'android',
      'mt-2': Platform.OS === 'android',
    })}
  >
    {label}
  </Text>
);

export default BottomTabsNavigation;
