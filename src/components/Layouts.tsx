import { FC, PropsWithChildren } from "react";
import {
	SafeAreaViewProps,
	SafeAreaView
} from "react-native-safe-area-context";
import { ViewProps } from "components/atoms/View";
import { useAppearanceContext } from "providers/Appearance.provider";
import clsx from "clsx";

type Props = PropsWithChildren<ViewProps> & SafeAreaViewProps;

export const Layout: FC<Props> = ({ children, ...rest }) => {
	const { isDarkMode } = useAppearanceContext();
return (
	<SafeAreaView className={clsx("bg-white-100 px-4", {
		"bg-black-100" : isDarkMode
	})} {...rest}>
		{children}
	</SafeAreaView>
)};
