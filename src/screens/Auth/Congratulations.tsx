import { Layout } from "components/Layouts";
import { Button, Text, View } from "components/atoms";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";

export const CongratulationsScreen = () => {
      const goTo = useNavigateTo()
	return (
		<Layout
			className="h-full space-y-2 px-4 pt-8"
			edges={["left", "right", "top", "bottom"]}
		>
                  <View className="flex-1 justify-between space-y-4">
                        <View className="flex-1 items-center justify-center">
                              <View>
                                    <Text className="text-black-100 font-[700] text-3xl text-center font-cabinetGrotesk">Congratulations!</Text>
                                    <Text className="font-interRegular text-gray-200 text-sm">Your account has been created successfully.</Text>
                              </View>
                        </View>
                        <Button size="lg" onPress={()=> goTo(Screens.CreatePinScreen)}>Continue</Button>
                  </View>
		</Layout>
	);
};
