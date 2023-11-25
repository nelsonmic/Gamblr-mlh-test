import { Layout } from "components/Layouts";
import { Button, Text, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";
import { Link } from '@react-navigation/native';

export const SignInScreen = () => {
      const goTo = useNavigateTo()
	return (
		<Layout
			className="h-full space-y-2 px-4 pt-8"
			edges={["left", "right", "top", "bottom"]}
		>
                  <View className="flex-1 justify-between space-y-4">
                        <View className="flex-1">
                              <AuthScreenHeader 
                                    title= "Sign In"
                                    description="Log into your account"
                              />
                        </View>
                        <View className="space-y-2 items-center">
                              <Button size="lg" className="w-full" onPress={() => goTo(Screens.SignUpScreen)}>Sign In</Button>
                              <Link to={{ screen: "Sign Up"}}>
                                    <Text className="font-interMedium text-xs">Don't have an account?</Text>
                                    <Text className="text-red-100 font-interMedium text-xs">Sign Up</Text>
                              </Link>
                        </View>
                  </View>
		</Layout>
	);
};
