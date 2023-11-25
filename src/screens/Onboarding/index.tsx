import View from "components/atoms/View";
import { Layout } from "components/Layouts";
import { OnboardingSwipper } from "components/organisms/OnboardingSwipper";
import { Button } from "components/atoms";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "navigations/types";
import { Screens } from "navigations/Screens";
import { useCallback } from "react";

const OnboardingScreen = () => {
      const { navigate } = useNavigation<NavigationProp<RootStackParamList, Screens.Onboarding>>();
	const gotoLogin = useCallback(() => {
		// hapticFeedback();
		requestAnimationFrame(() => {
			navigate(Screens.Profile);
		});
	}, [navigate]);
	
	return (
		<Layout
			className="px-0 h-full w-full justify-between bg-background-blue"
			edges={["left", "right", "bottom"]}
		>
			<View className="h-full justify-between space-y-6">
                        <OnboardingSwipper />
                        <View className="px-4">
                              <Button 
                                    variant="contained" 
                                    color="secondary" 
                                    size="lg"
                                    onPress={gotoLogin}
                              >Get started</Button>
                        </View>
			</View>
		</Layout>
	);
};

export default OnboardingScreen;
