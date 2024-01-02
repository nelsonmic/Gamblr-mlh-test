import { Arrow, Caret } from "components/Icons"
import { Button, Text, View } from "components/atoms"
import { Image } from "react-native"

export const FavoriteGames = () => {
      return (
            <View className="space-y-4">
                  <View className="relative h-48">
                        <Image 
                              source={require("../../assets/images/cod.jpg")}
                              style={{
                                    resizeMode: "cover",
                                    width: "100%",
                                    height: "100%",
                                    objectFit:"cover",
                                    borderRadius: 12
                              }}
                        />
                        <Button
                              size="md"
                              className="w-28 rounded-lg absolute right-0 bottom-0 mr-4 mb-4"
                              rightIcon={<Arrow width={20} height={15}/>}
                        >Wager</Button>
                  </View>
                  <Text className="font-interMedium text-sm ml-2">Call of Duty Mobile</Text>
            </View>
      )
}