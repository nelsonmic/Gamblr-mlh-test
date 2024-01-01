import { DarkLogo, Logo } from "components/Icons";
import { useAppearanceContext } from "providers/Appearance.provider";
import { FC, useEffect } from "react";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import { SvgProps } from "react-native-svg";


export const AnimatedLogo: FC<SvgProps> = ({...props}) => {
  return <PickIcon {...props} />
};

const duration = 2000;

const PickIcon: React.FC<SvgProps> = ({...props }) => {
  const { isDarkMode } = useAppearanceContext();
  const opacity = useSharedValue(.6);
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  const runAnimation = () => {
    opacity.value = withRepeat(
      withTiming(1, {
        duration: duration /2,
        easing: Easing.linear,
      }),
      -1,
      true
    );

    scale.value = withRepeat(
      withTiming(1.2, {
        duration: duration/2,
        easing: Easing.linear,
      }),
      -1,
      true
    );
  };

  useEffect(() => {
    runAnimation();
  }, []);

  return (
    <Animated.View style={animatedStyle}>
      { isDarkMode ? <Logo {...props} /> : <DarkLogo {...props} />}
    </Animated.View>
  );
};

export default PickIcon;

