import { BackHandler } from "components/molecules/BackHandler";
import { useAppearanceContext } from "providers/Appearance.provider";

export const useNativeStackWithHeaderConfig = () => {
	const {isDarkMode, colors} = useAppearanceContext();
	return {
		config:{
			headerBackTitleVisible: false,
			headerLeft: () => <BackHandler />,
			headerRight: () => null,
			headerShadowVisible: false,
			headerTitle: () => null,
			title: "",
			headerStyle:{
				backgroundColor: isDarkMode? colors.dark : colors.light
			},
			headerTitleStyle: {
				color: isDarkMode? colors.light : colors.dark,
				fontSize: 12,

			},
			headerLeftStyle: {
				marginTop: 12
			}
		}
	}
}
