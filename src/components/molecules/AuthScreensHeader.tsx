import clsx from "clsx";
import { Text, View } from "components/atoms"
import { useAppearanceContext } from "providers/Appearance.provider";
import { FC } from "react";

type AuthScreensHeaderProps = {
      title: string;
      description: string;
      style?: string;
      textsPosition?: "left" | "center" | "right"
}
export const AuthScreenHeader: FC<AuthScreensHeaderProps> = ({title, description, style, textsPosition ="left"}) => {
      const { isDarkMode } = useAppearanceContext();
      return (
            <View className={clsx("space-y-2", style)}>
                  <Text className={clsx("text-3xl font-[700] leading-8 tracking-[0.26px] text-black-100 font-cabinetGroteskBold",
                        {
                              "text-center" : textsPosition === "center",
                              "text-left" : textsPosition === "left",
                              "text-right" : textsPosition === "right",
                              "text-white-100": isDarkMode
                        }
                  )}>{ title }</Text>
                  <Text className={clsx("font-interRegular text-black-100 text-sm leading-4",
                        {
                              "text-center" : textsPosition === "center",
                              "text-left" : textsPosition === "left",
                              "text-right" : textsPosition === "right",
                              "text-white-100": isDarkMode
                        }
                  )}>{ description }</Text>
            </View>
      )
}