import { Layout } from "components/Layouts";
import { Button, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";

export const ForgotPasswordScreen = () => {
      const goTo = useNavigateTo()
	return (
		<Layout
			className="h-full space-y-2 px-4 pt-8"
			edges={["left", "right", "top", "bottom"]}
		>
                  <View className="flex-1 justify-between space-y-4">
                        <View className="flex-1">
                              <AuthScreenHeader 
                                    title= "Forgot your password?"
                                    description="Let’s help you change it. Enter your registered email address below "
                              />
                        </View>
                        <Button size="lg" onPress={()=> goTo(Screens.EnterOtp)}>Reset</Button>
                  </View>
		</Layout>
	);
};
