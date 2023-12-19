import { Layout } from "components/Layouts"
import { Button, View } from "components/atoms"
import { PageHeader } from "components/organisms/PageHeader"
import { useNavigateTo } from "hooks/useNavigateTo";
import { usePinCodeEntry } from "hooks/usePinCodeEntry";
import { Screens } from "navigations/Screens";

export const ConfirmNewPinScreen = () => {
	const {value, PinInput, PinKeypad} = usePinCodeEntry({
		pinLength: 4,
	});
	const {goTo} = useNavigateTo();
      return (
            <Layout
			className="h-full space-y-2 px-4 pt-4"
			edges={["left", "right", "bottom"]}
            >
			<View className="flex-1 justify-between space-y-4">
				<View className="flex-1">
					<PageHeader title="Confirm PIN" description="Enter your new PIN again" />
                              <View className="mt-8">
                                    <PinInput />
                              </View>
				</View>
                        <View>
                              <PinKeypad />
                              <Button 
                                    size="lg" 
                                    onPress={() => goTo(Screens.SuccessScreen, {
                                          data: {
                                                title: "Pin updated successfully!",
                                                description: "You've successfully updated your Gamblr transaction PIN. If you didn't make this change, please contact support immediately. Stay secure and game on!",
                                                reroute: Screens.Settings
                                          }
                                    })}
                              >Update Pin</Button>
                        </View>
                  </View>

            </Layout>
      )
}