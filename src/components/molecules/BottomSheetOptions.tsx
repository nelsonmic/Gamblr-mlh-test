import clsx from "clsx";
import { Pressable, Text, View } from "components/atoms";
import { useAppearanceContext } from "providers/Appearance.provider";
import { FC, ReactElement } from "react";

type BottomSheetOptionsProps = {
      data: {
            title: string;
            description: string;
            leftElement?: ReactElement;
            rightElement?: ReactElement; 
            onPress?: () => void;
      }
}

export const BottomSheetOptions: FC<BottomSheetOptionsProps> = ({ data }) => {
      const {
            title,
            description,
            leftElement,
            rightElement,
            onPress
      } = data;
      const { isDarkMode } = useAppearanceContext();
      return (
            <Pressable
                  onPress={onPress}
            >
                  <View
                  className={clsx("flex-row items-center space-x-4 p-6 border-gray-100 rounded-2xl mb-4", {
                        "bg-black-200" : isDarkMode,
                        "border" : !isDarkMode
                  })}
                  >
                        {leftElement}
                        <View className="flex-1">
                              <Text className="font-interBold text-sm">{ title }</Text>
                              <Text className="font-interRegular text-sm">{ description }</Text>
                        </View>
                        {rightElement}
                  </View>
            </Pressable>
      )
}