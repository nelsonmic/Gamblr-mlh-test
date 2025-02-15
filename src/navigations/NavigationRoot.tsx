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
import { useAppearanceContext } from 'providers/Appearance.provider';
import { ProfileScreen } from 'screens/Settings/Profile';
import { WalletScreen } from 'screens/Settings/Wallet';
import { ReferralsScreen } from 'screens/Settings/Referrals';
import { ChangePinScreen } from 'screens/Settings/ChangePin';
import { ChangePasswordScreen } from 'screens/Settings/ChangePassword';
import { TwoFaScreen } from 'screens/Settings/twoFa/TwoFa';
import { PrivacyPolicyScreen } from 'screens/Settings/PrivacyPolicy';
import { TermsScreen } from 'screens/Settings/Terms';
import { SupportScreen } from 'screens/Settings/Support';
import { BottomTabButton } from 'components/molecules/BottomTabButton';
import { useNativeStackWithHeaderConfig } from './config/useNativeStackWithHeaderConfig';
import { SuccessScreen } from 'screens/SuccessScreen';
import { NewPinScreen } from 'screens/Settings/ChangePin/NewPin';
import { ConfirmNewPinScreen } from 'screens/Settings/ChangePin/ConfirmNewPin';
import { NewPasswordScreen } from 'screens/Settings/ChangePassword/NewPassword';
import { ConfirmNewPasswordScreen } from 'screens/Settings/ChangePassword/ConfirmNewPassword';
import { TwoFaHomeScreen } from 'screens/Settings/twoFa';
import { TwoFaOtpScreen } from 'screens/Settings/twoFa/Otp';
import { ChooseTwoFaSheet } from 'screens/Settings/twoFa/ChooseTwoFa.sheet';
import { OpenWagersScreen } from 'screens/Wager/OpenWager';
import { CreateWagerScreen } from 'screens/Wager/CreateWager';
import { WagerTypeSheet } from 'screens/Wager/CreateWager/WagerType.sheet';
import { PickGameSheet } from 'screens/Wager/CreateWager/PickGame.sheet';

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
    }}
  >
    <BottomTabStack.Screen
      component={HomeScreen}
      name={Screens.Home}
      options={{
        // ...bottomTabPreset,
        tabBarIcon: ({ focused }) => 
        ( 
          <BottomTabButton 
            icon={<Home width={22} height={22} isFocused={focused} />} 
            label="Home" 
            isFocused={focused} 
            routeName={Screens.Home} 
          />
        ),
        tabBarLabel: () => null,
      }}
    />
    <BottomTabStack.Screen
      component={WagerScreen}
      name={Screens.Wager}
      options={{
        // ...walletAssetListBottomTabBarPreset,
        tabBarIcon: ({ focused }) => 
        (
          <BottomTabButton 
            icon={<Market height={24} width={24} isFocused={focused}  />} 
            label="Wager" 
            isFocused={focused} 
            routeName={Screens.Wager} 
          />
        ),
        tabBarLabel: () => null,
      }}
    />
    <BottomTabStack.Screen
      component={LobbyScreen}
      name={Screens.Lobby}
      options={{
        // ...transactionsBottomTabBarPreset,
        tabBarIcon: ({ focused }) => 
        (
          <BottomTabButton 
            icon={<Chat height={22} width={22} isFocused={focused} />} 
            label="Chatroom" 
            isFocused={focused} 
            routeName={Screens.Lobby} 
          />
        ),
        tabBarLabel: () => null,
      }}
    />
    <BottomTabStack.Screen
      component={SettingsScreen}
      name={Screens.Settings}
      options={{
        // ...transactionsBottomTabBarPreset,
        tabBarIcon: ({ focused }) => 
        (
          <BottomTabButton 
            icon={<Settings height={22} width={22} isFocused={focused} />} 
            label="Settings" 
            isFocused={focused} 
            routeName={Screens.Settings} 
          />
        ),
        tabBarLabel: () => null,
      }}
    />
  </BottomTabStack.Navigator>
)};

