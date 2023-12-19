import clsx from "clsx";
import { FC } from "react";
import { BottomSheetHeader, BottomSheetHeaderProps } from "./Header";
import { BottomSheetContent, BottomSheetContentProps } from "./Content";
import { BottomSheetFooter, BottomSheetFooterProps } from "./Footer";
import { BottomSheetHandle, BottomSheetHandleProps } from "./Handle";
import View, { ViewProps } from "components/atoms/View";

type Props = ViewProps & {
	bottom?: boolean;
	dismiss?: boolean;
};

export const BottomSheet: FC<Props> & {
	Content: FC<BottomSheetContentProps>;
	Footer: FC<BottomSheetFooterProps>;
	Handle: FC<BottomSheetHandleProps>;
	Header: FC<BottomSheetHeaderProps>;
} = ({ bottom = true, children, className, ...rest }: Props) => (
	<View
		className={clsx(className, "w-full px-4 rounded-t-3xl absolute", {
			"bottom-0": bottom
		})}
		{...rest}
	>
		{children}
	</View>
);

BottomSheet.Handle = BottomSheetHandle;
BottomSheet.Header = BottomSheetHeader;
BottomSheet.Content = BottomSheetContent;
BottomSheet.Footer = BottomSheetFooter;
