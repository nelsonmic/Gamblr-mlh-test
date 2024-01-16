import { FC } from "react";
import clsx from "clsx";
import View, { ViewProps } from "components/atoms/View";
import { useAppearanceContext } from "providers/Appearance.provider";

export type BottomSheetHandleProps = ViewProps & {
	padding?: boolean;
};

export const BottomSheetHandle: FC<BottomSheetHandleProps> = ({
	className,
	...rest
}) => {
	const { isDarkMode } = useAppearanceContext();
	return (
		<View
			className={clsx("flex w-full items-center justify-center pb-4 pt-8", {
				className
			})}
			{...rest}
		>
			<View className={clsx("w-[120] h-1.5 origin-top-left rotate-180 bg-gray-200 rounded-lg", {
				"bg-white-100": isDarkMode
			})} />
		</View>
	)
};
