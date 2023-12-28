import { Text, View } from "components/atoms"
import { BOX_SHADOW } from "../../../constants"
import Animated, { FadeInDown } from "react-native-reanimated"
import { Discord, Facebook, Instagram, X } from "components/Icons"
import clsx from "clsx"
import { useAppearanceContext } from "providers/Appearance.provider"
import { useSelector } from "react-redux"
import { User } from "types/structs"

const sizes ={
      width: 40,
      height: 40
}

export const Bio = () => {
	const user = useSelector((state: {user:{user: User }}) => state.user.user);
      const { isDarkMode } = useAppearanceContext();
      const _socials = [<X {...sizes} />, <Discord {...sizes} />, <Instagram {...sizes} />, <Facebook {...sizes} />]
      const _bioDetails = [
            {
                  title: "Location",
                  value: user.meta.location
            },
            {
                  title: "Gender",
                  value: user.meta.gender || "Male"
            }
      ]
      return (
            <Animated.View 
                  entering={FadeInDown.duration(300)}
                  className="space-y-6"
            >
                  <View 
                        style={[BOX_SHADOW]}
                        className={clsx("flex-row justify-between py-6 rounded-xl bg-white-100", {
                              "bg-darkMode-input-bg" : isDarkMode
                        })}
                  >
                        {
                              _bioDetails.map((item, indx)=>{
                                    return (
                                          <View 
                                                key={indx}
                                                className={clsx("items-center flex-1", {
                                                    "border-r border-gray-100": indx !== _bioDetails.length -1   
                                                })}
                                          >
                                                <Text className="mb-2 text-gray-300 text-xs font-interMedium"> {item.title} </Text>
                                                <Text className={clsx("text-black-100 font-interBold", {
                                                      "text-white-100" : isDarkMode
                                                })}> {item.value} </Text>
                                          </View>
                                    )
                              })
                        }
                  </View>
                  <View
                        style={[BOX_SHADOW]} 
                        className={clsx("bg-white-100 p-6 rounded-xl", {
                              "bg-darkMode-input-bg" : isDarkMode
                        })}    
                  >
                        <Text className="mb-4 text-gray-300 text-xs font-interMedium">About me</Text>
                        <Text className={clsx("text-black-100 text-sm font-interRegular", {
                              "text-white-100" : isDarkMode
                        })}>
                              Passionate gamer and betting enthusiast. Always ready for the next gaming challenge
CODM: Digesteeve  || PUBG: Digesteesve
                              {user.meta.bio}
                        </Text>
                  </View>
                  <View 
                        style={[BOX_SHADOW]} 
                        className={clsx("flex-row justify-between bg-white-100 p-6 rounded-xl", {
                              "bg-darkMode-input-bg" : isDarkMode
                        })}
                  >
                        {
                              _socials.map((item, indx) => {
                                    return (
                                          <View 
                                                key={indx}
                                                className={clsx("flex-1 items-center", {
                                                      "border-r border-gray-100": indx !== _socials.length -1 
                                                })}
                                          >
                                                
                                                { item }
                                          </View>
                                    )
                              })
                        }
                  </View>
            </Animated.View>
      )
}