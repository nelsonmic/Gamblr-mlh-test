import clsx from "clsx";
import { Text, View } from "components/atoms";
import { generateInitials } from "handlers/helpers/generateInitials";
import { FC } from "react";
import { Image } from "react-native";

interface AvatarProps{
      size: "sm" | "lg"
      labelPosition: "right" | "bottom"
      imgSrc: string
      name?: string
      tag?: string
}

export const Avatar: FC<AvatarProps> = ({imgSrc, size ="sm", labelPosition = "right", name="Arinze Akoji", tag="__jackjack"}) => {
      return (
            <View className={clsx("mb-6 items-center space-y-2",
                  {
                        "flex-row space-x-2": labelPosition === "right",
                  }
            )}>
                  <View className={clsx("items-center justify-center p-2 rounded-full bg-red-tint",
                        {
                              "w-[70] h-[70]" : size === "sm",
                              "h-[100] w-[100]" : size === "lg"
                        }
                  )}>
                  {imgSrc? (
                        <Image
                              source={imgSrc}
                              style={{
                                    resizeMode: "cover",
                                    width: "100%",
                                    height: "100%",
                                    objectFit:"cover",
                                    borderRadius: 100
                              }}
                        />
                  ): <Text className="font-cabinetGroteskBold text-3xl">{generateInitials(name)}</Text>}
                  </View>
                  <View>
                        <Text className={clsx("text-center font-interRegular text-sm",
                              {
                                    "font-interBold" : labelPosition === "right"
                              }
                        )}>{name}</Text>
                        {
                              labelPosition !== "bottom" ? (
                                    <Text className={clsx("text-center font-inter",
                                    {
                                          "text-gray-400 font-interSemiBold" : labelPosition === "right"
                                    }
                                    )}>
                                          @{tag}
                                    </Text>
                              ) : null
                        }
                  </View>
            </View>
      )
}