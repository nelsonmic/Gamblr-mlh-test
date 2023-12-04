import clsx from "clsx";
import { Layout } from "components/Layouts";
import { Button, Pressable, Text, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";
import { PinInput } from "components/molecules/FormInputs";
import { PinCodeKeypad } from "components/organisms/PinCodeKeypad";
import useCountDown from "hooks/useCountdown";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";
import { useAppearanceContext } from "providers/Appearance.provider";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export const VerifyScreen = () => {
      const { isDarkMode, toggleColorScheme } = useAppearanceContext();
      const goTo = useNavigateTo();
      const { hms, restart, ended } = useCountDown({
            autoStart: true,
            delay: 5000,
      });

      const color = useSharedValue("#CCCCCC");
      const scale = useSharedValue(1)
      const animatedStyle = useAnimatedStyle(() => ({
            color: color.value,
            transform: [{ scale: scale.value }]
      }))

      const runAnimation = () => {
            const colorTheme = isDarkMode? "#ffffff" : "#131313"
            color.value = withTiming(colorTheme, 
            {
                  duration: 600,
                  easing: Easing.linear
            })
            scale.value = withTiming(1.1, {
                  duration: 600,
                  easing: Easing.linear
            })
      }

      const reverseAnimation = () => {
            color.value = withTiming("#CCCCCC",  {
                  duration: 600,
                  easing: Easing.linear
            })
            scale.value = withTiming(1, {
                  duration: 600,
                  easing: Easing.linear
            })
      }

      if(ended) {
            runAnimation()
      }

	return (
		<Layout
			className="h-full space-y-2 px-4 pt-2"
			edges={["left", "right", "bottom"]}
		>
                  <View className="flex-1 justify-between space-y-4">
                        <View className="flex-1">
                              <AuthScreenHeader 
                                    title= "Verify your account"
                                    description="We sent a 6-digit OTP to your email. Enter the code below"
                              />
                              <View className="mt-2 space-y-24">
                                    <PinInput 
                                          codeLength={6}
                                    />
                                    <View className="flex-row space-x-[4] ml-2 w-[120]">
                                          <Pressable
                                                onPress={()=> {
                                                      if(ended){
                                                            reverseAnimation()
                                                            restart()
                                                      } 
                                                }}
                                          >
                                                <Animated.Text 
                                                      className={clsx("font-interMedium text-xs text-black-100")}
                                                      style={animatedStyle}
                                                >
                                                      Resend
                                                </Animated.Text>
                                          </Pressable>
                                          <Text className="text-red-100 font-interMedium text-xs">
                                                {ended? null : `${hms[1]}:${hms[2]}`}
                                          </Text>
                                    </View>
                              </View>
                        </View>
                        <View>
                              <PinCodeKeypad />
                              <Button size="lg" >Verify</Button>
                        </View>
                  </View>
		</Layout>
	);
};
