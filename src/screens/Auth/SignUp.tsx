import { Link } from "@react-navigation/native";
import clsx from "clsx";
import { AtSign, Email, EyeClosed, GreenCheck, Lock, NgFlag, Profile } from "components/Icons";
import { Layout } from "components/Layouts";
import { Button, Text, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";
import { FormInput } from "components/molecules/FormInputs";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";
import { useAppearanceContext } from "providers/Appearance.provider";

export const SignUpScreen = () => {
      const { isDarkMode } = useAppearanceContext();
      const goTo = useNavigateTo()

	return (
		<Layout
			className="h-full space-y-2 px-4 pt-14"
			edges={["left", "right", "top", "bottom"]}
		>
                  <View className="flex-1 justify-between space-y-4">
                        <View className="flex-1">
                              <AuthScreenHeader 
                                    title= "Sign up now!"
                                    description="Create an account now, challenge, play, and win yourself some cash."
                              />
                              <View className="mt-8">
                                    <FormInput 
                                          leftIcon={<Profile width={18} height={18}/>}
                                          placeholder="Full name"
                                    />
                                    <FormInput 
                                          leftIcon={<Email width={20} height={20}/>}
                                          placeholder="Email"
                                          inputMode="email"
                                    />
                                    <FormInput 
                                          leftIcon={<NgFlag width={20} height={20}/>}
                                          placeholder="Phone number"
                                          styleInput="border-l border-gray-300"
                                    />
                                    <FormInput 
                                          leftIcon={<AtSign width={18} height={20}/>}
                                          rightIcon={<GreenCheck width={18} height={18}/>}
                                          placeholder="User tag"
                                    />
                                    <FormInput
                                          leftIcon={<Lock height={18} width={18} />}
                                          rightIcon={<EyeClosed height={18} width={18} />}
                                          placeholder="Password"
                                          secureTextEntry
                                    />
                                    <View>
                                           <Link to={{ screen: "Sign In"}}>
                                                <Text className={clsx("font-interMedium text-black-100 text-xs", {
                                                      "text-white-100" : isDarkMode
                                                })}>I accept the Terms and Conditions</Text>
                                           </Link>  
                                    </View>
                              </View>
                        </View>
                        <View className="space-y-2 items-center">
                              <Button size="lg" className="w-full" onPress={() => goTo(Screens.VerifyScreen)}>Sign Up</Button>
                              <Link to={{ screen: "Sign In"}}>
                                    <Text className={clsx("font-interMedium text-xs", {
                                          "text-white-100" : isDarkMode
                                    })}>Already have an account? Log in</Text>
                              </Link>
                        </View>
                  </View>
		</Layout>
	);
};
