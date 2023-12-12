import { Link } from "@react-navigation/native";
import clsx from "clsx";
import { EyeClosed, Lock, Scan } from "components/Icons";
import { Layout } from "components/Layouts";
import { Button, Text, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";
import { Avatar } from "components/molecules/Avatar";
import { FormInput } from "components/molecules/FormInputs";
import { useAppearanceContext } from "providers/Appearance.provider";

export const WelcomeBackScreen = () => {
      const { isDarkMode } = useAppearanceContext();
	return (
		<Layout
			className="h-full space-y-2 px-4 pt-8"
			edges={["left", "right", "top", "bottom"]}
		>
                  <View className="flex-1 justify-between space-y-4">
                        <View className="flex-1 space-y-24">
                              <View>
                                    <View className="items-center">
                                          <Avatar 
                                                size="lg"
                                                labelPosition="bottom"
                                                imgSrc={require("../../assets/images/onboarding-1.jpg")}
                                          />
                                          <AuthScreenHeader
                                                textsPosition="center"
                                                title= "Welcome back!"
                                                description="Log into your account"
                                          />
                                    </View>
                                    <View className="mt-12">
                                          <FormInput
                                                leftIcon={<Lock height={18} width={18} />}
                                                rightIcon={<EyeClosed height={18} width={18} />}
                                                placeholder="Password"
                                                placeholderTextColor={"#515C6C"}
                                                secureTextEntry
                                          />
                                          <Link to={{ screen: "Forgot Password"}}>
                                                <Text className={clsx("font-interMedium text-xs", {
                                                      "text-white-100" : isDarkMode
                                                })}>Forgot password? Reset</Text>
                                          </Link>
                                    </View>
                              </View>
                              <View className="items-center ">
                                    <Scan width={55} height={55}/>
                                    <Text className={clsx("text-center text-gray-200 font-interRegular mt-2", {
                                          "text-white-100" : isDarkMode
                                    })}>Use biometrics</Text>
                              </View>
                        </View>
                        <Button size="lg">Login</Button>
                  </View>
		</Layout>
	);
};
