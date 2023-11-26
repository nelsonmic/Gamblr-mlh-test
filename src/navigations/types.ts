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
}
