import clsx from "clsx";
import { FC } from "react";
import View, { ViewProps } from "components/atoms/View";
import { Text } from "components/atoms";
import { useAppearanceContext } from "providers/Appearance.provider";

export type BottomSheetHeaderProps = {
	title: string;
	className?: string;
};

export const BottomSheetHeader: FC<BottomSheetHeaderProps> = ({
	title,
	className,
}) => {
	const { isDarkMode } = useAppearanceContext();
	return (
		<View className={clsx( "pb-4 items-start")} >
			<Text className={clsx("mb-6 ml-2 text-black-100 text-2xl font-cabinetGroteskBold leading-tight", className, {
				"text-white-100" : isDarkMode
			})}>
				{ title }
			</Text>
		</View>
)};
