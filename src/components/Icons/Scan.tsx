import { useAppearanceContext } from 'providers/Appearance.provider';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgScan = (props: SvgProps) => {
	const { isDarkMode, colors } = useAppearanceContext();
return (
	<Svg
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 42 43"
		{...props}>
		<Path
			fill={isDarkMode? colors.light : colors.dark}
			d="M4.863 18.371a1.337 1.337 0 0 1-1.347-1.347V12.98c0-4.742 3.867-8.61 8.61-8.61h4.042c.753 0 1.348.595 1.348 1.348 0 .752-.595 1.347-1.348 1.347h-4.042a5.919 5.919 0 0 0-5.915 5.915v4.043c0 .752-.613 1.347-1.348 1.347ZM37.153 18.371a1.348 1.348 0 0 1-1.348-1.347V12.98a5.919 5.919 0 0 0-5.915-5.915h-4.043a1.348 1.348 0 0 1 0-2.695h4.043c4.743 0 8.61 3.868 8.61 8.61v4.043c0 .752-.595 1.347-1.347 1.347ZM29.897 39.368h-2.432a1.348 1.348 0 0 1 0-2.695h2.432a5.919 5.919 0 0 0 5.915-5.915v-2.415a1.348 1.348 0 0 1 2.695 0v2.415c0 4.742-3.867 8.61-8.61 8.61ZM16.168 39.366h-4.042c-4.743 0-8.61-3.867-8.61-8.61v-4.042c0-.753.595-1.348 1.347-1.348.753 0 1.348.595 1.348 1.348v4.042a5.919 5.919 0 0 0 5.915 5.915h4.042c.735 0 1.348.595 1.348 1.348 0 .752-.595 1.347-1.348 1.347Z"
		/>
		<Path
			fill={isDarkMode? colors.light : "#515C6C"}
			d="M32.31 20.522H9.7a1.348 1.348 0 0 0 0 2.695h22.61a1.348 1.348 0 0 0 0-2.695Z"
		/>
		<Path
			fill={isDarkMode? colors.light : colors.dark}
			stroke={isDarkMode? colors.light : colors.dark}
			strokeWidth={2.2}
			d="M17.32 29.993A4.143 4.143 0 0 1 13.173 26h15.644a4.143 4.143 0 0 1-4.147 3.994h-7.35ZM28.817 17.743H13.173a4.143 4.143 0 0 1 4.147-3.994h7.35a4.143 4.143 0 0 1 4.147 3.994Z"
		/>
	</Svg>
)};
export default SvgScan;
