import { createContext } from "react";

interface BottomSheetNavigatorContextType {
	setEnableContentPanningGesture: (value: boolean) => void;
	setEnableHandlePanningGesture: (value: boolean) => void;
	setSnapPoints: (snapPoints: string[] | number[]) => void;
}

export const BottomSheetNavigatorContext =
	createContext<BottomSheetNavigatorContextType | null>(null);
