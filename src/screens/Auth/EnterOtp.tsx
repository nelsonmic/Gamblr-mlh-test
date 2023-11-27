import { Layout } from "components/Layouts";
import { Button, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";
import { PinInput } from "components/molecules/FormInputs";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";

export const EnterOtpScreen = () => {
      const goTo = useNavigateTo()
	return (
		<Layout
			className="h-full space-y-2 px-4 pt-14"
			edges={["left", "right", "top", "bottom"]}
		>
                  <View className="flex-1 justify-between space-y-4">
                        <View className="flex-1">
                              <AuthScreenHeader 
                                    title= "Enter OTP"
                                    description="We sent you a 6-digit OTP to your email. Enter the code below to proceed."
                              />
                              <View className="mt-2">
                                    <PinInput 
                                          codeLength={6}
                                    />
                              </View>
                        </View>
                        <Button size="lg" onPress={() => goTo(Screens.ResetPassword)}>Reset</Button>
                  </View>
		</Layout>
	);
};
