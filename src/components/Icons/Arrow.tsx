import { useAppearanceContext } from 'providers/Appearance.provider';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgArrow = (props: SvgProps) => {
	const { isDarkMode, colors} = useAppearanceContext();
	return (
	<Svg
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 11 12"
		{...props}>
		<Path
			fill={isDarkMode? colors.dark: colors.light}
			fillRule="evenodd"
			d="M5.972.858a.667.667 0 1 0-.944.943L8.56 5.333H.83a.667.667 0 1 0 0 1.334h7.73L5.027 10.2a.667.667 0 1 0 .944.943l4.664-4.664a.671.671 0 0 0 .202-.476v-.017.017M10.8 5.78a.664.664 0 0 0-.159-.253L5.972.858"
			clipRule="evenodd"
		/>
	</Svg>
)};
export default SvgArrow;
