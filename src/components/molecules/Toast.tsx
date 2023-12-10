import clsx from "clsx"
import { Text, View } from "components/atoms"
import { useAppearanceContext } from "providers/Appearance.provider"
import { FC, ReactElement } from "react"
import { ToastProps } from "react-native-toast-notifications/lib/typescript/toast"

type Props = {
      options: ToastProps
}

export const Toast : FC<Props> = ({options}) => {
      const { isDarkMode } = useAppearanceContext();
      const {dangerIcon, 
            warningIcon, 
            successIcon, 
            dangerColor, 
            warningColor, 
            successColor,
            message,
            data, 
            type
      } = options
      const {icon, color} = switchTypes(type, 
                        {dangerIcon, warningIcon, successIcon}, 
                        {dangerColor, warningColor, successColor}
                  )
      return (
            <View className={clsx("shadow p-4 flex-row items-center space-x-4 w-screen max-w-[90%] shadow-2xl rounded-2xl mb-2", {
            })}
                  style={{
                        backgroundColor: color
                  }}
            >
                  {icon}
                  <View className="flex-1 pr-2">
                        <Text className={clsx("font-interMedium text-sm text-white-100")}> {data} </Text>
                        <Text className="text-white-100 text-xs font-interRegular ml-[4]">{message}</Text>
                  </View>
            </View>
      )
}

type CustomToastTypeProps = {
      options: ToastProps;
      borderColor: string;
      leftIcon: ReactElement;
      endAdornment?: ReactElement
}

export const CustomToastType: FC<CustomToastTypeProps> = ({ borderColor, leftIcon, endAdornment, options }) => {
      const { isDarkMode } = useAppearanceContext();
      const { data, message } = options

      return (
            <View className={clsx("shadow p-4 flex-row items-center space-x-4 w-screen max-w-[90%] shadow-2xl rounded-2xl mb-2", {
            })}
                  style={{
                        backgroundColor: borderColor
                  }}
            >
                  {leftIcon}
                  <View className="flex-1 pr-2">
                        <Text className={clsx("font-interMedium text-sm text-white-100")}> {data} </Text>
                        <Text className="text-white-100 text-xs font-interRegular ml-[4]">{message}</Text>
                  </View>
                  {endAdornment}
            </View>
      )
}


type TypeProp = "danger" | "warning" | "success";

const switchTypes = (type: TypeProp, 
      icons: Record<string, any>, 
      colors: Record<string, string>
      ): { 
            icon: ReactElement; 
            color: string 
      } => {

  switch (type) {
    case "danger":
      return {
        icon: icons.dangerIcon,
        color: colors.dangerColor,
      };
    case "warning":
      return {
        icon: icons.warningIcon,
        color: colors.warningColor,
      };
    case "success":
      return {
        icon: icons.successIcon,
        color: colors.successColor,
      };
  }
};


export default switchTypes;
