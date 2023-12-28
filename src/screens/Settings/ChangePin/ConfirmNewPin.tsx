import { Layout } from "components/Layouts"
import { Button, Text, View } from "components/atoms"
import { PageHeader } from "components/organisms/PageHeader"
import { useUpdatePin } from "hooks/settings/useUpdatePin";
import { usePinCodeEntry } from "hooks/usePinCodeEntry";
import { FC, useState } from "react";

type Props = {
      route : any
}

export const ConfirmNewPinScreen: FC<Props> = ({ route }) => {
      const { new_pin, old_pin } = route.params.data;
      const {updatePin, isPending} = useUpdatePin();
      const [error, setError] = useState<boolean>(false);
	const {value, PinInput, PinKeypad} = usePinCodeEntry({
		pinLength: 4,
            secureEntry: true
	});
      const handleSubmit = () => {
            if(new_pin !== value){
                  setError(true);
            }else{
                  setError(false);
                  updatePin({new_pin, old_pin})
            }
      }
      return (
            <Layout
			className="h-full space-y-2 px-4 pt-4"
			edges={["left", "right", "bottom"]}
            >
			<View className="flex-1 justify-between space-y-4">
				<View className="flex-1">
					<PageHeader title="Confirm PIN" description="Enter your new PIN again" />
                              <View className="mt-8">
                                    <PinInput />
                                    {
                                          error? <Text className="text-red-500 mt-1 text-xs mt-2">Pins do not match</Text>: null
                                    }
                              </View>
				</View>
                        <View>
                              <PinKeypad />
                              <Button 
                                    size="lg"
                                    onPress={handleSubmit} 
                                    isLoading={isPending}
                              >Update Pin</Button>
                        </View>
                  </View>

            </Layout>
      )
}