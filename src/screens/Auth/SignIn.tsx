import { Layout } from "components/Layouts";
import { Button, Text, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";
import { Link } from '@react-navigation/native';
import { FormInput, PasswordInput } from "components/molecules/FormInputs";
import { EyeClosed, Lock, Profile } from "components/Icons";
import clsx from "clsx";
import { useAppearanceContext } from "providers/Appearance.provider";
import { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { SignInFormType, signInFormSchema } from "handlers/Validators";
import { yupResolver } from "@hookform/resolvers/yup";
import { focusInput } from "handlers/helpers/focusOnInputField";
import { useSignIn } from "hooks/auth/useSignIn";
import { useGetDeviceInfo } from "hooks/useGetDeviceInfo";

export const SignInScreen = () => {
      const { isDarkMode } = useAppearanceContext();
      const {signIn, isPending} = useSignIn() 
      const {device} = useGetDeviceInfo()
      const passwordInputRef = useRef(null);

      const {control, 
            formState:{errors},
            handleSubmit,
      } = useForm<SignInFormType>({
            defaultValues: {
                  email: "",
                  password: ""
            },
            mode: "all",
            resolver: yupResolver(signInFormSchema)
      })

      const onSubmit = (payload: SignInFormType) => {
            signIn({
                  email: payload.email,
                  password: payload.password,
                  device: {
                        device_id: device.device_id,
                        device_name: device.device_name,
                        os: device.os,
                        version: device.version,
                        platform: device.platform
                  }
            })
      }

	return (
		<Layout
			className="h-full space-y-2 px-4 pt-14"
			edges={["left", "right", "top", "bottom"]}
		>
                  <View className="flex-1 justify-between space-y-4">
                        <View className="flex-1 space-y-14">
                              <AuthScreenHeader 
                                    title= "Sign In"
                                    description="Log into your account"
                              />
                              <View>
                                    <Controller 
                                          control={control}
                                          name="email"
                                          render={({field: {onBlur, onChange, value}}) => (
                                                <FormInput
                                                      leftIcon={<Profile height={18} width={18} />}
                                                      placeholder="Email / tag"
                                                      inputMode="email"
                                                      onBlur={onBlur}
                                                      value={value}
                                                      onChangeText={(text) => onChange(text)}
                                                      isError={Boolean(errors.email)}
                                                      error={errors.email?.message}
                                                      returnKeyType="next"
                                                      onSubmitEditing={()=> focusInput(passwordInputRef)}
                                                />
                                          )}
                                    />
                                    <Controller 
                                          control={control}
                                          name="password"
                                          render={({field: {onBlur, onChange, value}}) => (
                                                <PasswordInput 
                                                      placeholder="Password"
                                                      passwordRef={passwordInputRef}
                                                      onBlur={onBlur}
                                                      value={value}
                                                      onChangeText={(text) => onChange(text)}
                                                      isError={Boolean(errors.password)}
                                                      error={errors.password?.message}
                                                      returnKeyType="done"
                                                />
                                          )}
                                    />

                                    <Link to={{ screen: "Forgot Password"}}>
                                          <Text className={clsx("font-interMedium text-xs", {
                                                "text-white-100" : isDarkMode
                                          })}>Forgot password? Reset</Text>
                                    </Link>
                              </View>
                        </View>
                        <View className="space-y-2 items-center">
                              <Button 
                                    size="lg" 
                                    className="w-full"
                                    onPress={handleSubmit(onSubmit)}
                                    isLoading={isPending}
                              >Sign In</Button>
                              <Link to={{ screen: "Sign Up"}}>
                                    <Text className={clsx("font-interMedium text-black-100 text-xs", {
                                          "text-white-100" : isDarkMode
                                    })}>Don't have an account? Sign Up</Text>
                              </Link>
                        </View>
                  </View>
		</Layout>
	);
};
