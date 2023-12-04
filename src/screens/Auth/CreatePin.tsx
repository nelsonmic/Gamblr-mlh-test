import { Layout } from "components/Layouts";
import { Button, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";
import { PinInput } from "components/molecules/FormInputs";
import { PinCodeKeypad } from "components/organisms/PinCodeKeypad";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";

export const CreatePinScreen = () => {
      const goTo = useNavigateTo()
	return (
		<Layout
			className="h-full space-y-2 px-4 pt-4"
			edges={["left", "right", "bottom"]}
		>
                  <View className="flex-1 justify-between space-y-4">
                        <View className="flex-1">
                              <AuthScreenHeader 
                                    title= "Create Pin"
                                    description="Create a Pin for your transaction authorizations "
                              />
                              <View>
                                    <PinInput 
                                          codeLength={4}
                                          secureTextEntry
                                    />
                              </View>
                        </View>
                        <View>
                              <PinCodeKeypad />
                              <Button size="lg" onPress={() => goTo(Screens.ConfirmPin)}>Create Pin</Button>
                        </View>
                  </View>
		</Layout>
	);
};
