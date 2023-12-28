import { yupResolver } from "@hookform/resolvers/yup";
import { Layout } from "components/Layouts"
import { Button, View } from "components/atoms"
import { PasswordInput } from "components/molecules/FormInputs";
import { PageHeader } from "components/organisms/PageHeader"
import { ConfirmPasswordType, confirmPasswordSchema } from "handlers/Validators";
import { useUpdatePassword } from "hooks/settings/useUpdatePassword";
import { FC, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAvoidingView } from "react-native";

type Props = {
      route: any
}

export const ConfirmNewPasswordScreen: FC<Props> = ({ route }) => {
      const { new_password, old_password } = route.params.data;
      const { updatePassword, isPending, isSuccess, isError } = useUpdatePassword();
      const {
            control, 
            formState: {errors},
            handleSubmit,
            reset
            } = useForm<ConfirmPasswordType>({
            defaultValues: {
                  old_password,
                  new_password,
                  confirm_password: ""
            },
            mode: "all",
            resolver: yupResolver(confirmPasswordSchema)
      })

      const onSubmit = (payload: ConfirmPasswordType) => updatePassword({
            old_password: payload.old_password,
            new_password: payload.new_password
      })

      useEffect(() => {
            reset();
      }, [isSuccess, isError])
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
                                    <PageHeader title="Confirm Password" description="Enter your new password again" />
                                    <View className="mt-8">
                                    <Controller 
                                          control={control}
                                          name="confirm_password"
                                          render={({field: {onBlur, onChange, value}}) => (
                                                <PasswordInput 
                                                      placeholder="Confirm Password"
                                                      onBlur={onBlur}
                                                      value={value}
                                                      onChangeText={(text) => onChange(text)}
                                                      isError={!!(errors.confirm_password)}
                                                      error={errors.confirm_password?.message}
                                                />
                                          )}
                                    />
                                    </View>
                              </View>
                              <View>
                                    <Button 
                                          size="lg" 
                                          onPress={handleSubmit(onSubmit)}
                                          isLoading={isPending}
                                    >Update Password</Button>
                              </View>
                        </View>
                  </KeyboardAvoidingView>
            </Layout>
      )
}