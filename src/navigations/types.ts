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
  [Screens.Market]: undefined;
  [Screens.Chat]: undefined;
  [Screens.Profile]: undefined;
}
