import { FC, PropsWithChildren } from "react";
import {
	SafeAreaViewProps,
	SafeAreaView
} from "react-native-safe-area-context";
import { ViewProps } from "components/atoms/View";

type Props = PropsWithChildren<ViewProps> & SafeAreaViewProps;

export const Layout: FC<Props> = ({ children, ...rest }) => (
	<SafeAreaView className="bg-white px-4" {...rest}>
		{children}
	</SafeAreaView>
);
