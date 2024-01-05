import { FreeCaretArrow } from "components/Icons"
import { Pressable, Text, View } from "components/atoms"
import { hapticFeedback } from "handlers/helpers/shared"
import { Image } from "react-native"
import { GameNameLabel } from "./GameNameLabel"

export const Tournament = () => {
      return (
            <Pressable
                  onPress={()=>{
                        hapticFeedback();
                  }}
            >
                  <View className="relative p-2 max-h-40">
                        <View className="z-10 relative">
                              <Image 
                                    source={require('../../assets/images/cod.jpg')}
                                    style={{
                                          resizeMode: "cover",
                                          width: "100%",
                                          height: "100%",
                                          objectFit:"cover",
                                          borderRadius: 12
                                    }}
                              />
                              <View className="absolute w-full h-full bg-[#01010195] rounded-xl"></View>
                              <View className="z-10 absolute w-full h-full p-4 justify-between p-4">
                                    <View className="flex-row items-center space-x-2">
                                          <Text className="font-interBold text-sm text-white-100 mr-2">Alcatraz BR</Text>
                                          <GameNameLabel name="Call of Duty"/>
                                    </View>
                                    <View className="flex-row items-center justify-between">
                                          <View className="flex-row items-center space-x-2 ">
                                                <Text className="text-white-100 font-interBold">Entry fee:</Text>
                                                <Text className="font-interBold text-orange-100 text-sm">$5000</Text>
                                          </View>
                                          <View className="flex-row items-center">
                                                <Text className="text-gray-100 font-interBold">Join now</Text>
                                                <FreeCaretArrow stroke={"#AAAAAA"} />
                                          </View>
                                    </View>
                              </View>
                        </View>
                  <View className="absolute top-3 left-3 w-full h-full rounded-2xl bg-red-200"></View>
            </View>
            </Pressable>
      )
}