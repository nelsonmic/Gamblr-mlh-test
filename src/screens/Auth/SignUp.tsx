import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Layout } from "components/Layouts";
import { Button, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";
import { Screens } from "navigations/Screens";
import { RootStackParamList } from "navigations/types";
import { useCallback } from "react";

export const SignUpScreen = () => {
      const { navigate } = useNavigation<NavigationProp<RootStackParamList, Screens.SignUpScreen>>();
	const gotoHome = useCallback(() => {
		// hapticFeedback();
		requestAnimationFrame(() => {
			navigate(Screens.CreatePinScreen);
		});
	}, [navigate]);

	return (
		<Layout
			className="h-full space-y-2 px-4 pt-8"
			edges={["left", "right", "top", "bottom"]}
		>
                  <View className="flex-1 justify-between space-y-4">
                        <View className="flex-1">
                              <AuthScreenHeader 
                                    title= "Sign Up"
                                    description="Create an account now, challenge, play, and win yourself some cash."
                              />
                        </View>
                        <Button size="lg" onPress={gotoHome}>Sign Up</Button>
                  </View>
		</Layout>
	);
};
