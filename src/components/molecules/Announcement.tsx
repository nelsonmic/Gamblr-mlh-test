import { Caret, CircleCancel, CircleInfo, CurvedCancel, FreeCaretArrow, ToastInfo } from "components/Icons"
import { Text, View } from "components/atoms"
import { FC, useState } from "react"
import { TouchableOpacity, ViewProps } from "react-native";

type Props = ViewProps & {
      title?: string;
      message?: string;
      onPress?: () => void;
}

export const Announcement: FC<Props> = ({ 
      title = "Important update*", 
      message, 
      onPress,
      ...rest
}) => {
      const sizes = {
            width: 22,
            height: 22
      }
      const [isVisisble, setIsVisible] = useState<boolean>(true);

      if(!isVisisble) return null;

      return (
            <View {...rest}>
                  <View className="flex-row p-4 space-x-6 bg-blue-tint border border-blue-100 rounded-xl">
                        <View className="flex-1 space-y-2">
                              <View className="flex-row items-center space-x-4">
                                    <CircleInfo {...sizes}/>
                                    <Text className="font-interBold text-sm">{title}</Text>
                              </View>
                              <Text className="text-sm font-interRegular">Update description/details, everything everything about this freaking update goes in here.</Text>
                        </View>
                        <View className="justify-between">
                              <TouchableOpacity
                                    onPress={() => {
                                          setIsVisible(false)
                                    }}
                                    className="p-2 relative bottom-2"
                              >
                                    <CircleCancel {...sizes} />
                              </TouchableOpacity>

                              <FreeCaretArrow {...sizes} />
                        </View>
                  </View>
            </View>
      )
}