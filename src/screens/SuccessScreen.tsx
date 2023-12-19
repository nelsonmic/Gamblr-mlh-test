import { Layout } from "components/Layouts";
import { Button, Text, View } from "components/atoms";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";
import clsx from "clsx";
import { useAppearanceContext } from "providers/Appearance.provider";
import { Congratulations, ShieldSuccess } from "components/Icons";
import { FC, ReactElement } from "react";

interface SuccessScreenProps{
      route: {
            params:{
                  data: {
                        title: string,
                        description: string,
                        reroute: Screens,
                  }
            }
      }
}

export const SuccessScreen: FC<SuccessScreenProps> = ({ route }) => {
      const { isDarkMode } = useAppearanceContext();
      const {goTo} = useNavigateTo()
      const {data} = route.params
	return (
		<Layout
			className="h-full space-y-2 px-4 pt-8"
			edges={["left", "right", "top", "bottom"]}
		>
                  <View className="flex-1 justify-between space-y-4">
                        <View className="flex-1 items-center justify-center">
                              {data.title === "Two Factor Authentication Enabled" ? <ShieldSuccess width={80} height={80} />: (
                                    <Congratulations width={100} height={100}/>
                              )}
                              <View className="mt-4">
                                    <Text className={clsx("text-black-100 font-[700] text-2xl text-center font-cabinetGrotesk", {
                                          "text-white-100" : isDarkMode
                                    })}>{data.title}</Text>
                                    <Text className={clsx("font-interRegular text-gray-200 text-center text-sm mt-2", {
                                          "text-white-100" : isDarkMode
                                    })}>{data.description}</Text>
                              </View>
                        </View>
                        <Button size="lg" onPress={()=> goTo(data.reroute)}>Done</Button>
                  </View>
		</Layout>
	);
};
