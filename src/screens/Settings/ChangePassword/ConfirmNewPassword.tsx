import { Layout } from "components/Layouts"
import { Button, View } from "components/atoms"
import { PasswordInput } from "components/molecules/FormInputs";
import { PageHeader } from "components/organisms/PageHeader"
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";

export const ConfirmNewPasswordScreen = () => {

	const { reset } = useNavigateTo();

      const handleNavigate = () => {
            reset({
                  index: 0,
                  routes: [{
                        name: Screens.SuccessScreen, 
                        params: {
                              data:{
                                    title: "Password updated successfully!",
                                    description: "You've successfully updated your password. If you didn't make this change, please contact support immediately. Stay secure and game on!",
                                    reroute: Screens.Settings
                              }
                        } 
                  }]
            })
      }
      return (
            <Layout
			className="h-full space-y-2 px-4 pt-4"
			edges={["left", "right", "bottom"]}
            >
			<View className="flex-1 justify-between space-y-4">
				<View className="flex-1">
					<PageHeader title="Confirm Password" description="Enter your new password again" />
                              <View className="mt-8">
                                    <PasswordInput 
                                          placeholder="Confirm Password"
                                    />
                              </View>
				</View>
                        <View>
                              <Button 
                                    size="lg" 
                                    onPress={handleNavigate}
                              >Update Password</Button>
                        </View>
                  </View>

            </Layout>
      )
}