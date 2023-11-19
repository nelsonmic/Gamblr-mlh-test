/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import {
  DefaultTheme,
  type NavigationContainerRef,
  NavigationContainer as RNNavigationContainer,
} from '@react-navigation/native';
import {
  type FC, type MutableRefObject, type PropsWithChildren, createRef,
} from 'react';
import { type RootStackParamList } from './types';
// import { logScreenView } from "@/handlers/firebase/analytics";

type NavigationContainerProps = PropsWithChildren;

const NavigationContainer: FC<NavigationContainerProps> = ({ children }) => {
  const navigationRef = createRef<NavigationContainerRef<RootStackParamList>>();
  const navigatorIsReadyRef: MutableRefObject<boolean | null> = createRef();
  const routeNameRef: MutableRefObject<string | undefined | null> = createRef();

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
    },
  };

  const onReady = () => {
    navigatorIsReadyRef.current = true;
    routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;

    // @todo add sentry register for navigation
  };

  const onStateChange = () => {
    // const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

    // if (previousRouteName !== currentRouteName) {
    // 	await logScreenView(currentRouteName as string, currentRouteName);
    // }

    routeNameRef.current = currentRouteName;
  };

  return (
    <RNNavigationContainer
      ref={navigationRef}
      onReady={onReady}
      onStateChange={onStateChange}
      theme={theme}
    >
      {children}
    </RNNavigationContainer>
  );
};

export default NavigationContainer;
