import { Layout } from "components/Layouts";
import { Button, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";
import { useNavigateTo } from "hooks/useNavigateTo";
import { usePinCodeEntry } from "hooks/usePinCodeEntry";
import { Screens } from "navigations/Screens";

export const CreatePinScreen = () => {
      const { goTo } = useNavigateTo();
      const {value, PinInput, PinKeypad} = usePinCodeEntry({
            pinLength: 4,
            showBiometrics: false,
            secureEntry: true
      })

      const handleSubmit = () => {
            if(value.length === 4) goTo(Screens.ConfirmPin, {
                  pin: value
            })
      }
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
                              <View className="mt-8">
                                    <PinInput />
                              </View>
                        </View>
                        <View>
                              <PinKeypad />
                              <Button 
                                    size="lg" 
                                    onPress={handleSubmit}
                              >Create Pin</Button>
                        </View>
                  </View>
		</Layout>
	);
};
