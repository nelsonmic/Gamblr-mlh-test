import clsx from "clsx";
import { Text, View } from "components/atoms";
import { generateInitials } from "handlers/helpers/generateInitials";
import { useAppearanceContext } from "providers/Appearance.provider";
import { FC, useState } from "react";
import { Image, ImageSourcePropType } from "react-native";

interface AvatarProps{
      size: "sm" | "lg"
      labelPosition: "right" | "bottom"
      imgSrc:  ImageSourcePropType
      name: string
      tag?: string
}

export const Avatar: FC<AvatarProps> = ({imgSrc, size ="sm", labelPosition = "right", name, tag}) => {
      const { isDarkMode } = useAppearanceContext();
      const [showFallback, setShowFallback] = useState<boolean>(false);

      return (
            <View className={clsx("mb-4 items-center space-y-2",
                  {
                        "flex-row space-x-2": labelPosition === "right",
                  }
            )}>
                  <View className={clsx("items-center justify-center p-[6] rounded-full bg-gray-600",
                        {
                              "w-[62] h-[62]" : size === "sm",
                              "h-[100] w-[100]" : size === "lg"
                        }
                  )}>
                        {     !showFallback? (
                              <Image
                                    //TODO: Remeber this is supposed to be a network image
                                    source={imgSrc}
                                    style={{
                                          resizeMode: "cover",
                                          width: "100%",
                                          height: "100%",
                                          objectFit:"cover",
                                          borderRadius: 100
                                    }}
                                    onError={() => setShowFallback(true)}
                              />
                                    ): (
                                          <Text className="font-cabinetGroteskBold text-3xl">{generateInitials(name)}</Text>
                              )
                        }
                  </View>
                  <View
                        className={clsx({"mb-6" : labelPosition === "right" && name === ""})}
                  >
                        {
                              labelPosition !== "bottom" || name !== "" ? (
                                    <Text className={clsx("text-center font-cabinetGroteskMedium text-sm text-black-100",
                                          {
                                                "font-cabinetGroteskBold" : labelPosition === "right" || labelPosition === "bottom",
                                                "text-white-100" : isDarkMode,
                                                "text-xl" : labelPosition === "bottom"
                                          }
                                    )}>{name}</Text>
                              ) : null
                        }
                              <Text className={clsx("text-center text-sm font-interSemiBold",
                                    {
                                          "text-gray-400" : labelPosition === "right",
                                          "text-white-100" : isDarkMode,
                                          "text-gray-200" : name !== ""
                                    }
                              )}>
                                    @{tag}
                              </Text>
                  </View>
            </View>
      )
}