import clsx from "clsx"
import { Logo } from "components/Icons"
import { Text, View } from "components/atoms"
import { useAppearanceContext } from "providers/Appearance.provider"
import { FC } from "react"
type Props = {
      text: string;
}
export const Banner: FC<Props> = ({ text }) => {
      const { isDarkMode } = useAppearanceContext();
      return (
		<View className={clsx("items-center px-2 py-8 bg-black-100 rounded-xl", {
                  "bg-darkMode-input-bg" : isDarkMode
            })}>
			<Logo isBanner width={50} height={50} />
			<Text className={clsx("mt-4 text-white-100 font-cabinetGroteskBold text-xl")}>{text}</Text>
		</View>
      )
}