import { useAppearanceContext } from 'providers/Appearance.provider';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSettingsProfile = (props: SvgProps) => {
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
			d="M11.996 10.302a4 4 0 1 0 0-8 4 4 0 0 0 0 8M19.996 17.802c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5 3.582-4.5 8-4.5 8 2.015 8 4.5"
		/>
	</Svg>
)};
export default SvgSettingsProfile;
