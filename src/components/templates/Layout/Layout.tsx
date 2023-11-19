import clsx from 'clsx';
import React, { type FC } from 'react';
import { Platform } from 'react-native';
import { SafeAreaView, type SafeAreaViewProps } from 'react-native-safe-area-context';

export type LayoutProps = SafeAreaViewProps & {
  bg?: string;
  paddingTop?: boolean;
};

const Layout: FC<LayoutProps> = ({
  bg = 'bg-white',
  children,
  className,
  paddingTop = false,
  ...rest
}) => (
  <SafeAreaView
    {...rest}
    className={clsx('h-screen w-screen', className, bg, {
      'pt-14': paddingTop && Platform.OS === 'android',
    })}
  >
    {children}
  </SafeAreaView>
);

export default Layout;
