import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import { Chat, Home, Market, Settings } from 'components/Icons';
import { createBottomSheetNavigator } from './bottom-sheet';
import { Screens } from './Screens';
import { type RootStackParamList } from './types';
import { WagerScreen } from 'screens/Wager';
import { LobbyScreen } from 'screens/Lobby';
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
import { SettingsScreen } from 'screens/Settings';
import { CongratulationsScreen } from 'screens/Auth/Congratulations';
import { naviteStackWithHeaderConfig } from './config/NativeStackWithHeaderConfig';
import { useAppearanceContext } from 'providers/Appearance.provider';
import { ProfileScreen } from 'screens/Settings/Profile';
import { WalletScreen } from 'screens/Settings/Wallet';
import { ReferralsScreen } from 'screens/Settings/Referrals';
import { ChangePinScreen } from 'screens/Settings/ChangePin';
import { ChangePasswordScreen } from 'screens/Settings/ChangePassword';
import { TwoFaScreen } from 'screens/Settings/TwoFa';
import { PrivacyPolicyScreen } from 'screens/Settings/PrivacyPolicy';
import { TermsScreen } from 'screens/Settings/Terms';
import { SupportScreen } from 'screens/Settings/Support';
import { BottomTabButton } from 'components/molecules/BottomTabButton';

const RootStack = createBottomSheetNavigator<RootStackParamList>();
const BottomTabStack = createBottomTabNavigator<RootStackParamList>();
const NativeStack = createStackNavigator<RootStackParamList>();

const BottomTabsRoot: React.FC = () => {
  const { isDarkMode, colors } = useAppearanceContext();
return (
  <BottomTabStack.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        borderTopWidth: 0,
        elevation: 0,
        height: Platform.OS === "android" ? 60 : 80,
        paddingBottom: Platform.OS === "android" ? 16 : 8,
        backgroundColor: isDarkMode? colors.dark : colors.light
      },
      // tabBarItemStyle: {
      //   marginBottom: Platform.OS === "android" ? 0 : 16,
      // },
    }}
  >
    <BottomTabStack.Screen
      component={HomeScreen}
      name={Screens.Home}
      options={{
        // ...bottomTabPreset,
        tabBarIcon: ({ focused }) => <BottomTabButton icon={<Home width={22} height={22} />} label="Home" isFocused={focused} routeName={Screens.Home} />,
        tabBarLabel: () => null,
      }}
    />
    <BottomTabStack.Screen
      component={WagerScreen}
      name={Screens.Wager}
      options={{
        // ...walletAssetListBottomTabBarPreset,
        tabBarIcon: ({ focused }) => <BottomTabButton icon={<Market height={24} width={24} />} label="Wager" isFocused={focused} routeName={Screens.Wager} />,
        tabBarLabel: () => null,
      }}
    />
    <BottomTabStack.Screen
      component={LobbyScreen}
      name={Screens.Lobby}
      options={{
        // ...transactionsBottomTabBarPreset,
        tabBarIcon: ({ focused }) => <BottomTabButton icon={<Chat height={22} width={22} />} label="Lobby" isFocused={focused} routeName={Screens.Lobby} />,
        tabBarLabel: () => null,
      }}
    />
    <BottomTabStack.Screen
      component={SettingsScreen}
      name={Screens.Settings}
      options={{
        // ...transactionsBottomTabBarPreset,
        tabBarIcon: ({ focused }) => <BottomTabButton icon={<Settings height={22} width={22} />} label="Settings" isFocused={focused} routeName={Screens.Settings} />,
        tabBarLabel: () => null,
      }}
    />
  </BottomTabStack.Navigator>
)};

const NativeStackRoot: React.FC = () => {
  const [showSplashScreen, setShowSplashScreen] = React.useState<boolean>(true);
	let screens = null;

  React.useEffect(() => {
    const time = setTimeout(() => {
      setShowSplashScreen(false);
    }, 3500);
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
    } else if (false) { //for auth screens
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
            options={{ ...naviteStackWithHeaderConfig }}
          />
          <NativeStack.Screen
            component={VerifyScreen}
            name={Screens.VerifyScreen}
            options={{ ...naviteStackWithHeaderConfig }}
          />
          <NativeStack.Screen
            component={CongratulationsScreen}
            name={Screens.Congratulations}
            options={{ headerShown: false }}
          />
          <NativeStack.Screen
            component={ConfirmPinScreen}
            name={Screens.ConfirmPin}
            options={{ ...naviteStackWithHeaderConfig }}
          />
          <NativeStack.Screen
            component={EnterOtpScreen}
            name={Screens.EnterOtp}
            options={{ headerShown: false }}
          />
          <NativeStack.Screen
            component={ForgotPasswordScreen}
            name={Screens.ForgotPassword}
            options={{ ...naviteStackWithHeaderConfig }}
          />
          <NativeStack.Screen
            component={ResetPasswordScreen}
            name={Screens.ResetPassword}
            options={{ ...naviteStackWithHeaderConfig }}
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
          <NativeStack.Screen
            component={ProfileScreen}
            name={Screens.Profile}
            options={{ ...naviteStackWithHeaderConfig }}
          />
          <NativeStack.Screen
            component={WalletScreen}
            name={Screens.Wallet}
            options={{ ...naviteStackWithHeaderConfig }}
          />
          <NativeStack.Screen
            component={ReferralsScreen}
            name={Screens.Referrals}
            options={{ ...naviteStackWithHeaderConfig }}
          />
          <NativeStack.Screen
            component={ChangePasswordScreen}
            name={Screens.ChangePassword}
            options={{ ...naviteStackWithHeaderConfig }}
          />
          <NativeStack.Screen
            component={ChangePinScreen}
            name={Screens.ChangePin}
            options={{ ...naviteStackWithHeaderConfig }}
          />
          <NativeStack.Screen
            component={TwoFaScreen}
            name={Screens.TwoFa}
            options={{ ...naviteStackWithHeaderConfig }}
          />
          <NativeStack.Screen
            component={PrivacyPolicyScreen}
            name={Screens.PrivacyPolicy}
            options={{ ...naviteStackWithHeaderConfig }}
          />
          <NativeStack.Screen
            component={TermsScreen}
            name={Screens.Terms}
            options={{ ...naviteStackWithHeaderConfig }}
          />
          <NativeStack.Screen
            component={SupportScreen}
            name={Screens.Support}
            options={{ ...naviteStackWithHeaderConfig }}
          />
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
