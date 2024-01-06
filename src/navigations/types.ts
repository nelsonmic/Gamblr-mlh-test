import { type StackNavigationProp } from '@react-navigation/stack';
import { type Screens } from './Screens';

export type NavigationProp = StackNavigationProp<
RootStackParamList,
keyof RootStackParamList,
string | undefined
>;

export interface RootStackParamList {
  [key: string]: undefined;
  [Screens.Home]: undefined;
  [Screens.Wager]: undefined;
  [Screens.Lobby]: undefined;
  [Screens.Profile]: undefined;
  [Screens.NativeStackRoot]: undefined;
  [Screens.BottomTabs]: undefined;
  [Screens.Onboarding]: undefined;
  [Screens.CreatePinScreen]: undefined;
  [Screens.SignInScreen]: undefined;
  [Screens.SignUpScreen]: undefined;
  [Screens.VerifyScreen]: undefined;
  [Screens.WelcomeBackScreen]: undefined;
  [Screens.ConfirmPin]: undefined;
  [Screens.Settings]: undefined;
  [Screens.Congratulations]: undefined;
  [Screens.Wallet]: undefined;
  [Screens.Referrals]: undefined;
  [Screens.ChangePassword]: undefined;
  [Screens.ChangePin]: undefined;
  [Screens.TwoFa]: undefined;
  [Screens.PrivacyPolicy]: undefined;
  [Screens.Terms]: undefined;
  [Screens.Support]: undefined;
  [Screens.NewPin]: undefined;
  [Screens.ConfirmNewPin]: undefined;
  [Screens.NewPassword]: undefined;
  [Screens.ConfirmNewPassword]: undefined;
  [Screens.SuccessScreen]: undefined;
  [Screens.TwoFaHomeScreen]: undefined;
  [Screens.TwoFaOtp]: undefined;
  [Screens.ChooseTwoFaSheet]: undefined;
  [Screens.OpenWagersScreen]: undefined;
  [Screens.CreateWagerScreen]: undefined;
}
