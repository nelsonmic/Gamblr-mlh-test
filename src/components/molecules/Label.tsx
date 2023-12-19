import clsx from "clsx";
import { Text, View } from "components/atoms";
import { FC } from "react";
type Props = {
      text: string;
      styleBg: string;
      styleText: string;
}
export const Label: FC<Props> = ({text, styleBg, styleText}) => {
      return (
            <View className={clsx("px-6 py-[3] rounded-2xl", styleBg)}>
                  <Text className={clsx("text-sm font-interRegular", styleText)}>{text}</Text>
            </View>
      )
}