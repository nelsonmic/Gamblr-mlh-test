import { FC } from "react";
import View, { ViewProps } from "components/atoms/View";

export type BottomSheetFooterProps = ViewProps;

export const BottomSheetFooter: FC<BottomSheetFooterProps> = ({ ...rest }) => (
	<View {...rest} />
);
