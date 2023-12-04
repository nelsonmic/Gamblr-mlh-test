import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Layout } from "components/Layouts";
import { Button, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";
import { PinInput } from "components/molecules/FormInputs";
import { PinCodeKeypad } from "components/organisms/PinCodeKeypad";
import { Screens } from "navigations/Screens";
import { RootStackParamList } from "navigations/types";
import { useCallback } from "react";

export const ConfirmPinScreen = () => {
      const { navigate } = useNavigation<NavigationProp<RootStackParamList, Screens.ConfirmPin>>();
	const gotoHome = useCallback(() => {
		// hapticFeedback();
		requestAnimationFrame(() => {
			navigate(Screens.SignInScreen);
		});
	}, [navigate]);

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
                                    <PinInput 
                                          codeLength={4}
							secureTextEntry
                                    />
                              </View>
                        </View>
				<View>
					<PinCodeKeypad />
                        	<Button size="lg" onPress={gotoHome}>Confirm</Button>
				</View>
                  </View>
		</Layout>
	);
};
