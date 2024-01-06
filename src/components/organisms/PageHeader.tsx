import clsx from "clsx";
import { Text, View } from "components/atoms"
import { useAppearanceContext } from "providers/Appearance.provider";
import { FC, ReactElement } from "react"
import { ViewProps } from "react-native";

type Props = ViewProps & {
      leftElement?: ReactElement;
      title: string;
      description?: string;
      rightElement?: ReactElement
}
export const PageHeader: FC<Props> = ({ title, description, leftElement, rightElement, ...rest }) => {
      const { isDarkMode } = useAppearanceContext();
      return (
            <View {...rest} className="justify-between w-full">
                  {leftElement}
                  {!leftElement ? (
                        <View>
                              <Text className={clsx("text-3xl font-[700] leading-8 tracking-[0.26px] font-cabinetGroteskBold")}>{ title }</Text>
                              {description? (
                                    <Text className={clsx("font-interRegular text-sm leading-5 mt-[4]"
                                    )}>{ description }</Text>
                              ): null}
                        </View>
                  ) : null}
                  {rightElement}
            </View>
      )
}