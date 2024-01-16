import clsx from "clsx"
import { FreeCaretArrow } from "components/Icons"
import { Layout } from "components/Layouts"
import { Button, Pressable, Text, View } from "components/atoms"
import { FormInput } from "components/molecules/FormInputs"
import { useNavigateTo } from "hooks/useNavigateTo"
import { Screens } from "navigations/Screens"
import { useAppearanceContext } from "providers/Appearance.provider"

export const CreateWagerScreen = () => {
      const { goTo } = useNavigateTo();
      const { isDarkMode } = useAppearanceContext();
      return (
            <Layout
			className="h-full space-y-2 px-4 pt-4"
			edges={["left", "right", "bottom"]}
            >
                  <View className="flex-1 justify-between">
                        <View className="flex-1">
                              <Pressable
                                    onPress={() => goTo(Screens.WagerTypeSheet)}
                              >
                                    <View className="mb-8">
                                          <Text className="mb-2">Wager type</Text>
                                          <View 
                                                className={clsx(
                                                      'relative border space-x-3 bg-white-200 flex-row items-center justify-between h-16 py-2 px-4 rounded-2xl',
                                                      {
                                                            "bg-darkMode-input-bg border-darkMode-input-bg" : isDarkMode,
                                                            "border-gray-300" : !isDarkMode
                                                      }
                                          )}>
                                                <Text className="text-gray-700 font-interRegular">Select</Text>
                                                <FreeCaretArrow 
                                                      stroke="#010101" 
                                                      width={20} 
                                                      height={20} 
                                                      style={{
                                                            transform: [{rotate: "90deg"}]
                                                      }} 
                                                />
                                          </View>
                                    </View>
                                    {/* <FormInput
                                          label="Wager type"
                                          placeholder="Select"
                                          isDefaultPlaceholderBehavior
                                          rightIcon= {<FreeCaretArrow stroke="#010101" width={20} height={20} style={{transform: [{rotate: "90deg"}]}} />}
                                          editable={false}
                                    /> */}
                              </Pressable>
                              <FormInput
                                    label="Wager title"
                                    placeholder="e.g. Elites only! - BR in Blackout"
                                    isDefaultPlaceholderBehavior
                              />
                              <FormInput
                                    label="Wager description"
                                    placeholder="Player with the highest number of kills takes all"
                                    isDefaultPlaceholderBehavior
                                    multiline
                                    numberOfLines={3}
                                    styleContainer="h-24"
                              />
                        </View>
                        <Button size="lg">Create wager</Button>
                  </View>
            </Layout>
      )
}