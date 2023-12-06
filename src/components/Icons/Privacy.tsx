import { useAppearanceContext } from 'providers/Appearance.provider';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgPrivacy = (props: SvgProps) => {
	const { isDarkMode, colors } = useAppearanceContext();
return (
	<Svg
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 24 25"
		{...props}>
		<Path
			fill={isDarkMode? colors.light : colors.dark }
			fillRule="evenodd"
			d="M4.172 3.472C3 4.642 3 6.529 3 10.3v4c0 3.77 0 5.657 1.172 6.828C5.343 22.3 7.229 22.3 11 22.3h2c3.771 0 5.657 0 6.828-1.172C21 19.957 21 18.07 21 14.3v-4c0-3.771 0-5.657-1.172-6.828C18.657 2.3 16.771 2.3 13 2.3h-2c-3.771 0-5.657 0-6.828 1.172M7.25 8.3A.75.75 0 0 1 8 7.55h8a.75.75 0 1 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 1 1 0 1.5H8a.75.75 0 0 1-.75-.75M8 15.55a.75.75 0 1 0 0 1.5h5a.75.75 0 1 0 0-1.5H8"
			clipRule="evenodd"
		/>
	</Svg>
)};
export default SvgPrivacy;
