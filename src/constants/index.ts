import { Dimensions, Platform } from "react-native";

export const android = Platform.OS === "android";
export const ios = Platform.OS === "ios";

export const IS_ANDROID = android;
export const IS_IOS = ios;

export const MAX_SCROLL_HEIGHT = 20;

export const HEADER_TOP = 44;
export const POSTER_SIZE = Dimensions.get("screen").height / 4;

export const BOX_SHADOW = {
      elevation: 20,
      shadowColor: "#131313",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.13,
      shadowRadius: 20,
}
