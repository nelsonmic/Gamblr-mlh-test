import React, { Ref } from "react";
import { FC, useState } from "react";
import { FormInput, FormInputProps, FormInputRef } from "./FormInput";
import { EyeClosed, Eyeopen, Lock } from "components/Icons";
import Animated, { Easing, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { TouchableOpacity } from "react-native";

type PasswordInputProps = FormInputProps & {
  hideToggle?: boolean;
  passwordRef?: Ref<FormInputRef>;
};

export const PasswordInput: FC<PasswordInputProps> = ({ hideToggle = false, passwordRef, ...props }) => {
  const [secureEntry, setSecureEntry] = useState<boolean>(true);

  const eyeClosedOpacity = useAnimatedStyle(() => ({
    opacity: withTiming(secureEntry ? 1 : 0, {duration: 400, easing:Easing.linear}),
  }));

  const eyeOpenOpacity = useAnimatedStyle(() => ({
    opacity: withTiming(secureEntry ? 0 : 1, {duration: 400, easing:Easing.linear}),
  }));

  return (
    <FormInput
      {...props}
      ref={passwordRef}
      leftIcon={<Lock height={18} width={18} />}
      rightIcon={
        hideToggle ? null : (
          <TouchableOpacity
            className="relative h-full items-center justify-center px-4"
            onPress={() => setSecureEntry(!secureEntry)}
          >
            <Animated.View style={eyeClosedOpacity} className="absolute">
              <EyeClosed height={18} width={18} />
            </Animated.View>
            <Animated.View style={eyeOpenOpacity}>
              <Eyeopen height={18} width={18} />
            </Animated.View>
          </TouchableOpacity>
        )
      }
      secureTextEntry={secureEntry}
      defaultValue={props.value}
    />
  );
};
