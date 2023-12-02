import { clsx } from "clsx";
import { Pressable, Text, View } from "components/atoms"
import { hapticFeedback } from "handlers/helpers/shared";
import { useAppearanceContext } from "providers/Appearance.provider";
import { FC, ReactElement } from "react"
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"

type addOnProps = {
      name: string,
      icon: ReactElement
}

type Props = {
      value: number | addOnProps;
      showBiometrics?: boolean
}
export const PinCodeKey: FC<Props> = ({ value, showBiometrics }) => {
      const { isDarkMode } = useAppearanceContext();
      const duration = 300
      const opacity = useSharedValue(0);

      const animatedStyle = useAnimatedStyle(() => ({
            opacity: opacity.value,
      }));

      const runAnimation = () => {
            opacity.value = withTiming(1, 
                  {duration: duration, easing : Easing.linear},
                  ()=>{
                        opacity.value = withTiming(0, {duration: duration, easing: Easing.linear})
                  }
            )
      }

      const renderValue = () => {
            if( typeof value === "number" ){
                  return (
                              <Text className={clsx("text-black-100 font-bold text-2xl", {
                                          "text-white-100" : isDarkMode
                                    })}>{ value }</Text>
                        )
                  }
                  
            if(typeof value !== "number") {
                  if(value.name === "biometrics"){
                        return (
                              showBiometrics && value.icon
                        )
                  }else{
                        return value.icon
                  }
            }
      }

      return (
            <View className="relative w-[110] h-[70]">
                  <Animated.View 
                        className={clsx("absolute rounded-xl w-full h-full", {
                              "bg-darkMode-input-bg": isDarkMode,
                              "bg-gray-100": !isDarkMode,
                        })}
                        style={animatedStyle}
                  ></Animated.View>
                  <Pressable
                        onPress={() => {
                              hapticFeedback()
                              runAnimation()
                        }}
                        className="h-full items-center justify-center"
                  >
                        { renderValue }         
                  </Pressable>
            </View>
      )
}