import { FC, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { Platform, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import View, { ViewProps } from "../atoms/View";
import { hapticFeedback } from "handlers/helpers/shared";
import { Caret } from "components/Icons";
import clsx from "clsx";
import { useAppearanceContext } from "providers/Appearance.provider";

type Props = ViewProps;

export const BackHandler: FC<Props> = ({ ...rest }) => {
	const inset = useSafeAreaInsets();
	const { canGoBack, goBack } = useNavigation();
	const { isDarkMode } = useAppearanceContext();

	const returnToPreviousScreen = useCallback(() => {
		hapticFeedback();
		requestAnimationFrame(() => {
			goBack();
		});
	}, [goBack]);

	return canGoBack() ? (
		<View
			{...rest}
			style={{
				paddingLeft: inset.left + 25,
				paddingTop: Platform.OS === "android" ? inset.top + 10 : 0
			}}
			className="mt-2"
		>
			<Pressable onPress={returnToPreviousScreen} className="w-[40] h-[30] -ml-[12] mb-6">
                        <View className={clsx("border-gray-500 rounded-lg bg-white-100 p-4 items-center justify-center", {
					"bg-darkMode-input-bg" : isDarkMode,
					"border": !isDarkMode
				})}>
				      <Caret width={16} height={16}/>
                        </View>
			</Pressable>
		</View>
	) : null;
};
