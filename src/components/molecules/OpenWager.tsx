import { Text, View } from "components/atoms"
import { Avatar } from "./Avatar"
import { BOX_SHADOW } from "../../constants"
import { GameNameLabel } from "./GameNameLabel"
import { FreeCaretArrow } from "components/Icons"
import clsx from "clsx"
import { useAppearanceContext } from "providers/Appearance.provider"

export const OpenWager = () => {
      const { isDarkMode, colors } = useAppearanceContext();
      return (
            <View 
                  // style={[BOX_SHADOW]}
                  className={clsx("flex-1 space-y-2 rounded-2xl border-gray-100 bg-white-100 px-4 py-6 self-start", {
                        "bg-darkMode-input-bg" : isDarkMode,
                        "border": !isDarkMode
                  })}
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
                              className="mb-4 items-start"
                        />
                  </View>
                  <View>
                        <View className="flex-row items-center space-x-[2] mb-4">
                              <Text className="font-interRegular text-sm">Battle Royale</Text>
                              <Text className={clsx("text-xs text-gray-200 font-interRegular", {
                                    "text-gray-100": isDarkMode
                              })}>(Snipers only)</Text>
                        </View>
                        <View className="flex-row justify-between">
                              <Text className="font-interBold text-sm">$5000</Text>
                              <View className="flex-row items-center space-x-4">
                                    <Text className="font-interBold text-sm">Join</Text>
                                    <FreeCaretArrow stroke={isDarkMode? colors.light : colors.dark} width={18} height={18}/>
                              </View>
                        </View>
                  </View>
            </View>
      )
}