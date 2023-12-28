import { Email } from "components/Icons";
import { Layout } from "components/Layouts";
import { Button, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";
import { FormInput } from "components/molecules/FormInputs";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";
import { KeyboardAvoidingView } from "react-native";

export const ForgotPasswordScreen = () => {
      const {goTo} = useNavigateTo()
	return (
		<Layout
			className="h-full space-y-2 px-4 pt-4"
			edges={["left", "right", "bottom"]}
		>
                  <KeyboardAvoidingView 
                        behavior="height"
                        className="flex-1"
                  >
                        <View className="flex-1 justify-between">
                              <View className="flex-1">
                                    <AuthScreenHeader 
                                          title= "Forgot your password?"
                                          description="Let’s help you change it. Enter your registered email address below "
                                    />
                                    <View className="mt-8">
                                          <FormInput 
                                                leftIcon={<Email width={20} height={20}/>}
                                                placeholder="johndoe@gmail.com"
                                                inputMode="email"
                                          />
                                    </View>
                              </View>
                              <View>
                                    <Button 
                                          size="lg" 
                                          onPress={()=> goTo(Screens.EnterOtp)}
                                    >Reset</Button>
                              </View>
                        </View>
                  </KeyboardAvoidingView>
		</Layout>
	);
};
