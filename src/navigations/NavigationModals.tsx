import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'screens/SplashScreen';
import { Screens } from './Screens';
import BottomTabsNavigation from './BottomTabs';
import { type RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

function ModalNavigations() {
  const [showSplashScreen, setShowSplashScreen] = React.useState<boolean>(true);
  let screenToRender;

  React.useEffect(() => {
    const time = setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
    return () => {
      clearTimeout(time);
    };
  }, []);

  if (showSplashScreen) {
    screenToRender = (
      <Stack.Screen
        component={SplashScreen}
        name={Screens.SplashScreen}
        options={{
          headerShown: false,
        }}
      />
    );
  } else {
    screenToRender = (
      <Stack.Screen
        component={BottomTabsNavigation}
        name={Screens.MainRoot}
        options={{
          headerShown: false,
        }}
      />
    );
  }

  // TODO: Handle Show Onboarding, Auth Screen and Main routes
  // if (!currentUser) {
  // 	screenToRender = (
  // 		<Stack.Screen
  // 			component={ConnectWalletScreen}
  // 			name={Screens.ConnectWallet}
  // 			options={{
  // 				headerShown: false
  // 			}}
  // 		/>
  // 	);
  // } else if (!currentUser.onboarded) {
  // 	screenToRender = (
  // 		<Stack.Screen
  // 			component={OnboardScreen}
  // 			name={Screens.Onboard}
  // 			options={{
  // 				headerShown: false
  // 			}}
  // 		/>
  // 	);
  // } else {
  // 	screenToRender = (
  // 		<>
  // 			<Stack.Screen
  // 				component={BottomTabsNavigation}
  // 				name={Screens.MainRoot}
  // 				options={{
  // 					headerShown: false
  // 				}}
  // 			/>
  // 		</>
  // 	);
  // }
  return <Stack.Navigator>{screenToRender}</Stack.Navigator>;
}

export default ModalNavigations;
