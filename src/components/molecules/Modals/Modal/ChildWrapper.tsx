import clsx from 'clsx';
import { Text, Pressable } from 'components/atoms';
import React, { FC, SetStateAction, useEffect } from 'react';
import Animated, { Easing, FadeOut, runOnJS, useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";

type Props = {
  isEnabled: boolean,
  ignoreDelay: boolean,
  hideClose?: boolean,
  onClosePress: () => void,
  onEnterAnimationFinished: () => void
  children: React.ReactNode,
  setAllowBg: React.Dispatch<SetStateAction<boolean>>
}

export const LAYOUT_ANIM_DURATION = 250
export const CHILD_ANIM_DURATION = 200
export const MODAL_ANIM_DURATION = 250

export const ChildWrapper: FC<Props> = ({ isEnabled, ignoreDelay, hideClose, onClosePress, onEnterAnimationFinished, setAllowBg, children }) =>{
  const opacityValue = useSharedValue(0)
  const viewStyle = useAnimatedStyle(() => {
    return { opacity: opacityValue.value }
  }, [isEnabled])

  useEffect(() => {
      setAllowBg(hideClose || false)
      if (isEnabled) {
                  opacityValue.value = withDelay(ignoreDelay ? 0 : CHILD_ANIM_DURATION + LAYOUT_ANIM_DURATION, withTiming(1, {
                        duration: CHILD_ANIM_DURATION,
                        easing: Easing.ease,
                  },
                  (finished) => {
                        if (finished) {
                              runOnJS(onEnterAnimationFinished)()
                        }
                  }
            ))
      } else {
            opacityValue.value = withTiming(0, {
                  duration: CHILD_ANIM_DURATION,
                  easing: Easing.ease,
            })
      }
  }, [isEnabled, ignoreDelay, hideClose])

  return (
    <Animated.View
      style={[viewStyle, {
        position: isEnabled ? 'relative' : 'absolute',
        margin: 32,
      }]}
      exiting={ignoreDelay ? undefined : FadeOut.duration(MODAL_ANIM_DURATION)}
      needsOffscreenAlphaCompositing
    >
      {children}
      {
            !hideClose && (
                  <Pressable onPress={onClosePress} className="py-4 mt-10">
                        <Text className={clsx("text-center text-red-100 font-interMedium")}>Cancel</Text>
                  </Pressable>
            )
      }
    </Animated.View>
  )
};