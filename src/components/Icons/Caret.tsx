import { useAppearanceContext } from 'providers/Appearance.provider';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCaret = (props: SvgProps) => {
	const { isDarkMode, colors } = useAppearanceContext();
return (
	<Svg
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 7 11"
		{...props}>
		<Path
			fill={isDarkMode? colors.light : colors.dark}
			fillRule="evenodd"
			d="M5.79.23a.75.75 0 0 1-.02 1.06L1.832 5 5.77 8.71a.75.75 0 1 1-1.04 1.08L.23 5.54a.75.75 0 0 1 0-1.08L4.73.21a.75.75 0 0 1 1.06.02Z"
			clipRule="evenodd"
		/>
	</Svg>
)};
export default SvgCaret;
