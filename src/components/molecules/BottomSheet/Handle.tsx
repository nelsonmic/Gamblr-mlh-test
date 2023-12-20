import { FC } from "react";
import clsx from "clsx";
import View, { ViewProps } from "components/atoms/View";

export type BottomSheetHandleProps = ViewProps & {
	padding?: boolean;
};

export const BottomSheetHandle: FC<BottomSheetHandleProps> = ({
	className,
	...rest
}) => (
	<View
		className={clsx("flex w-full items-center justify-center py-4", {
			className
		})}
		{...rest}
	>
		<View className="w-[120] h-1.5 origin-top-left rotate-180 bg-gray-200 rounded-lg" />
	</View>
);
