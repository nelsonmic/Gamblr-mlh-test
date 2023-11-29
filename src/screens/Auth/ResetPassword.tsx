import { EyeClosed } from "components/Icons";
import { Layout } from "components/Layouts";
import { Button, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";
import { FormInput } from "components/molecules/FormInputs";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";

export const ResetPasswordScreen = () => {
      const goTo = useNavigateTo()
	return (
		<Layout
			className="h-full space-y-2 px-4 pt-4"
			edges={["left", "right", "bottom"]}
		>
                  <View className="flex-1 justify-between space-y-4">
                        <View className="flex-1">
                              <AuthScreenHeader 
                                    title= "Reset your password?"
                                    description="Enter your new password below "
                              />
                              <View className="mt-4">
                                    <FormInput
                                          rightIcon={<EyeClosed height={18} width={18} />}
                                          placeholder="New Password"
                                          secureTextEntry
                                    />
                                    <FormInput
                                          rightIcon={<EyeClosed height={18} width={18} />}
                                          placeholder="Confirm Password"
                                          secureTextEntry
                                    />
                              </View>
                        </View>
                        <Button size="lg" onPress={()=> goTo(Screens.SignInScreen)}>Reset</Button>
                  </View>
		</Layout>
	);
};
