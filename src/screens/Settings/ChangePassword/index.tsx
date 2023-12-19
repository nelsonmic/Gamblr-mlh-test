import { Layout } from "components/Layouts"
import { Button, View } from "components/atoms"
import { PasswordInput } from "components/molecules/FormInputs";
import { PageHeader } from "components/organisms/PageHeader"
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";

export const ChangePasswordScreen = () => {

	const {goTo} = useNavigateTo();
      return (
            <Layout
			className="h-full space-y-2 px-4 pt-4"
			edges={["left", "right", "bottom"]}
            >
			<View className="flex-1 justify-between space-y-4">
				<View className="flex-1">
					<PageHeader title="Change Password" description="Input your current password here." />
                              <View className="mt-8">
                                    <PasswordInput 
                                          placeholder="Current Password"
                                    />
                              </View>
				</View>
                        <View>
                              <Button 
                                    size="lg" 
                                    onPress={() => goTo(Screens.NewPassword)}
                              >Update Password</Button>
                        </View>
                  </View>

            </Layout>
      )
}