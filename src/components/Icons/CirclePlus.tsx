import { useAppearanceContext } from 'providers/Appearance.provider';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCirclePlus = (props: SvgProps) => {
	const { isDarkMode, colors } = useAppearanceContext();
return (

	<Svg
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 24 24"
		{...props}>
		<Path
			fill={isDarkMode? colors.light : colors.dark}
			d="M12.75 9a.75.75 0 1 0-1.5 0v2.25H9a.75.75 0 1 0 0 1.5h2.25V15a.75.75 0 1 0 1.5 0v-2.25H15a.75.75 0 1 0 0-1.5h-2.25z"
		/>
		<Path
			fill={isDarkMode? colors.light : colors.dark}
			fillRule="evenodd"
			d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0"
			clipRule="evenodd"
		/>
	</Svg>
)};
export default SvgCirclePlus;
