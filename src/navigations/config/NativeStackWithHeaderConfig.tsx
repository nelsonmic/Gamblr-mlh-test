import { BackHandler } from "components/molecules/BackHandler";

export const naviteStackWithHeaderConfig = {
	headerBackTitleVisible: false,
	headerLeft: () => <BackHandler />,
	headerRight: () => null,
	headerShadowVisible: false,
	headerTitle: () => null,
	title: "",
	headerStyle:{
		backgroundColor: "#131313"
	}
};
