import clsx from "clsx";
import { FC } from "react";
import { BottomSheetHeader, BottomSheetHeaderProps } from "./Header";
import { BottomSheetContent, BottomSheetContentProps } from "./Content";
import { BottomSheetFooter, BottomSheetFooterProps } from "./Footer";
import { BottomSheetHandle, BottomSheetHandleProps } from "./Handle";
import View, { ViewProps } from "components/atoms/View";
import { useAppearanceContext } from "providers/Appearance.provider";

type Props = ViewProps & {
	bottom?: boolean;
	dismiss?: boolean;
};

export const BottomSheet: FC<Props> & {
	Content: FC<BottomSheetContentProps>;
	Footer: FC<BottomSheetFooterProps>;
	Handle: FC<BottomSheetHandleProps>;
	Header: FC<BottomSheetHeaderProps>;
} = ({ bottom = true, children, className, ...rest }: Props) => {
	const { isDarkMode } = useAppearanceContext();
	return (
			<View
				className={clsx(className, "w-full px-4 rounded-t-3xl absolute bg-white-100", {
					"bottom-0": bottom,
					"bg-black-100": isDarkMode
				})
			}
				{...rest}
			>
				{children}
			</View>
	)
};

BottomSheet.Handle = BottomSheetHandle;
BottomSheet.Header = BottomSheetHeader;
BottomSheet.Content = BottomSheetContent;
BottomSheet.Footer = BottomSheetFooter;
