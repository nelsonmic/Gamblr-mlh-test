import React, { type FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import clsx from 'clsx';
import { Platform } from 'react-native';
import { Chat, Home, Market } from 'components/Icons';
import { Text } from 'components/atoms';
import { ProfileScreen } from 'screens/Profile';
import { createBottomSheetNavigator } from './bottom-sheet';
import { Screens } from './Screens';
import { type RootStackParamList } from './types';
import { WagerScreen } from 'screens/Wager';
import { LobbyScreen } from 'screens/Lobby';
import SvgProfile from 'components/Icons/Profile';
import { HomeScreen } from 'screens/Home';
import OnboardingScreen from 'screens/Onboarding';
import SplashScreen from 'screens/SplashScreen';
import { SignInScreen } from 'screens/Auth/SignIn';
import { SignUpScreen } from 'screens/Auth/SignUp';
import { CreatePinScreen } from 'screens/Auth/CreatePin';
import { VerifyScreen } from 'screens/Auth/Verify';
import { WelcomeBackScreen } from 'screens/Auth/WelcomeBack';
import { ConfirmPinScreen } from 'screens/Auth/ConfirmPin';
import { EnterOtpScreen } from 'screens/Auth/EnterOtp';
import { ForgotPasswordScreen } from 'screens/Auth/ForgotPassword';
import { ResetPasswordScreen } from 'screens/Auth/ResetPassword';

const RootStack = createBottomSheetNavigator<RootStackParamList>();
const BottomTabStack = createBottomTabNavigator<RootStackParamList>();
const NativeStack = createStackNavigator<RootStackParamList>();

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

const BottomTabsRoot: React.FC = () => (
  <BottomTabStack.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        borderTopWidth: 0,
        elevation: 0,
        height: Platform.OS === "android" ? 60 : 80,
        paddingBottom: Platform.OS === "android" ? 16 : 8,
      },
      tabBarItemStyle: {
        marginBottom: Platform.OS === "android" ? 0 : 16,
      },
    }}
  >
    <BottomTabStack.Screen
      component={HomeScreen}
      name={Screens.Home}
      options={{
        // ...bottomTabPreset,
        tabBarIcon: () => <Home height={20} width={20} />,
        tabBarLabel: ({ focused }) => Boolean(focused) && <Label label="Home" />,
      }}
    />
    <BottomTabStack.Screen
      component={WagerScreen}
      name={Screens.Wager}
      options={{
        // ...walletAssetListBottomTabBarPreset,
        tabBarIcon: () => <Market height={24} width={24} />,
        tabBarLabel: ({ focused }) => Boolean(focused) && <Label label="Wager" />,
      }}
    />
    <BottomTabStack.Screen
      component={LobbyScreen}
      name={Screens.Lobby}
      options={{
        // ...transactionsBottomTabBarPreset,
        tabBarIcon: () => <Chat fill="#555" height={22} width={22} />,
        tabBarLabel: ({ focused }) => Boolean(focused) && <Label label="Lobby" />,
      }}
    />
    <BottomTabStack.Screen
      component={ProfileScreen}
      name={Screens.Profile}
      options={{
        // ...transactionsBottomTabBarPreset,
        tabBarIcon: () => <SvgProfile height={21} width={21} />,
        tabBarLabel: ({ focused }) => Boolean(focused) && <Label label="Profile" />,
      }}
    />
  </BottomTabStack.Navigator>
);

const NativeStackRoot: React.FC = () => {
  const [showSplashScreen, setShowSplashScreen] = React.useState<boolean>(true);
	let screens = null;

  React.useEffect(() => {
    const time = setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
    return () => {
      clearTimeout(time);
    };
  }, []);

  if (showSplashScreen) { // for splash screen
    screens = (
      <NativeStack.Screen
        component={SplashScreen}
        name={Screens.SplashScreen}
        options={{
          headerShown: false,
        }}
      />
    );
  } else if (false) { // for onboarding screen
		screens = (
			<NativeStack.Screen component={OnboardingScreen}
				name={Screens.Onboarding}
				options={{ headerShown: false }}/>
		);
	} else if (true) { //for auth screens
		screens = (
      <>
        <NativeStack.Screen
          component={SignInScreen}
          name={Screens.SignInScreen}
          options={{ headerShown: false }}
        />
        <NativeStack.Screen
          component={SignUpScreen}
          name={Screens.SignUpScreen}
          options={{ headerShown: false }}
        />
        <NativeStack.Screen
          component={CreatePinScreen}
          name={Screens.CreatePinScreen}
          options={{ headerShown: false }}
        />
        <NativeStack.Screen
          component={VerifyScreen}
          name={Screens.VerifyScreen}
          options={{ headerShown: false }}
        />
        <NativeStack.Screen
          component={ConfirmPinScreen}
          name={Screens.ConfirmPin}
          options={{ headerShown: false }}
        />
        <NativeStack.Screen
          component={EnterOtpScreen}
          name={Screens.EnterOtp}
          options={{ headerShown: false }}
        />
        <NativeStack.Screen
          component={ForgotPasswordScreen}
          name={Screens.ForgotPassword}
          options={{ headerShown: false }}
        />
        <NativeStack.Screen
          component={ResetPasswordScreen}
          name={Screens.ResetPassword}
          options={{ headerShown: false }}
        />
      </>
		);
	} else if (false){ // for welcome screen
    screens = (
        <NativeStack.Screen
          component={WelcomeBackScreen}
          name={Screens.WelcomeBackScreen}
          options={{ headerShown: false }}
        />
    )
  }else { // main app screens
		screens = (
			<>
				<NativeStack.Screen
					component={BottomTabsRoot}
					name={Screens.BottomTabs}
					options={{ headerShown: false }}
				/>
				{/* <NativeStack.Screen
					component={SavingsDetailScreen}
					name={Screens.SavingsDetails}
					options={{ ...naviteStackWithHeaderConfig }}
				/> */}
			</>
		);
	}
	return <NativeStack.Navigator>{screens}</NativeStack.Navigator>;
};

// full app router + modal bottom sheets
const NavigationRoot: React.FC = () => (
	<RootStack.Navigator>
		<RootStack.Screen
			component={NativeStackRoot}
			name={Screens.NativeStackRoot}
		/>
		{/* <RootStack.Screen component={NetworkSheet} name={Screens.NetworkSheet} /> */}
	</RootStack.Navigator>
);

export default NavigationRoot;
