import clsx from "clsx"
import { Caret } from "components/Icons"
import { Pressable, Text, View } from "components/atoms"
import { PressableProps } from "components/atoms/Pressable"
import { StorageKeys } from "constants/enums"
import { useEncryptedStorage } from "hooks/useEncryptedStorage"
import { useAppearanceContext } from "providers/Appearance.provider"
import { useBiometricsContext } from "providers/Biometrics.provider"
import { FC, ReactElement, useEffect, useState } from "react"
import { Switch } from "react-native"
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"

type DataType = {
      data: {}[],
      title: string
}
type Props = PressableProps & {
      data: DataType
}
export const SectionListItem: FC<Props> = ({data, ...rest}) => {
      const { isDarkMode, setIsDarkMode, toggleColorScheme, colors } = useAppearanceContext();
      const { setEncryptItemToStorage } = useEncryptedStorage();
      const [openItem, setOpenItem] = useState<string | null>(null);

      const handleSetColorScheme = () => {
            toggleColorScheme()
            setIsDarkMode((prev) => !prev)
      }

      const size = useSharedValue(0)
      const rotate = useSharedValue("180deg")

      const animatedStyle = useAnimatedStyle(()=> ({
            height: size.value,
            overflow: "hidden"
      }))

      const animatedCaret = useAnimatedStyle(() => ({
            transform: [ { rotate : rotate.value} ]
      }))

      const runAnimation = () => {
            size.value = withTiming(openItem === data.title ? 0 : 60 * data.data.length, { duration: 700 });
            rotate.value = withTiming(openItem === data.title ? "180deg" : "270deg", { duration: 500 });
            setOpenItem(openItem === data.title ? null : data.title);
      };

      useEffect(() => {
            setEncryptItemToStorage(StorageKeys.IsDarkMode, isDarkMode)
      }, [isDarkMode])

      return (
            <View>
                  <Pressable 
                        {...rest} 
                        className={clsx("flex-row justify-between items-center rounded-2xl mb-4 px-4 py-6", {
                              "bg-darkMode-input-bg" : isDarkMode,
                              "border border-gray-100" : !isDarkMode
                        })}
                        onPress={() => {
                              if(data.title !== "Dark Mode") runAnimation()
                        }}
                  >
                        <Text className={clsx("text-sm font-interMedium text-black-100", {
                              "text-white-100" : isDarkMode
                        })}>
                              {data.title}
                        </Text>
                        {
                              data.title !== "Dark Mode" ? (

                                    <Animated.View style={animatedCaret}>
                                          <Caret width={16} height={16} />
                                    </Animated.View>
                              ) : (
                                    <Switch
                                          trackColor={{false: colors.lightGray, true: colors.lightGray}}
                                          thumbColor={isDarkMode ?  colors.darkGray : colors.darkGray}
                                          ios_backgroundColor= {colors.lightGray}
                                          onChange={handleSetColorScheme}
                                          value={isDarkMode}
                                          style={{ transform:[{ scaleX: .7 }, { scaleY: .7 }] }}
                                    />
                              )
                        }
                  </Pressable>
                  <Animated.View className="mb-4"
                        style={animatedStyle}
                  >
                        {
                              data.data.map((item, index) => (
                                    <Item key={index} data={item}/>
                              ))
                        }
                  </Animated.View>
            </View>
      )
}

type ItemProps = {
      data: {
            title: string,
            leftElement: ReactElement
            rightElement?: ReactElement | string,
            onPress?: () => void
      }
}

const Item: FC<ItemProps> = ({ data }) => {
      const { isDarkMode, colors } = useAppearanceContext()
      const {isBiometricsEnabled, toggleBiometrics, isBiometricsAvailable} = useBiometricsContext();
      const handleBiometricsToggle = () => {
            if(isBiometricsAvailable) toggleBiometrics()
      }
      return (
            <Pressable className="flex-row items-center justify-between px-2 py-4" onPress={data.onPress}>
                  <View className="space-x-6 flex-row items-center">
                        {data.leftElement}
                        <Text className={clsx("text-black-100 text-interRegular text-sm", {
                              "text-white-100" : isDarkMode
                        })}>{data.title}</Text>
                  </View>
                  {data.rightElement ? (
                        <Switch
                              trackColor={{false: colors.lightGray, true: colors.lightGray}}
                              thumbColor={isDarkMode ?  colors.darkGray : colors.darkGray}
                              ios_backgroundColor= {colors.lightGray}
                              value={isBiometricsEnabled}
                              onChange={handleBiometricsToggle}
                              style={{ transform:[{ scaleX: .5 }, { scaleY: .5 }] }}
                        />
                  ) : null}
            </Pressable>
      )
}