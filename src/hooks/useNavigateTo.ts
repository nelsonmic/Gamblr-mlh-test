import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Screens } from "navigations/Screens";
import { RootStackParamList } from "navigations/types";
import { useCallback } from "react";

export const useNavigateTo = () => {
      const { navigate } = useNavigation<NavigationProp<RootStackParamList, Screens>>();
	const goTo = useCallback((location: Screens) => {
		// hapticFeedback();
		requestAnimationFrame(() => {
			navigate(location);
		});
	}, [navigate]);

      return goTo
}