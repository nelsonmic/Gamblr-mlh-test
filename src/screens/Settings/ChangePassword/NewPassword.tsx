import { Layout } from "components/Layouts"
import { Button, View } from "components/atoms"
import { PasswordInput } from "components/molecules/FormInputs";
import { PageHeader } from "components/organisms/PageHeader"
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";
import { KeyboardAvoidingView } from "react-native";

export const NewPasswordScreen = () => {

	const {goTo} = useNavigateTo();
      return (
            <Layout
			className="h-full space-y-2 px-4 pt-4"
			edges={["left", "right", "bottom"]}
            >
                  <KeyboardAvoidingView
                        behavior="height"
                        style={{
                              flex: 1
                        }}
                  >
                        <View className="flex-1 justify-between space-y-4">
                              <View className="flex-1">
                                    <PageHeader title="New Password" description="Create a new password" />
                                    <View className="mt-8">
                                          <PasswordInput 
                                                placeholder="New Password"
                                          />
                                    </View>
                              </View>
                              <View>
                                    <Button 
                                          size="lg" 
                                          onPress={() => goTo(Screens.ConfirmNewPassword)}
                                    >Update Password</Button>
                              </View>
                        </View>
                  </KeyboardAvoidingView>
            </Layout>
      )
}