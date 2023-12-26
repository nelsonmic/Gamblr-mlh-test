import { useAppearanceContext } from 'providers/Appearance.provider';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
export type BottomTabSvgProps = SvgProps & {
	isFocused: boolean
}
const SvgHome: React.FC<BottomTabSvgProps> = ({isFocused ,...rest}) => {
	const { isDarkMode, colors } = useAppearanceContext();
	return (
		<Svg
			width={24}
			height={24}
			fill="none"
			viewBox="0 0 22 22"
			{...rest}>
			<Path
				stroke={!!(isDarkMode && isFocused)? colors.light : !!(!isDarkMode && isFocused)? colors.dark: colors.darkGray}
				strokeWidth={1.5}
				d="M1 11.204c0-2.289 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.241C8.889 1.622 9.892 1 11 1c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715.519.948.519 2.092.519 4.38v1.522c0 3.9 0 5.851-1.172 7.063C18.657 21 16.771 21 13 21H9c-3.771 0-5.657 0-6.828-1.212C1 18.576 1 16.626 1 12.725v-1.521Z"
			/>
			<Path
				stroke={!!(isDarkMode && isFocused)? colors.light : !!(!isDarkMode && isFocused)? colors.dark: colors.darkGray}
				strokeLinecap="round"
				strokeWidth={1.5}
				d="M11 14v3"
			/>
		</Svg>
	)
};
export default SvgHome;
