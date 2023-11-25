import clsx from "clsx";
import { Text, View } from "components/atoms"
import { FC } from "react";

type AuthScreensHeaderProps = {
      title: string;
      description: string;
      style?: string;
}
export const AuthScreenHeader: FC<AuthScreensHeaderProps> = ({title, description, style}) => {
      return (
            <View className={clsx("space-y-2", style)}>
                  <Text className="text-3xl font-[700] leading-8 tracking-[0.26px] text-black-100 font-cabinetGroteskBold">{ title }</Text>
                  <Text className="font-interRegular text-black-100 text-sm leading-4">{ description }</Text>
            </View>
      )
}