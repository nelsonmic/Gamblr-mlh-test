import { useAppearanceContext } from 'providers/Appearance.provider';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCurvedCheckmark = (props: SvgProps) => {
	const { isDarkMode, colors } = useAppearanceContext();
return (
	<Svg
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 10 6"
		{...props}>
		<Path
			fill={isDarkMode ? colors.dark : colors.light}
			d="M8.914.206a.583.583 0 0 0-.828 0L3.74 4.557 1.914 2.726a.596.596 0 0 0-.828.857l2.24 2.24a.583.583 0 0 0 .828 0l4.76-4.76a.583.583 0 0 0 0-.857"
		/>
	</Svg>
)};
export default SvgCurvedCheckmark;
