import { NavigationProp, useNavigation } from "@react-navigation/native";
import { hapticFeedback } from "handlers/helpers/shared";
import { Screens } from "navigations/Screens";
import { RootStackParamList } from "navigations/types";
import { useCallback } from "react";
import { CommonActions } from '@react-navigation/native';

export const useNavigateTo = () => {
      const { navigate, ...rest } = useNavigation<NavigationProp<RootStackParamList, Screens>>();
	// TODO: Fix TS typing here
	const goTo = useCallback((location: Screens, params?: Record<string, any> | undefined) => {
		hapticFeedback();
		requestAnimationFrame(() => navigate(location, params));
	}, [navigate]);

      return{
		...rest,
		goTo: goTo,
		CommonActions
	}
}