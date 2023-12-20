import { Text, View } from "components/atoms"
import { BOX_SHADOW } from "../../../constants"
import Animated, { FadeInDown } from "react-native-reanimated"

export const Favorite = () => {
      return (
            <Animated.View entering={FadeInDown.duration(300)}>
                  <Text>Favorite</Text>
            </Animated.View>
      )
}