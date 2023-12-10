import React from "react";
import { FC, useState } from "react";
import { FormInput, FormInputProps } from "./FormInput";
import { EyeClosed, Eyeopen, Lock, Scan } from "components/Icons";
import Animated, { Easing, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { TouchableOpacity } from "react-native";

type PasswordInputProps = FormInputProps & {
  hideToggle?: boolean;
};

export const PasswordInput: FC<PasswordInputProps> = ({ hideToggle = false, ...props }) => {
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
      leftIcon={<Lock height={18} width={18} />}
      rightIcon={
        hideToggle ? null : (
          <TouchableOpacity
            className="relative"
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
