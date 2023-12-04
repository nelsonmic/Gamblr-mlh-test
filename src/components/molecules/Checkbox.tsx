import clsx from "clsx"
import { CurvedCheckmark } from "components/Icons"
import { Pressable, View } from "components/atoms"
import { useAppearanceContext } from "providers/Appearance.provider"
import { FC, useCallback } from "react"
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"

type Props = {
      isChecked: boolean;
      onCheck: () => void;
}
export const Checkbox: FC<Props> = ({ isChecked, onCheck }) => {
      const { isDarkMode } = useAppearanceContext();
      const opacity = useSharedValue(0)
      const size = useSharedValue(1)
      const animatedStyle = useAnimatedStyle(()=> ({
            opacity: opacity.value,
            transform: [{scale : size.value}]
      }))
      const runAnimation = () => {
            opacity.value = 0
            size.value = 1
            opacity.value = withTiming(1, {duration : 100})
            size.value = withTiming(.8, {duration: 500})
      }

      const handlePress = useCallback(() => {
            onCheck();
            runAnimation()
      }, [onCheck]);
      return (
            <View className={clsx("relative rounded-md", {
                  "border border-white-100": isDarkMode,
                  "border border-black-100": !isDarkMode,
            })}>
                  <Animated.View
                        style={animatedStyle}
                        className={clsx("rounded-md absolute h-full w-full", {
                              "bg-white-100" : isDarkMode && isChecked,
                              "bg-black-100" : !isDarkMode && isChecked
                        })}
                  ></Animated.View>
                  <Pressable 
                        className={clsx("w-5 h-5 items-center justify-center")}
                        onPress={handlePress}
                  >
                        { isChecked ? <CurvedCheckmark width={13} height={13} /> : null }
                  </Pressable>
            </View>
      )
}