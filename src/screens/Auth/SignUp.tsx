import { Link } from "@react-navigation/native";
import clsx from "clsx";
import { AtSign, CurvedCancel, Email, GreenCheck, NgFlag, Profile, ToastError } from "components/Icons";
import { Layout } from "components/Layouts";
import { Button, Text, View } from "components/atoms";
import { AuthScreenHeader } from "components/molecules/AuthScreensHeader";
import { Checkbox } from "components/molecules/Checkbox";
import { FormInput, PasswordInput } from "components/molecules/FormInputs";
import { useAppearanceContext } from "providers/Appearance.provider";
import { useCallback, useEffect, useRef, useState } from "react";
import { ActivityIndicator, KeyboardAvoidingView, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { SignUpFormType, signUpFormSchema } from "handlers/Validators";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSignUp } from "hooks/auth/useSignUp";
import { splitWords } from "handlers/helpers/splitWords";
import { useCheckUsername } from "hooks/user/useCheckUsername";
import { debounce } from "lodash";
import { useToast } from "react-native-toast-notifications";
import { handleApiError } from "handlers/helpers/handleApiError";
import { ToastNotificationTitles } from "constants/enums";
import { focusInput } from "handlers/helpers/focusOnInputField";

export const SignUpScreen = () => {
      const { isDarkMode, colors } = useAppearanceContext();
      const toast = useToast()
      const [isChecked, setIsChecked] = useState<boolean>(false);
      const [usernameIcons, setUsernameIcons] = useState<React.ReactNode | null>(null);
      const [isValidUsertag, setIsValidUsertag] = useState<boolean>(false);
      const [firstName, setFirstName] = useState<string>("");
      const [lastName, setLastName] = useState<string>("");

      const emailInputRef = useRef(null);
      const phoneInputRef = useRef(null);
      const usernameInputRef = useRef(null);
      const passwordInputRef = useRef(null);

      const { control, 
            formState:{errors}, 
            handleSubmit,
            setValue,
            getValues,
            reset 
      } = useForm<SignUpFormType>({
		defaultValues: {
                  fullname: "",
			firstname: "",
                  lastname: "",
                  username: "",
                  phone: "",
                  email: "",
                  password: "",
                  acceptTerms: isChecked,
                  isValidUsertag: isValidUsertag
		},
		mode: "all",
		resolver: yupResolver(signUpFormSchema)
	});

      const {username } = getValues();
      const {signUp, isPending, isSuccess: isSignUpSuccess} = useSignUp();
      const {refetch, isLoading, isRefetching, isError, error, data, isSuccess} = useCheckUsername(username, getValues()["username"].length >= 3);
      const debouncedRefetch = useCallback(debounce(refetch, 500),[refetch]);

      const onSubmit = (payload: SignUpFormType) => {
            signUp({
                  first_name: payload.firstname,
                  last_name: payload.lastname,
                  email: payload.email,
                  username: payload.username,
                  phone: payload.phone,
                  password: payload.password
             })
      }

      const handleFirstNameLastName = () => {
            const names = splitWords(getValues()['fullname']);
            setFirstName(names[0] || "");
            setLastName(names[1] || ""); 
      }

      useEffect(() => {
            setValue('firstname', firstName);
            setValue('lastname', lastName);
      }, [setValue, firstName, lastName]);

      useEffect(() => {
            setValue('isValidUsertag', isValidUsertag);
      }, [isValidUsertag, setValue]);

      useEffect(() => {
            
            if (isError){
                  setIsValidUsertag(false);
                  handleApiError(error, toast.show, { data: ToastNotificationTitles.SomethingWentWrong});
                  setUsernameIcons(<ToastError fill="#B94545" width={18} height={18} />);
            }

            if (isLoading || isRefetching) {
                   setUsernameIcons(<ActivityIndicator color={isDarkMode ? colors.light : colors.dark} />);
            } else if (isSuccess) {
            if (data?.data.data.exists === true) {
                  setIsValidUsertag(false)
                  setUsernameIcons(<ToastError fill="#B94545" width={18} height={18} />);
            } else {
                  setIsValidUsertag(true)
                  setUsernameIcons(<GreenCheck width={18} height={18} />);
            }
            }

      return () => {
            debouncedRefetch.cancel();
            setUsernameIcons(null)
      };
      }, [isSuccess, isRefetching, isLoading, isError, debouncedRefetch]);

      useEffect(() => {
            handleFirstNameLastName();
            if(isSignUpSuccess) reset();
      }, [getValues()['fullname'], isSignUpSuccess]);

	return (
		<Layout
			className="h-full space-y-2 px-4 pt-14"
			edges={["left", "right", "top"]}
		>
                  <KeyboardAvoidingView
                        behavior="padding"
                        style={{
                              flex: 1
                        }}
                  >
                        <View className="flex-1 justify-between space-y-4">
                              <AuthScreenHeader 
                                    title= "Sign up now!"
                                    description="Create an account now, challenge, play, and win yourself some cash."
                              />
                                    <ScrollView
                                          showsVerticalScrollIndicator={false}
                                          showsHorizontalScrollIndicator={false}
                                    >
                                          <View className="flex-1 h-full pb-2 space-y-6">
                                                <View className="flex-1 pt-6">
                                                      <Controller
                                                            control={control}
                                                            name="fullname"
                                                            render={({ field: { onBlur, onChange, value } }) => (
                                                                  <FormInput 
                                                                        leftIcon={<Profile width={18} height={18}/>}
                                                                        value={value}
                                                                        onBlur={onBlur}
                                                                        onChangeText={(text) => {
                                                                              onChange(text)
                                                                              handleFirstNameLastName()
                                                                        }}
                                                                        placeholder="Full name"
                                                                        autocapitalize='words'
                                                                        isError={Boolean(errors.fullname || errors.firstname || errors.lastname)}
                                                                        error={errors.fullname?.message || errors.firstname?.message || errors.lastname?.message}
                                                                        returnKeyType="next"
                                                                        onSubmitEditing={()=> focusInput(emailInputRef)}
                                                                  />
                                                            )}
                                                      />
                                                      <Controller 
                                                            control={control}
                                                            name="email"
                                                            render={({field: {onBlur, onChange, value } }) => (
                                                                  <FormInput 
                                                                        ref={emailInputRef}
                                                                        leftIcon={<Email width={20} height={20}/>}
                                                                        placeholder="Email"
                                                                        inputMode="email"
                                                                        onBlur={onBlur}
                                                                        value={value}
                                                                        onChangeText={(text) => onChange(text)}
                                                                        isError={Boolean(errors.email)}
                                                                        error={errors.email?.message}
                                                                        returnKeyType="next"
                                                                        onSubmitEditing={()=> focusInput(phoneInputRef)}
                                                                  />
                                                            )}
                                                      />
                                                      <Controller 
                                                            control={control}
                                                            name="phone"
                                                            render={({field: {onBlur, onChange, value } }) => (
                                                                  <FormInput 
                                                                        ref={phoneInputRef}
                                                                        leftIcon={<NgFlag width={20} height={20}/>}
                                                                        placeholder="Phone number"
                                                                        styleInput="border-l border-gray-300"
                                                                        onBlur={onBlur}
                                                                        value={value}
                                                                        onChangeText={(text) => onChange(text)}
                                                                        isError={Boolean(errors.phone)}
                                                                        error={errors.phone?.message}
                                                                        inputMode="tel"
                                                                        returnKeyType="next"
                                                                        onSubmitEditing={()=> focusInput(usernameInputRef)}
                                                                  />
                                                            )}
                                                      />
                                                      <Controller 
                                                            control={control}
                                                            name="username"
                                                            render={({field: {onBlur, onChange, value }, formState: {errors} }) => (
                                                                  <FormInput 
                                                                        ref={usernameInputRef}
                                                                        leftIcon={<AtSign width={18} height={20}/>}
                                                                        rightIcon={usernameIcons}
                                                                        placeholder="User tag"
                                                                        onBlur={onBlur}
                                                                        value={value}
                                                                        onChangeText={(text) => {
                                                                              onChange(text)
                                                                              if(getValues()["username"].length >= 3){
                                                                                    debouncedRefetch()
                                                                              }else{
                                                                                    setUsernameIcons(null)
                                                                              }
                                                                        }}
                                                                        isError={Boolean(errors.username)}
                                                                        error={errors.username?.message}
                                                                        returnKeyType="next"
                                                                        onSubmitEditing={()=> focusInput(passwordInputRef)}
                                                                  />
                                                            )}
                                                      />
                                                      <Controller 
                                                            control={control}
                                                            name="password"
                                                            render={({field: {onBlur, onChange, value } }) => (
                                                                  <PasswordInput
                                                                        passwordRef={passwordInputRef}
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
                                                                  {errors.acceptTerms? <CurvedCancel height={16} width={16}/> : null}
                                                      </View>
                                                </View>
                                                <View className="space-y-2 items-center pb-4">
                                                      <Button 
                                                            size="lg" 
                                                            className="w-full mt-4 mb-4" 
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
                                    </ScrollView>
                        </View>
                  </KeyboardAvoidingView>
		</Layout>
	);
};
