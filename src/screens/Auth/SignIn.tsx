import { Layout } from "components/Layouts";
import { Button, Text, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";
import { Link } from '@react-navigation/native';
import { FormInput, PasswordInput } from "components/molecules/FormInputs";
import { EyeClosed, Lock, Profile } from "components/Icons";
import clsx from "clsx";
import { useAppearanceContext } from "providers/Appearance.provider";

export const SignInScreen = () => {
      const { isDarkMode } = useAppearanceContext(); 
	return (
		<Layout
			className="h-full space-y-2 px-4 pt-14"
			edges={["left", "right", "top", "bottom"]}
		>
                  <View className="flex-1 justify-between space-y-4">
                        <View className="flex-1 space-y-14">
                              <AuthScreenHeader 
                                    title= "Sign In"
                                    description="Log into your account"
                              />
                              <View>
                                    <FormInput
                                          leftIcon={<Profile height={18} width={18} />}
                                          placeholder="Email / tag"
                                    />
                                    <PasswordInput 
                                          placeholder="Password"
                                    />
                                    <Link to={{ screen: "Forgot Password"}}>
                                          <Text className={clsx("font-interMedium text-xs", {
                                                "text-white-100" : isDarkMode
                                          })}>Forgot password? Reset</Text>
                                    </Link>
                              </View>
                        </View>
                        <View className="space-y-2 items-center">
                              <Button size="lg" className="w-full">Sign In</Button>
                              <Link to={{ screen: "Sign Up"}}>
                                    <Text className={clsx("font-interMedium text-black-100 text-xs", {
                                          "text-white-100" : isDarkMode
                                    })}>Don't have an account? Sign Up</Text>
                              </Link>
                        </View>
                  </View>
		</Layout>
	);
};
