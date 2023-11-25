import { Link } from "@react-navigation/native";
import { Layout } from "components/Layouts";
import { Button, Text, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";

export const SignUpScreen = () => {
      const goTo = useNavigateTo()

	return (
		<Layout
			className="h-full space-y-2 px-4 pt-8"
			edges={["left", "right", "top", "bottom"]}
		>
                  <View className="flex-1 justify-between space-y-4">
                        <View className="flex-1">
                              <AuthScreenHeader 
                                    title= "Sign up now!"
                                    description="Create an account now, challenge, play, and win yourself some cash."
                              />
                        </View>
                        <View className="space-y-2 items-center">
                              <Button size="lg" className="w-full" onPress={() => goTo(Screens.CreatePinScreen)}>Sign Up</Button>
                              <Link to={{ screen: "Sign In"}}>
                                    <Text className="font-interMedium text-xs">Already have an account? </Text>
                                    <Text className="text-red-100 font-interMedium text-xs">Log In</Text>
                              </Link>
                        </View>
                  </View>
		</Layout>
	);
};
