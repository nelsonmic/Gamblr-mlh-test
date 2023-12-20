import { Text, View } from "components/atoms"
import { BOX_SHADOW } from "../../../constants"
import Animated, { FadeInDown } from "react-native-reanimated"

export const Badges = () => {
      return (
            <Animated.View entering={FadeInDown.duration(300)}>
                  <Text>Badges</Text>
            </Animated.View>
      )
}