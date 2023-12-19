import { Layout } from "components/Layouts";
import { Button, Text, View } from "components/atoms";
import { PageHeader } from "components/organisms/PageHeader";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";
import { Image } from "react-native";

export const TwoFaHomeScreen = () => {
	const {goTo} = useNavigateTo();

	return (
		<Layout
			className="h-full space-y-2 px-4 pt-4"
			edges={["left", "right", "bottom"]}
		>
			<View className="flex-1 justify-between space-y-4">
				<View className="flex-1">
					<PageHeader title="Two-factor Authentication" description="Strengthen account security" />
                              <View className="flex-1 mt-8 items-center justify-center">
                                    <View className="items-center space-y-4">
                                          <Image
                                                source={require("../../../assets/images/twoFa.png")}
                                                style={{
                                                      resizeMode: "cover",
                                                      width: 250,
                                                      height: 250,
                                                      objectFit:"cover"
                                                }}
                                          />
                                          <Text className="font-interRegular text-center text-sm text-gray-300">
                                                Enable Two-Factor Authentication (2FA) to provide an additional layer of security for your Gamblr account. Once enabled, you will be required to enter a unique verification code sent to your registered email or mobile device every time you log in
                                          </Text>
                                    </View>
                              </View>
				</View>
                        <Button 
                              size="lg" 
                              onPress={() => goTo(Screens.TwoFaOtp)}
                        >Next</Button>
			</View>
		</Layout>
	);
};
