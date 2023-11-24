import { FC } from "react";
import Animated, {
	Extrapolate,
	SharedValue,
	interpolate,
	useAnimatedStyle
} from "react-native-reanimated";

type Props = {
	index: number;
	scrollX: SharedValue<number>;
	width: number;
};

const _dotSize = 14;

export const PaginationDot: FC<Props> = ({ index, scrollX, width }) => {
	const style = useAnimatedStyle(() => ({
		opacity: interpolate(
			scrollX.value / width,
			[index - 1, index, index + 1],
			[0.2, 1, 0.2],
			Extrapolate.CLAMP
		),
		width: interpolate(
			scrollX.value / width,
			[index - 1, index, index + 1],
			[_dotSize * 1.8, _dotSize * 4.3, _dotSize * 1.8],
			Extrapolate.CLAMP
		)
	}));

	return (
		<Animated.View
			style={[
				{
					backgroundColor: "#ffffff",
					borderRadius: _dotSize/2.6,
					height: _dotSize/1.2,
					marginHorizontal: _dotSize / 10,
					width: _dotSize*4
				},
				style
			]}
		/>
	);
};
