import { Layout } from "components/Layouts";
import { Button, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";
import { useConfirmPin } from "hooks/auth/useConfirmPin";
import { useCreatePin } from "hooks/auth/useCreatePin";
import { usePinCodeEntry } from "hooks/usePinCodeEntry";
import { FC } from "react";
import { useToast } from "react-native-toast-notifications";

interface ConfirmScreenProps{
	route: any;
}
export const ConfirmPinScreen: FC<ConfirmScreenProps> = ({ route }) => {
	const {value, PinInput, PinKeypad} = usePinCodeEntry({
		pinLength: 4,
		showBiometrics: false,
		secureEntry: true
	});
	const { createPin, isPending } = useCreatePin()
	const toast = useToast();

	const handleSubmit = () => {
		if(value === route.params.pin){ 
			createPin({pin : value})
		}else{
			toast.show("Make sure you entered the same pin from the previous step", {type: "info", data: "Pin don't match"})
		}
	}

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
					<View className="mt-8">
                                    <PinInput />
                              </View>
                        </View>
				<View>
					<PinKeypad />
                        	<Button 
						size="lg" 
						onPress={handleSubmit}
						isLoading={isPending}
					>Confirm</Button>
				</View>
                  </View>
		</Layout>
	);
};
