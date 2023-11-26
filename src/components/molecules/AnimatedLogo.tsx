import { DarkLogo, Logo } from "components/Icons";
import { FC, useEffect } from "react";
import Animated, { Easing, FadeIn, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import { SvgProps } from "react-native-svg";

interface AnimatedLogoProps {
  variant?: "light" | "dark";
}

export const AnimatedLogo: FC<AnimatedLogoProps & SvgProps> = ({
  variant = "dark",
  ...props
}) => {
  return (
      <Animated.View entering={FadeIn} className="absolute items-center justify-center h-screen w-full">
            <PickIcon variant={variant} {...props} />
      </Animated.View>
  );
};

const duration = 2000;
const PickIcon: React.FC<AnimatedLogoProps & SvgProps> = ({ variant, ...props }) => {
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
      {variant === 'light' ? <Logo {...props} /> : <DarkLogo {...props} />}
    </Animated.View>
  );
};

export default PickIcon;

