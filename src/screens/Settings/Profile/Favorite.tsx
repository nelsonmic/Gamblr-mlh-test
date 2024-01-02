import { View } from "components/atoms"
import { BOX_SHADOW } from "../../../constants"
import Animated, { FadeInDown } from "react-native-reanimated"
import { FavoriteGames } from "components/molecules/FavoriteGames"

export const Favorite = () => {
      return (
            <Animated.View 
                  entering={FadeInDown.duration(300)}
                  className="space-y-6"
            >
                  <View>
                        <FavoriteGames />
                  </View>
            </Animated.View>
      )
}