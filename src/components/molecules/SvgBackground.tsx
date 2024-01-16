import clsx from "clsx";
import { View } from "components/atoms"
import { useAppearanceContext } from "providers/Appearance.provider"
import { FC, PropsWithChildren } from "react"

export const SvgBackground:FC<PropsWithChildren> = ({ children }) => {
      const { isDarkMode } = useAppearanceContext();

      return (
            <View className={clsx("p-4 bg-white-400 border-gray-100 rounded-full", {
                  "bg-darkMode-input-bg" : isDarkMode,
                  "border": !isDarkMode
            })}>
                  { children }
            </View>
      )
}