const NativeStackRoot: React.FC = () => {
  const {config} = useNativeStackWithHeaderConfig();

	return(
    <NativeStack.Navigator>
            <NativeStack.Screen
              component={SplashScreen}
              name={Screens.SplashScreen}
              options={{
                headerShown: false,
              }}
            />
            <NativeStack.Screen
              component={WelcomeBackScreen}
              name={Screens.WelcomeBackScreen}
              options={{ headerShown: false }}
            />
            <NativeStack.Screen component={OnboardingScreen}
            name={Screens.Onboarding}
            options={{ headerShown: false }}/>
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
              options={{ ...config }}
            />
            <NativeStack.Screen
              component={VerifyScreen}
              name={Screens.VerifyScreen}
              options={{ ...config }}
            />
            <NativeStack.Screen
              component={CongratulationsScreen}
              name={Screens.Congratulations}
              options={{ headerShown: false }}
            />
            <NativeStack.Screen
              component={ConfirmPinScreen}
              name={Screens.ConfirmPin}
              options={{ ...config }}
            />
            <NativeStack.Screen
              component={EnterOtpScreen}
              name={Screens.EnterOtp}
              options={{ headerShown: false }}
            />
            <NativeStack.Screen
              component={ForgotPasswordScreen}
              name={Screens.ForgotPassword}
              options={{ ...config }}
            />
            <NativeStack.Screen
              component={ResetPasswordScreen}
              name={Screens.ResetPassword}
              options={{ ...config }}
            />
            <NativeStack.Screen
              component={BottomTabsRoot}
              name={Screens.BottomTabs}
              options={{ headerShown: false }}
            />
            <NativeStack.Screen
              component={ProfileScreen}
              name={Screens.Profile}
              options={{ ...config, headerTitle: Screens.Profile }}
            />
            <NativeStack.Screen
              component={WalletScreen}
              name={Screens.Wallet}
              options={{ ...config, headerLeft: () => null }}
            />
            <NativeStack.Screen
              component={ReferralsScreen}
              name={Screens.Referrals}
              options={{ ...config }}
            />
            <NativeStack.Screen
              component={ChangePasswordScreen}
              name={Screens.ChangePassword}
              options={{ ...config }}
            />
            <NativeStack.Screen
              component={ChangePinScreen}
              name={Screens.ChangePin}
              options={{ ...config }}
            />
            <NativeStack.Screen
              component={TwoFaScreen}
              name={Screens.TwoFa}
              options={{ ...config }}
            />
            <NativeStack.Screen
              component={PrivacyPolicyScreen}
              name={Screens.PrivacyPolicy}
              options={{ ...config, headerTitle: Screens.PrivacyPolicy }}
            />
            <NativeStack.Screen
              component={TermsScreen}
              name={Screens.Terms}
              options={{ ...config, headerTitle: Screens.Terms }}
            />
            <NativeStack.Screen
              component={SupportScreen}
              name={Screens.Support}
              options={{ ...config }}
            />
            <NativeStack.Screen
              component={NewPinScreen}
              name={Screens.NewPin}
              options={{ ...config }}
            />
            <NativeStack.Screen
              component={ConfirmNewPinScreen}
              name={Screens.ConfirmNewPin}
              options={{ ...config }}
            />
            <NativeStack.Screen
              component={SuccessScreen}
              name={Screens.SuccessScreen}
              options={{ headerShown: false }}
            />
            <NativeStack.Screen
              component={NewPasswordScreen}
              name={Screens.NewPassword}
              options={{ ...config }}
            />
            <NativeStack.Screen
              component={ConfirmNewPasswordScreen}
              name={Screens.ConfirmNewPassword}
              options={{ ...config }}
            />
            <NativeStack.Screen
              component={TwoFaHomeScreen}
              name={Screens.TwoFaHomeScreen}
              options={{ ...config }}
            />   
            <NativeStack.Screen
              component={TwoFaOtpScreen}
              name={Screens.TwoFaOtp}
              options={{ ...config }}
            />   
            <NativeStack.Screen
              component={OpenWagersScreen}
              name={Screens.OpenWagersScreen}
              options={{ ...config, headerTitle: Screens.OpenWagersScreen }}
            />
            <NativeStack.Screen
              component={CreateWagerScreen}
              name={Screens.CreateWagerScreen}
              options={{ ...config, headerTitle: Screens.CreateWagerScreen }}
            />        
    </NativeStack.Navigator>
  );
};

// full app router + modal bottom sheets
const NavigationRoot: React.FC = () => (
	<RootStack.Navigator>
		<RootStack.Screen
			component={NativeStackRoot}
			name={Screens.NativeStackRoot}
		/>
		<RootStack.Screen component={ChooseTwoFaSheet} name={Screens.ChooseTwoFaSheet} />
    <RootStack.Screen component={WagerTypeSheet} name={Screens.WagerTypeSheet} /> 
    <RootStack.Screen component={PickGameSheet} name={Screens.PickGameSheet} />
	</RootStack.Navigator>
);

export default NavigationRoot;
