import { CancelPinCode, Scan } from "components/Icons"
import { FlatList, TouchableOpacity } from "react-native"
import { clsx } from "clsx";
import { Text, View } from "components/atoms"
import { hapticFeedback } from "handlers/helpers/shared";
import { useAppearanceContext } from "providers/Appearance.provider";
import { FC, ReactElement, useEffect, useRef, useState } from "react"
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

type addOnProps = {
  name: string,
  icon: ReactElement
}


type PinCodeEntryConfig = {
  showBiometrics?: boolean;
  pinLength: number;
  secureEntry?: boolean;
}

type PinCodeKeyProp = {
  value: number | addOnProps;
}

type PinInputProp = {
  styleContainer?: string,
  styleInput?: string,
  styleBlinker?: string,
}

export const usePinCodeEntry = ({
  showBiometrics = false,
  pinLength = 4,
  secureEntry = false,
}: PinCodeEntryConfig) => {

  const { isDarkMode } = useAppearanceContext();
  const [code, setCode] = useState<Array<number | "*">>([]);
  const _keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, { name: "biometrics", icon: <Scan /> }, 0, { name: "del", icon: <CancelPinCode /> }];
  
  const _PinInput:FC<PinInputProp> = ({
    styleContainer,
    styleInput,
    styleBlinker
  }) => {
    const noOfFields = new Array(pinLength).fill(0);
    const opacity = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
      opacity: opacity.value
    }))

    const runAnimation = () => {
      opacity.value = withRepeat(
      withTiming(1, {
        duration: 500,
        easing: Easing.linear,
      },
        () => withTiming(0, {duration: 500})
      ),
      -1,
      true
    );
    }

    useEffect(() => {
      runAnimation();
      return () => {
        opacity.value = 0;
      };
    }, []);

    return (
      <View className={clsx("flex-row space-x-2 h-[75]", 
        styleContainer
      )}>
        {
          noOfFields.map((_, index) => {
            return (
              <View
                  className={clsx("flex-1 items-center justify-center rounded-2xl flex-row space-x-[3]", {
                    "border-gray-300 border" : index === code.length && isDarkMode,
                    "bg-darkMode-input-bg" : isDarkMode,
                    "border border-black-100 ": !isDarkMode,
                    "max-w-[60]" : pinLength <= 4
                  }, 
                    styleInput
                  )}
                  key={index}
              >
                  <Text className={clsx("font-interMedium text-white-100 text-lg text-center", {
                    "text-black-100" : !isDarkMode
                  })}>{code[index]}</Text>
                  { index === code.length ? (
                        <Animated.View
                          style={animatedStyle} 
                          className={clsx("bg-white-100 w-[1] h-[30%]", 
                          {
                              "bg-black-100" : !isDarkMode
                          },
                            styleBlinker
                          )}></Animated.View>
                    ): null
                  }
              </View>
            )
          })
        }
      </View>
    )
  }

  const PinCodeKey: FC<PinCodeKeyProp> = ({ value }) => {
    const renderValue = () => {
      if (typeof value === "number") {
        return (
          <Text className={clsx("text-black-100 font-bold text-2xl", {
            "text-white-100": isDarkMode
          })}>{value}</Text>
        )
      }

      if (typeof value !== "number") {
        if (value.name === "biometrics") {
          return (
            showBiometrics && value.icon
          )
        } else {
          return value.icon
        }
      }
    }

    const handlePress = () => {
      hapticFeedback();
      if (typeof value === "number") {
            if(code.length === pinLength) return
            setCode((prev) => [...prev, secureEntry? "*" : value])
      } else if (value.name === "del") {
        setCode((prev) => prev.slice(0, prev.length - 1))
      }
    }

    return (
      <View className="relative w-[110] h-[70]">
        <TouchableOpacity
          onPress={handlePress}
          className="h-full items-center justify-center"
        >
          {renderValue()}
        </TouchableOpacity>
      </View>
    )
  }

  const PinCodeKeypad = () => {
    return (
      <View className="mb-6">
        <FlatList
          data={_keys}
          columnWrapperStyle={{
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "space-between",
            padding: 5,
            rowGap: 15
          }}
          numColumns={3}
          scrollEnabled={false}
          renderItem={({ index, item }) => <PinCodeKey
            key={index}
            value={item}
          />}
        />
      </View>
    )
  }

  return {
    PinKeypad: PinCodeKeypad,
    PinInput: _PinInput,
    value: code.join("")
  }
}