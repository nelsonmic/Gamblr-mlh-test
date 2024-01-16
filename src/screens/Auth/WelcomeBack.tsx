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
import { useAppearanceContext } from "providers/Appearance.provider";
// import { useBiometricsContext } from "providers/Biometrics.provider";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { TouchableOpacity } from "react-native";
import { SignInUserPayload } from "types/structs";

export const WelcomeBackScreen = () => {
      const [user, setUser] = useState<SignInUserPayload | null>(null);
      const { isDarkMode } = useAppearanceContext();
      // const {handleBiometryAuth, isBiometricsEnabled} = useBiometricsContext();
      const {signIn, isPending} = useSignIn();
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

      const onSubmit = (payload: SignInFormType) => signIn(payload)

      const onSubmitBiometrics = () => {
            const email = user?.email || "";
            const password = user?.password || "";
            // handleBiometryAuth(() => {
            //       signIn({email, password})
            // })
      }

      useEffect(()=> {
            (async () =>{
                  try{
                        let value = await getEncryptItemFromStorage(StorageKeys.WelcomeUser)
                        setUser(value);
                        setValue("email", value.email)
                  }catch(error){
                  }
            })()
      }, [getEncryptItemFromStorage, setValue, setUser])
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
                                                name=""
                                                tag={user?.username}
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
                              {/* {
                                    isBiometricsEnabled ? (
                                          <TouchableOpacity 
                                                className="items-center"
                                                onPress={onSubmitBiometrics}
                                          >
                                                <Scan width={55} height={55}/>
                                                <Text className={clsx("text-center text-gray-200 font-interRegular mt-2", {
                                                      "text-white-100" : isDarkMode
                                                })}>Use biometrics</Text>
                                          </TouchableOpacity>
                                    ): null
                              } */}
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
