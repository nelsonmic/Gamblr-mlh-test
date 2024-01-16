import { BottomSheet } from "components/molecules/BottomSheet/BottomSheet"
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const PickGameSheet = () => {
      const inset = useSafeAreaInsets();
      return (
            <BottomSheet
                  bottom
                  style={{
                  marginTop: inset.top,
                  paddingBottom: inset.bottom
                  }}
            >

            </BottomSheet>
      )
}