import React, { useEffect, useRef } from 'react';
import { View } from 'components/atoms';
import { FullLogo, Logo } from 'components/Icons';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSequence, withTiming } from 'react-native-reanimated';
import { useAppearanceContext } from 'providers/Appearance.provider';
import clsx from 'clsx';
import { useCatToken } from 'hooks/auth/useCatToken';
import { useNavigateTo } from 'hooks/useNavigateTo';
import { Screens } from 'navigations/Screens';

function SplashScreen(): React.ReactElement | null {
  const {catToken} = useCatToken();
  const { goTo } = useNavigateTo();
  const { isDarkMode } = useAppearanceContext();
  const logoOpacity = useSharedValue(1);
  const logoScale = useSharedValue(1);
  const fullLogoOpacity = useSharedValue(0);
  const fullLogoScale = useSharedValue(0);
  const logoStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value,
    transform: [{scale: logoScale.value}]
  }))
  const fullLogoStyle = useAnimatedStyle(() => ({
    opacity: fullLogoOpacity.value,
    transform: [{scale: fullLogoScale.value}]
  }))

 let timeoutId: any;

  const runAnimation = (onAnimationEnd: () => void) => {
    const delayDuration = 500;

    // Logo animations
    logoOpacity.value = withDelay(delayDuration * 2, withTiming(0, { duration: 1000 }));
    logoScale.value = withDelay(delayDuration * 2, withTiming(0, { duration: 1500 }));

    //full logo animation
    fullLogoOpacity.value = withSequence(
      withDelay(delayDuration, withTiming(1, { duration: 1500 }))
    );

    fullLogoScale.value = withSequence(
      withDelay(delayDuration, withTiming(1, { duration: 1500 }))
    );

    timeoutId = setTimeout(onAnimationEnd, 3000);
  };


  const switchScreens = () =>{
    if(catToken){
      goTo(Screens.WelcomeBackScreen)
    }else if(!catToken){
      goTo(Screens.SignInScreen)
    }
  }
  useEffect(() => {
    let isMounted = true;

    const runAnimationWithCallback = () => {
      if (isMounted) runAnimation(switchScreens);
    };

    runAnimationWithCallback();

    return () => {
      isMounted = false;

      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, [catToken]);


  return (
    <View className={clsx("relative flex-1 items-center justify-center bg-white-100", {
      "bg-black-100" : isDarkMode
    })}>
      <Animated.View 
        className="absolute"
        style={logoStyle}
      >
        <Logo height={60} width={60} />
      </Animated.View>
      <Animated.View
        style={fullLogoStyle}
      >
        <FullLogo height={160} width={160} />
      </Animated.View>
    </View>
  );
}

export default SplashScreen;
