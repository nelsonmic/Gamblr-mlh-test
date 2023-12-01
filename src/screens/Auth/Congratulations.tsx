import { Layout } from "components/Layouts";
import { Button, Text, View } from "components/atoms";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";
import LottieView from "lottie-react-native"
import clsx from "clsx";
import { useAppearanceContext } from "providers/Appearance.provider";

export const CongratulationsScreen = () => {
      const { isDarkMode } = useAppearanceContext();
      const goTo = useNavigateTo()
	return (
		<Layout
			className="h-full space-y-2 px-4 pt-8"
			edges={["left", "right", "top", "bottom"]}
		>
                  <View className="flex-1 justify-between space-y-4">
                        <View className="flex-1 items-center justify-center">
                              <LottieView 
                                    source={"../../assets/lottie/sign-up-success.json"}
                                    style={{
                                          width: "50%",
                                          aspectRatio: 1
                                    }}
                                    autoPlay
                                    loop
                              />
                              <View>
                                    <Text className={clsx("text-black-100 font-[700] text-3xl text-center font-cabinetGrotesk", {
                                          "text-white-100" : isDarkMode
                                    })}>Congratulations!</Text>
                                    <Text className={clsx("font-interRegular text-gray-200 text-sm", {
                                          "text-white-100" : isDarkMode
                                    })}>Your account has been created successfully.</Text>
                              </View>
                        </View>
                        <Button size="lg" onPress={()=> goTo(Screens.CreatePinScreen)}>Continue</Button>
                  </View>
		</Layout>
	);
};
