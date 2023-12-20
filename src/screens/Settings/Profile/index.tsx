import clsx from "clsx";
import { Layout } from "components/Layouts";
import { Text, View } from "components/atoms";
import { Avatar } from "components/molecules/Avatar";
import { TabsMenu } from "components/organisms/Tabs";
import { Badges } from "./Badges";
import { Bio } from "./Bio";
import { Favorite } from "./Favorite";
import { useCallback, useState } from "react";

type TabItemProps = {
	index: number;
	item: string;
};

const TabItem = ({ index }: TabItemProps) => {
	const components = [Badges, Bio, Favorite];

	const Component = components[index];
	return Component ? <Component /> : null;
};

const profileTabs = ["Badges", "Bio", "Favorites"]


export const ProfileScreen = () => {
	const [activeIndex, setActiveIndex] = useState(1);

	const handleTabPress = useCallback((index: number) => {
		setActiveIndex(index);
	}, []);
	return (
            <Layout
			className="h-full space-y-2 px-4 pt-4"
			edges={["left", "right", "bottom"]}
            >
			<View className="flex-1 mt-4">
				<Avatar size="lg" labelPosition="bottom" name="Nelson Michael" imgSrc={require("../../../assets/images/onboarding-2.jpg")}/>
				<View className={clsx("mt-6 flex-1")}>
					<TabsMenu
						activeIndex={activeIndex}
						menu={profileTabs}
						onChange={handleTabPress}
					/>
					<View className="mt-8">
						<TabItem index={activeIndex} item={profileTabs[activeIndex]} />
					</View>
				</View>
			</View>
		</Layout>
	);
};
