import clsx from "clsx"
import { Text, View } from "components/atoms"
import { FC } from "react"
import { ViewProps } from "react-native"
type Props = ViewProps & {
      name: string,
      bgColor?: string,
      textColor?: string,
      inverseDefaultColors?: boolean
}
export const GameNameLabel: FC<Props> = ({name, bgColor, textColor, inverseDefaultColors = false, ...rest}) => {
      return (
            <View {...rest}>
                  <View 
                        className={clsx("bg-white-100 py-[3] px-2 rounded-2xl", bgColor, {
                              "bg-black-100" : inverseDefaultColors
                        })}
                  >
                        <Text className={clsx("text-black-100 text-xs font-interBold", textColor, {
                              "text-white-100": inverseDefaultColors
                        })}>{name}</Text>
                  </View>
            </View>
      )
}