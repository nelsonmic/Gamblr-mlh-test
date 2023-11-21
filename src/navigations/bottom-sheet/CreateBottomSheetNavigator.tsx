/* eslint-disable no-spaced-func */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-tabs */
import {
  createNavigatorFactory,
  type DefaultNavigatorOptions,
  type EventArg,
  NavigationHelpersContext,
  StackActions,
  type StackNavigationState,
  type StackRouterOptions,
  useNavigationBuilder,
} from '@react-navigation/native';
import React from 'react';
import { type RootStackParamList } from '../types';
import { router } from './router';
import type {
  BottomSheetNavigationConfig,
  BottomSheetNavigationEventMap,
  BottomSheetNavigationOptions,
} from './types';
import BottomSheetNavigatorView from './views/BottomSheetNavigatorView';

type Props = DefaultNavigatorOptions<
RootStackParamList,
StackNavigationState<RootStackParamList>,
BottomSheetNavigationOptions,
BottomSheetNavigationEventMap
> &
StackRouterOptions &
BottomSheetNavigationConfig;

function BottomSheetNavigator({
  children,
  initialRouteName,
  screenOptions,
  ...rest
}: Props) {
  const { descriptors, navigation, state } = useNavigationBuilder<
  StackNavigationState<RootStackParamList>,
  StackRouterOptions,
  Record<string, () => void>,
  BottomSheetNavigationOptions,
  BottomSheetNavigationEventMap
  >(router, {
      children,
      initialRouteName,
    });

  React.useEffect(
    () => {
      // @ts-expect-error no types for this yet
      navigation.addListener?.('tabPress', (e) => {
        const isFocused = navigation.isFocused();

        requestAnimationFrame(() => {
          if (
            state.index > 0
						&& isFocused
						&& !(e as EventArg<'tabPress', true>).defaultPrevented
          ) {
            navigation.dispatch({
              ...StackActions.popToTop(),
              target: state.key,
            });
          }
        });
      });
    },
    [navigation, state.index, state.key],
  );

  return (
    <NavigationHelpersContext.Provider value={navigation}>
      <BottomSheetNavigatorView
        {...rest}
        descriptors={descriptors}
        navigation={navigation}
        state={state}
      />
    </NavigationHelpersContext.Provider>
  );
}

export const createBottomSheetNavigator = createNavigatorFactory<
StackNavigationState<RootStackParamList>,
BottomSheetNavigationOptions,
BottomSheetNavigationEventMap,
	typeof BottomSheetNavigator
>(BottomSheetNavigator);
