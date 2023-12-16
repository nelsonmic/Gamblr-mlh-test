import clsx from "clsx";
import { Layout } from "components/Layouts";
import { Button, Pressable, Text, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";
import { useResendVerificationOtp } from "hooks/auth/useResendVerificationOtp";
import { useVerifyUserEmail } from "hooks/auth/useVerifyUserEmail";
import useCountDown from "hooks/useCountdown";
import { usePinCodeEntry } from "hooks/usePinCodeEntry";
import { useAppearanceContext } from "providers/Appearance.provider";
import { useEffect } from "react";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

interface ProfileScreenProps {
  route: any;
}
//TODO: When the user is navigated to this screen from the sign in screen you need to also pass the user email 
export const VerifyScreen: React.FC<ProfileScreenProps> = ({ route }) => {
      const { isDarkMode } = useAppearanceContext();
      const {isPending, verifyUserEmail} = useVerifyUserEmail()
      const {resendVerificationOtp, isError, isSuccess} = useResendVerificationOtp()
      const {value, PinInput, PinKeypad} = usePinCodeEntry({
            showBiometrics : false,
            pinLength: 6
      })
     
      const { hms, restart, ended, stop } = useCountDown({
            autoStart: true,
            delay: 60000,
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

      const onSubmit = () => {
            if(value.length === 6){
                  verifyUserEmail({
                        email: route?.params?.email,
                        otp: `${value}`
                  })
            }
      }

      const onResend = () => {
            if(ended){
                  reverseAnimation()
                  restart()
                  resendVerificationOtp({
                        email: route?.params?.email,
                        type: "email.verification"
                  })

                  
            } 
      }

      useEffect(() =>{
            isSuccess && stop()
            isError && stop()
      }, [isError])

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
                              <View className="mt-8 space-y-4">
                                    <PinInput />
                                    <View className="flex-row space-x-[4] ml-2 w-[120]">
                                          <Pressable onPress={onResend}>
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
                              <PinKeypad />
                              <Button 
                                    size="lg" 
                                    onPress={onSubmit} 
                                    isLoading={isPending}
                              >Verify</Button>
                        </View>
                  </View>
		</Layout>
	);
};
