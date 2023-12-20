import clsx from "clsx";
import { FC } from "react";
import Animated, {
	useAnimatedStyle,
	useSharedValue
} from "react-native-reanimated";
import { ViewProps } from "components/atoms/View";

export type BottomSheetContentProps = ViewProps;

export const BottomSheetContent: FC<BottomSheetContentProps> = ({
	children,
	className,
	...rest
}) => {
	const animatedHeight = useSharedValue(0);

	const animatedHeightStyle = useAnimatedStyle(() => ({
		height: animatedHeight.value
	}));

	return (
		<Animated.View
			className={clsx(className)}
			style={[animatedHeightStyle]}
			{...rest}
		>
			{children}
		</Animated.View>
	);
};
