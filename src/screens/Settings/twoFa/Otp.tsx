import clsx from "clsx";
import { Layout } from "components/Layouts";
import { Button, Text, View } from "components/atoms";
import { PageHeader } from "components/organisms/PageHeader";
import { useNavigateTo } from "hooks/useNavigateTo";
import { usePinCodeEntry } from "hooks/usePinCodeEntry";
import { Screens } from "navigations/Screens";
import { useAppearanceContext } from "providers/Appearance.provider";
import { FC } from "react";

type Props = {
      route: any
}
export const TwoFaOtpScreen: FC<Props> = ({ route }) => {
      const { data } = route.params;
      const {goTo} = useNavigateTo()
      const {isDarkMode } = useAppearanceContext();
      const {value, PinInput, PinKeypad} = usePinCodeEntry({
            pinLength: 6,
            showBiometrics: false
      })
	return (
		<Layout
			className="h-full space-y-2 px-4 pt-4"
			edges={["left", "right", "bottom"]}
		>
                  <View className="flex-1 justify-between space-y-4">
                        <View className="flex-1">
                              <View>
                                    <PageHeader
                                          title="Enter OTP"
                                    />
                                    <Text className={clsx("mt-2 text-sm font-interRegular text-gray-300", {
                                          "text-white-100" : isDarkMode
                                    })}>We sent a verification code to your registered email
                                           <Text className={clsx("text-sm font-interBold text-black-100", {
                                                "text-white-100": isDarkMode
                                           })}> {data.contact}.</Text> Enter the code below to proceed.
                                    </Text>
                              </View>
                              <View className="mt-8">
                                    <PinInput />
                              </View>
                        </View>
                        <View>
                              <PinKeypad />
                              <Button size="lg" onPress={() => goTo(Screens.SuccessScreen, {
                                    data: {
                                          title: "Two Factor Authentication Enabled",
                                          description: "Congratulations! You have successfully activated Two-Factor Authentication (2FA) for your Gamblr account. Your account is now fortified with an extra layer of security. Enjoy your gaming experience with enhanced protection.",
                                          reroute: Screens.Settings,
                                    }
                              })}>Next</Button>
                        </View>
                  </View>
		</Layout>
	);
};
