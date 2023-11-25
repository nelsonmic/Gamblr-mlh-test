import ReactNativeHapticFeedback, {
	HapticFeedbackTypes
} from "react-native-haptic-feedback";

export const hapticFeedback = (
	method: HapticFeedbackTypes = HapticFeedbackTypes.impactLight
) => {
	ReactNativeHapticFeedback.trigger(method, {
		enableVibrateFallback: false,
		ignoreAndroidSystemSettings: false
	});
};
