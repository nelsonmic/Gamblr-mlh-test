import clsx from "clsx";
import { Text, View } from "components/atoms"
import { useAppearanceContext } from "providers/Appearance.provider";
import { FC, ReactElement } from "react"

type Props = {
      leftElement?: ReactElement;
      title: string;
      description?: string;
      rightElement?: ReactElement
}
export const PageHeader: FC<Props> = ({ title, description, leftElement, rightElement }) => {
      const { isDarkMode } = useAppearanceContext();
      return (
            <View className="justify-between">
                  {leftElement}
                  {!leftElement ? (
                        <View>
                              <Text className={clsx("text-3xl font-[700] leading-8 tracking-[0.26px] text-black-100 font-cabinetGroteskBold", {
                                    "text-white-100" : isDarkMode
                              })}>{ title }</Text>
                              {description? (
                                    <Text className={clsx("font-interRegular text-black-100 text-sm leading-4 mt-2",
                                          {
                                                "text-white-100": isDarkMode
                                          }
                                    )}>{ description }</Text>
                              ): null}
                        </View>
                  ) : null}
                  {rightElement}
            </View>
      )
}