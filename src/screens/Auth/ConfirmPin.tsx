import { Layout } from "components/Layouts";
import { Button, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";
import { useNavigateTo } from "hooks/useNavigateTo";
import { usePinCodeEntry } from "hooks/usePinCodeEntry";
import { Screens } from "navigations/Screens";

export const ConfirmPinScreen = () => {
	const {value, PinInput, PinKeypad} = usePinCodeEntry({
		pinLength: 4,
		showBiometrics: false
	});
	const { goTo } = useNavigateTo()

	return (
		<Layout
			className="h-full space-y-2 px-4 pt-4"
			edges={["left", "right", "bottom"]}
		>
                  <View className="flex-1 justify-between space-y-4">
                        <View className="flex-1">
                              <AuthScreenHeader 
                                    title= "Confirm Pin"
                                    description="Enter the 4-digit PIN again"
                              />
					<View>
                                    <PinInput />
                              </View>
                        </View>
				<View>
					<PinKeypad />
                        	<Button size="lg" onPress={() => goTo(Screens.SignInScreen)}>Confirm</Button>
				</View>
                  </View>
		</Layout>
	);
};
