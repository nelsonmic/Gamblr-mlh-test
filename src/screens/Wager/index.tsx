import clsx from "clsx";
import { CirclePlus, Wager } from "components/Icons";
import { Layout } from "components/Layouts";
import { Pressable, Text, View } from "components/atoms";
import { PageHeader } from "components/organisms/PageHeader";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";
import { useAppearanceContext } from "providers/Appearance.provider";
import { FC, ReactElement } from "react";
import { SectionList } from "react-native";

export const WagerScreen = () => {
	const sizes = {
		width: 26,
		height: 26
	}
	const { goTo } = useNavigateTo();
	const SECTIONS = [
		{
			data: [
					{
						title: "Create a wager",
						description: "Craft a challenge, set the stakes",
						icon: <CirclePlus {...sizes} />,
						onPress: () => goTo(Screens.CreateWagerScreen)
					},
					{
						title:"Open wagers",
						description:"Join a random challenge",
						icon: <Wager {...sizes} />,
						onPress: () => goTo(Screens.OpenWagersScreen)
					}
			]
		}
	]
	return (
            <Layout
			className="flex-1 py-0 px-4 pt-6"
			edges={["left", "right", "top"]}
            >
			<View className="flex-1">
				<PageHeader
				className="w-full" 
					title="Wager"
					description="Create your custom wager and invite friends or chatroom groups for a showdown!"
				/>
				<View
					className="flex-1 mt-12"
				>
					<SectionList 
						sections={SECTIONS}
						keyExtractor={(item, indx)=> item.title + indx}
						renderItem={({ item })=> <WagerOption data={item}/>}
					/>

				</View>
			</View>
		</Layout>
	);
};

type WagerOptionProps = {
  data: {
    title: string;
    description: string;
    icon: ReactElement;
    onPress: () => void;
  };
};


const WagerOption: FC<WagerOptionProps> = ({ data }) => {

	const { isDarkMode } = useAppearanceContext();

	return (
		<Pressable
			onPress={data.onPress}
		>
			<View
				className={clsx("mb-6 flex-row items-center space-x-4 border-gray-100 rounded-2xl px-4 py-6", {
					"border" : !isDarkMode,
					"bg-darkMode-input-bg": isDarkMode
				})}
			>
				<View className={clsx("p-4 bg-white-400 border-gray-100 rounded-full", {
					"bg-black-200" : isDarkMode,
					"border": !isDarkMode
				})}>
					{ data.icon }
				</View>
				<View>
					<Text className="font-interBold text-sm leading-5">{ data.title }</Text>
					<Text className="font-interRegular text-sm">{data.description}</Text>
				</View>
			</View>
		</Pressable>
	)
}
