import { yupResolver } from "@hookform/resolvers/yup";
import { Layout } from "components/Layouts"
import { Button, View } from "components/atoms"
import { PasswordInput } from "components/molecules/FormInputs";
import { PageHeader } from "components/organisms/PageHeader"
import { CurrentPasswordFormType, currentPasswordSchema } from "handlers/Validators";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform } from "react-native";

export const ChangePasswordScreen = () => {
      const { control,
            formState:{errors},
            handleSubmit,
      } = useForm<CurrentPasswordFormType>({
            defaultValues: {
                 old_password: ""
            },
            mode: "all",
            resolver: yupResolver(currentPasswordSchema)
      })

      const { goTo } = useNavigateTo();

	const onSubmit = (payload: CurrentPasswordFormType) => {
            goTo(Screens.NewPassword, {
                  data: {
                        old_password: payload.old_password
                  }
            })
      }
      
      return (
            <Layout
			className="h-full space-y-2 px-4 pt-4"
			edges={["left", "right", "bottom"]}
            >
                  <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                        style={{ flex: 1 }}
                        keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : 0}
                  >
                        <View className="flex-1 justify-between">
                              <View className="flex-1">
                                    <PageHeader title="Change Password" description="Input your current password here." />
                                    <View className="mt-8">
                                    <Controller 
                                          control={control}
                                          name="old_password"
                                          render={({field: {onBlur, onChange, value}}) => (
                                                <PasswordInput 
                                                      placeholder="Current Password"
                                                      onBlur={onBlur}
                                                      value={value}
                                                      onChangeText={(text) => onChange(text)}
                                                      isError={!!(errors.old_password)}
                                                      error={errors.old_password?.message}
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