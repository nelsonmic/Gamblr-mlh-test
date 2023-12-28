import { yupResolver } from "@hookform/resolvers/yup";
import { Layout } from "components/Layouts"
import { Button, View } from "components/atoms"
import { PasswordInput } from "components/molecules/FormInputs";
import { PageHeader } from "components/organisms/PageHeader"
import { NewPasswordFormType, newPasswordSchema } from "handlers/Validators";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAvoidingView } from "react-native";

type Props = {
      route: any
}
export const NewPasswordScreen: FC<Props> = ({ route }) => {
      const { old_password } = route.params.data

      const {
            formState:{errors},
            handleSubmit,
            control
      } = useForm<NewPasswordFormType>({
            defaultValues: {
                  old_password,
                  new_password: ""
            },
            mode: "all",
            resolver: yupResolver(newPasswordSchema)
      })
	const { goTo } = useNavigateTo();

      const onSubmit = (payload: NewPasswordFormType) => {
            goTo(Screens.ConfirmNewPassword, {
                  data: {
                        old_password: payload.old_password, 
                        new_password: payload.new_password
                  }
            })
      }
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
                                          <Controller 
                                                name="new_password"
                                                control={control}
                                                render= {({ field: { value, onBlur, onChange}}) => (
                                                      <PasswordInput 
                                                            placeholder="New Password"
                                                            value={value}
                                                            onBlur={onBlur}
                                                            onChangeText={(text) => onChange(text)}
                                                            isError={!!(errors.new_password)}
                                                            error={errors.new_password?.message}
                                                      />
                                                )}
                                          />
                                    </View>
                              </View>
                              <View>
                                    <Button 
                                          size="lg" 
                                          onPress={handleSubmit(onSubmit)}
                                    >Update Password</Button>
                              </View>
                        </View>
                  </KeyboardAvoidingView>
            </Layout>
      )
}