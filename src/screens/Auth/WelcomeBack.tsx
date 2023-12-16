import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "@react-navigation/native";
import clsx from "clsx";
import { Scan } from "components/Icons";
import { Layout } from "components/Layouts";
import { Button, Text, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";
import { Avatar } from "components/molecules/Avatar";
import { PasswordInput } from "components/molecules/FormInputs";
import { StorageKeys } from "constants/enums";
import { SignInFormType, signInFormSchema } from "handlers/Validators";
import { useSignIn } from "hooks/auth/useSignIn";
import { useEncryptedStorage } from "hooks/useEncryptedStorage";
import { useGetDeviceInfo } from "hooks/useGetDeviceInfo";
import { useAppearanceContext } from "providers/Appearance.provider";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

export const WelcomeBackScreen = () => {
      const { isDarkMode } = useAppearanceContext();
      const {signIn, isPending} = useSignIn();
      const {device} = useGetDeviceInfo()
      const { getEncryptItemFromStorage } = useEncryptedStorage();

      const {control, 
            formState:{errors},
            handleSubmit,
            setValue
      } = useForm<SignInFormType>({
            defaultValues: {
                  email: "",
                  password: "",
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

      useEffect(()=> {
            (async () =>{
                  try{
                        let value = await getEncryptItemFromStorage(StorageKeys.WelcomeUser)
                        setValue("email", value)
                  }catch(error){

                  }
            })()
      }, [])
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
                                          <Controller 
                                                control={control}
                                                name="password"
                                                render={({field: {onBlur, onChange, value}}) => (
                                                      <PasswordInput 
                                                            placeholder="Password"
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
                              <View className="items-center ">
                                    <Scan width={55} height={55}/>
                                    <Text className={clsx("text-center text-gray-200 font-interRegular mt-2", {
                                          "text-white-100" : isDarkMode
                                    })}>Use biometrics</Text>
                              </View>
                        </View>
                        <Button 
                              size="lg"
                              isLoading={isPending}
                              onPress={handleSubmit(onSubmit)}
                        >Login</Button>
                  </View>
		</Layout>
	);
};
