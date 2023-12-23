import { Layout } from "components/Layouts";
import { Button, View } from "components/atoms";
import { PageHeader } from "components/organisms/PageHeader";
import { useNavigateTo } from "hooks/useNavigateTo";
import { usePinCodeEntry } from "hooks/usePinCodeEntry";
import { Screens } from "navigations/Screens";

export const ChangePinScreen = () => {
	const {value, PinInput, PinKeypad} = usePinCodeEntry({
		pinLength: 4,
		secureEntry: true
	});
	const {goTo} = useNavigateTo();

	const handleSubmit = () => {
		if(value.length === 4) goTo(Screens.NewPin, {
			data: {
				old_pin: value
			}
		})
	}

	return (
		<Layout
			className="h-full space-y-2 px-4 pt-4"
			edges={["left", "right", "bottom"]}
		>
			<View className="flex-1 justify-between space-y-4">
				<View className="flex-1">
					<PageHeader title="Change PIN" description="Input your current PIN here" />
                              <View className="mt-8">
                                    <PinInput />
                              </View>
				</View>
                        <View>
                              <PinKeypad />
                              <Button 
                                    size="lg" 
                                    onPress={handleSubmit}
                              >Update Pin</Button>
                        </View>	

			</View>
		</Layout>
	);
};
