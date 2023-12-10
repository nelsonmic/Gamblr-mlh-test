import { Link } from "@react-navigation/native";
import clsx from "clsx";
import { AtSign, Email, GreenCheck, NgFlag, Profile } from "components/Icons";
import { Layout } from "components/Layouts";
import { Button, Text, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";
import { Checkbox } from "components/molecules/Checkbox";
import { FormInput, PasswordInput } from "components/molecules/FormInputs";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";
import { useAppearanceContext } from "providers/Appearance.provider";
import { useState } from "react";
import { ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { SignUpFormType, signUpFormSchema } from "handlers/validators";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSignUp } from "hooks/auth/useSignUp";
import { splitWords } from "handlers/helpers/splitWords";

export const SignUpScreen = () => {
      const { isDarkMode } = useAppearanceContext();
     
      const {signUp, isPending} = useSignUp();
      const [isChecked, setIsChecked] = useState<boolean>(false);
      // const goTo = useNavigateTo()

      const { control, 
            formState:{errors}, 
            handleSubmit, 
      } = useForm<SignUpFormType>({
		defaultValues: {
			fullname: "",
                  username: "",
                  phone: "",
                  email: "",
                  password: "",
                  acceptTerms: isChecked,
		},
		mode: "all",
		resolver: yupResolver(signUpFormSchema)
	});

      const onSubmit = (payload: SignUpFormType) => {
            console.log(payload);
            const names = splitWords(payload.fullname)
            signUp({
                  first_name: names[0] || "",
                  last_name: names[1] || "",
                  email: payload.email,
                  username: payload.username,
                  phone: payload.phone,
                  password: payload.password
             })
      }

	return (
		<Layout
			className="h-full space-y-2 px-4 pt-14"
			edges={["left", "right", "top", "bottom"]}
		>
                  <View className="flex-1 justify-between space-y-4">
                        <View className="flex-1 space-y-8">
                              <AuthScreenHeader 
                                    title= "Sign up now!"
                                    description="Create an account now, challenge, play, and win yourself some cash."
                              />
                              <ScrollView
                                    showsVerticalScrollIndicator={false}
                                    showsHorizontalScrollIndicator={false}
                              >
                                    <View className="pt-6">
                                          <Controller
                                                control={control}
                                                name="fullname"
                                                render={({ field: { onBlur, onChange, value } }) => (
                                                      <FormInput 
                                                            leftIcon={<Profile width={18} height={18}/>}
                                                            value={value}
                                                            onBlur={onBlur}
                                                            onChangeText={(text) => onChange(text)}
                                                            placeholder="Full name"
                                                            isError={Boolean(errors.fullname)}
                                                            error={errors.fullname?.message}
                                                      />
                                                )}
                                          />
                                          <Controller 
                                                control={control}
                                                name="email"
                                                render={({field: {onBlur, onChange, value } }) => (
                                                      <FormInput 
                                                            leftIcon={<Email width={20} height={20}/>}
                                                            placeholder="Email"
                                                            inputMode="email"
                                                            onBlur={onBlur}
                                                            value={value}
                                                            onChangeText={(text) => onChange(text)}
                                                            isError={Boolean(errors.email)}
                                                            error={errors.email?.message}
                                                      />
                                                )}
                                          />
                                          <Controller 
                                                control={control}
                                                name="phone"
                                                render={({field: {onBlur, onChange, value } }) => (
                                                      <FormInput 
                                                            leftIcon={<NgFlag width={20} height={20}/>}
                                                            placeholder="Phone number"
                                                            styleInput="border-l border-gray-300"
                                                            onBlur={onBlur}
                                                            value={value}
                                                            onChangeText={(text) => onChange(text)}
                                                            isError={Boolean(errors.phone)}
                                                            error={errors.phone?.message}
                                                      />
                                                )}
                                          />
                                          <Controller 
                                                control={control}
                                                name="username"
                                                render={({field: {onBlur, onChange, value } }) => (
                                                      <FormInput 
                                                            leftIcon={<AtSign width={18} height={20}/>}
                                                            rightIcon={<GreenCheck width={18} height={18}/>}
                                                            placeholder="User tag"
                                                            onBlur={onBlur}
                                                            value={value}
                                                            onChangeText={(text) => onChange(text)}
                                                            isError={Boolean(errors.username)}
                                                            error={errors.username?.message}
                                                      />
                                                )}
                                          />
                                          <Controller 
                                                control={control}
                                                name="password"
                                                render={({field: {onBlur, onChange, value } }) => (
                                                      <PasswordInput
                                                            placeholder="Password"
                                                            onBlur={onBlur}
                                                            value={value}
                                                            onChangeText={(text) => onChange(text)}
                                                            isError={Boolean(errors.password)}
                                                            error={errors.password?.message}
                                                      />
                                                )}
                                          />
                                    
                                          <View className="flex-row items-center space-x-2">
                                                <Controller 
                                                      control={control}
                                                      name="acceptTerms"
                                                      render={({field: {onChange}}) => (
                                                            <Checkbox isChecked={isChecked} 
                                                                  onCheck={() => {
                                                                        setIsChecked(!isChecked);
                                                                        onChange(!isChecked);
                                                                  }}
                                                            />
                                                      )}
                                                />
                                                <Link to={{ screen: "Sign In"}}>
                                                      <Text className={clsx("font-interMedium text-black-100 text-xs", {
                                                            "text-white-100" : isDarkMode
                                                      })}>I accept the Terms and Conditions</Text>
                                                </Link>  
                                          </View>
                                    </View>
                              </ScrollView>
                        </View>
                        <View className="space-y-2 items-center">
                              <Button 
                                    size="lg" 
                                    className="w-full" 
                                    onPress={handleSubmit(onSubmit)}
                                    isLoading={isPending}
                              >Sign Up</Button>
                              <Link to={{ screen: "Sign In"}}>
                                    <Text className={clsx("font-interMedium text-xs", {
                                          "text-white-100" : isDarkMode
                                    })}>Already have an account? Log in</Text>
                              </Link>
                        </View>
                  </View>
		</Layout>
	);
};
