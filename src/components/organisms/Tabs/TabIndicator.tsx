import Animated, {
	FadeInDown,
	Layout,
	SharedValue,
	useAnimatedStyle,
} from "react-native-reanimated";
import { LayoutRectangle } from "react-native";
import clsx from "clsx";

type MenuLayout = {
	[key: number]: LayoutRectangle;
};

export const TabIndicator = ({
	activeMenu,
	animationDuration = 400,
	menuLayout
}: {
	activeMenu: SharedValue<number>;
	animationDuration?: number;
	menuLayout: MenuLayout;
}) => {
	const stylez = useAnimatedStyle(() => {
		const itemLayout = menuLayout[activeMenu.value]!;
		return {
			left: itemLayout.x,
			position: "absolute",
			top:itemLayout.y,
			width: itemLayout.width,
                  height: itemLayout.height
		};
	});

	return (
		<Animated.View
			entering={FadeInDown.duration(animationDuration)}
			layout={Layout}
                  className={clsx("bg-darkMode-input-bg rounded-xl")}
			style={[
				stylez
			]}
		/>
	);
};
