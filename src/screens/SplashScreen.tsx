import React from 'react';
import { View } from 'components/atoms';
import { Logo } from 'components/Icons';

function SplashScreen(): React.ReactElement | null {
  return (
    <View className="flex-1 items-center justify-center bg-[#131313]">
      <Logo height={60} width={60} />
    </View>
  );
}

export default SplashScreen;
