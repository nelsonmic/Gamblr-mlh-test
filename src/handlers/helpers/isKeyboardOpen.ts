import { RNKeyboard } from "react-native-keyboard-area";
let keyboardOpen = false;

RNKeyboard.addKeyboardListener((height: number) => {
	keyboardOpen = height > 0;
});

export default function isKeyboardOpen() {
	return keyboardOpen;
}
