import { Text, View } from "components/atoms"
import { Avatar } from "./Avatar"
import { BOX_SHADOW } from "../../constants"
import { GameNameLabel } from "./GameNameLabel"
import { FreeCaretArrow } from "components/Icons"

export const OpenWager = () => {
      return (
            <View 
                  style={[BOX_SHADOW]}
                  className="ml-2 flex-1 space-y-2 rounded-2xl border-gray-200 bg-white-100 px-4 py-6 self-start min-h-[212]"
            >
                  <View className="justify-between">
                        <Avatar 
                              labelPosition="right"
                              size="sm"
                              tag="ghost"
                              name=""
                              imgSrc={require("../../assets/images/onboarding-1.jpg")}
                        />
                        <GameNameLabel 
                              name="Call of Duty" 
                              inverseDefaultColors
                              className="mt-4 items-start"
                        />
                  </View>
                  <View>
                        <View className="flex-row items-center space-x-[2] mb-4">
                              <Text className="font-interRegular text-sm">Battle Royale</Text>
                              <Text className="text-xs text-gray-200 font-interRegular">(Snipers only)</Text>
                        </View>
                        <View className="flex-row justify-between">
                              <Text className="font-interBold text-sm">$5000</Text>
                              <View className="flex-row items-center space-x-4">
                                    <Text className="font-interBold text-sm">Join</Text>
                                    <FreeCaretArrow stroke="#131313" width={18} height={18}/>
                              </View>
                        </View>
                  </View>
            </View>
      )
}