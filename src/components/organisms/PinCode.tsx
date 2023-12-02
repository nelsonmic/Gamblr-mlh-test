import { CancelPinCode, Scan } from "components/Icons"
import { View } from "components/atoms"
import { PinCodeKey } from "components/molecules/PinCodeKey"
import { FlatList } from "react-native"

const _data = [1, 2, 3, 4, 5, 6, 7, 8, 9, { name: "biometrics", icon: <Scan /> }, 0, { name: "cancel", icon: <CancelPinCode /> }]

export const PinCode = () => {
      return(
            <View className="mb-6">
                  <FlatList 
                        data={_data}
                        columnWrapperStyle={{
                              alignItems: "center",
                              flexWrap: "wrap",
                              gap:2,
                              justifyContent: "space-between",
                              padding: 5,
                              rowGap: 15
                        }}
                        numColumns={3}
                        renderItem={({ index, item }) => <PinCodeKey key={index} value={item}  />}
                  />
            </View>
      )
}