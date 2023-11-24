import { Dimensions, View } from "react-native";
import Animated, {
	useAnimatedScrollHandler,
	useSharedValue
} from "react-native-reanimated";
import { Slide } from "../molecules/Slide";
import { PaginationDot } from "components/molecules/PaginationDot";

const SCREEN_WIDTH = Dimensions.get("screen").width - 40;

const _data = [
	{
            description: "Turn your gaming skills into winning opportunities on Gamblr.",
		title:
			"Challenge, stake and play your favorite games",
		image: require("../../assets/images/onboarding-1.jpg"),
	},
	{
		description:
			"Elevate your gaming experience with Triggo's interactive betting.",
		image: require("../../assets/images/onboarding-2.jpg"),
		title: "Face off with your padii in a 1v1 duel"
	},
	{
		description:
			"The more you win, the higher your rank and the more cash token you earn.",
		image: require("../../assets/images/onboarding-3.jpg"),
		title: "Rank up and earn"
	}
];

export const OnboardingSwipper = () => {
	const scrollX = useSharedValue(0);

	const onScroll = useAnimatedScrollHandler((ev) => {
		scrollX.value = ev.contentOffset.x;
	});

	return (
		<View className="flex-1 space-y-6">
			<Animated.FlatList
				bounces={false}
				data={_data}
				horizontal
				keyExtractor={(_, index) => index.toString()}
				onScroll={onScroll}
				pagingEnabled
				renderItem={({ index, item }) => <Slide key={index} item={item} />}
				scrollEventThrottle={16}
				showsHorizontalScrollIndicator={false}
			/>
			<View className="flex-row px-4">
				{_data.map((_, i) => (
					<PaginationDot
						key={i}
						index={i}
						scrollX={scrollX}
						width={SCREEN_WIDTH}
					/>
				))}
			</View>
		</View>
	);
};
