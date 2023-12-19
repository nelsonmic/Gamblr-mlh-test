import clsx from "clsx";
import { ShieldSuccess } from "components/Icons";
import { Layout } from "components/Layouts";
import { Button, Text, View } from "components/atoms";
import { Label } from "components/molecules/Label";
import { PageHeader } from "components/organisms/PageHeader";
import { useNavigateTo } from "hooks/useNavigateTo";
import { usePinCodeEntry } from "hooks/usePinCodeEntry";
import { Screens } from "navigations/Screens";
import { useAppearanceContext } from "providers/Appearance.provider";

export const TwoFaScreen = () => {
      const {goTo} = useNavigateTo()
      const {isDarkMode } = useAppearanceContext();
	return (
		<Layout
			className="h-full space-y-2 px-4 pt-4"
			edges={["left", "right", "bottom"]}
		>
                  <View className="flex-1 justify-between space-y-4">
                        <View className="flex-1">
                              <PageHeader
                                    title="Two-factor Authentication "
                              />
                              <View className="flex-1 mt-8 items-center justify-center">
                                    <View className="w-full">
							<Text className={clsx("text-center text-black-100 text-sm font-interRegular", {
								"text-white-100" : isDarkMode
							})}>Security Status:</Text>
							<View 
								className={clsx("mt-4 bg-white-100 items-center py-6 rounded-2xl", {
									"bg-black-100 border border-gray-200" : isDarkMode
								})}
								style={{
									elevation: 4,
									shadowColor: 'black',
									shadowOffset: { width: 0, height: 1 },
									shadowOpacity: .1,
									shadowRadius: 4,
								}}
							>
								<ShieldSuccess width={60} height={60}/>

								<Text className={clsx("mt-4 mb-6 text-sm font-interRegular text-black-100 text-center", {
									"text-white-100" : isDarkMode
								})}>Two-factor Authentication is:</Text>

								<Label text="Enabled" styleBg="bg-green-tint" styleText="text-green-100"/>

								<Text className={clsx("mt-6 text-sm font-interRegular text-black-100 text-center", {
									"text-white-100" : isDarkMode
								})}>Via email
									<Text className={clsx("text-sm font-interBold text-black-100", {
										"text-white-100": isDarkMode
									})}> thenelsonmichael@gmail.com.</Text>
								</Text>
							</View>
						</View>
                              </View>
                        </View>
                        <View className="flex-row space-x-2">
					<Button 
						className={"flex-1 bg-red-tint rounded-xl"}
					>
						<Text className="text-red-500 text-sm">Disable</Text>
					</Button>
                              <Button 
						size="md"
						className="flex-1 rounded-xl"
						
					>Switch to SMS</Button>
                        </View>
                  </View>
		</Layout>
	);
};
