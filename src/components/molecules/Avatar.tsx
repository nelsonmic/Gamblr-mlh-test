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
      name?: string
      tag?: string
}

export const Avatar: FC<AvatarProps> = ({imgSrc, size ="sm", labelPosition = "right", name="Arinze Akoji", tag="__jackjack"}) => {
      const { isDarkMode } = useAppearanceContext();
      const [showFallback, setShowFallback] = useState<boolean>(false);

      return (
            <View className={clsx("mb-6 items-center space-y-2",
                  {
                        "flex-row space-x-2": labelPosition === "right",
                  }
            )}>
                  <View className={clsx("items-center justify-center p-2 rounded-full bg-[#E9E9E960]",
                        {
                              "w-[70] h-[70]" : size === "sm",
                              "h-[100] w-[100]" : size === "lg"
                        }
                  )}>
                  {!showFallback? (
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
                  ): <Text className="font-cabinetGroteskBold text-3xl">{generateInitials(name)}</Text>}
                  </View>
                  <View>
                        {
                              labelPosition !== "bottom" ? (
                                    <Text className={clsx("text-center font-interMedium text-sm text-black-100",
                                          {
                                                "font-interBold" : labelPosition === "right",
                                                "text-white-100" : isDarkMode
                                          }
                                    )}>{name}</Text>
                              ) : null
                        }
                              <Text className={clsx("text-center font-interSemiBold",
                                    {
                                          "text-gray-400" : labelPosition === "right",
                                          "text-white-100" : isDarkMode
                                    }
                              )}>
                                    @{tag}
                              </Text>
                  </View>
            </View>
      )
}