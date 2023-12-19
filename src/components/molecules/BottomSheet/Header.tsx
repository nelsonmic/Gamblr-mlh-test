import clsx from "clsx";
import { FC } from "react";
import View, { ViewProps } from "components/atoms/View";

export type BottomSheetHeaderProps = ViewProps;

export const BottomSheetHeader: FC<BottomSheetHeaderProps> = ({
	children,
	className,
	...rest
}) => (
	<View className={clsx(className, "pb-4")} {...rest}>
		{children}
	</View>
);
