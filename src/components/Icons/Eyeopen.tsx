import { useAppearanceContext } from 'providers/Appearance.provider';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgEyeopen = (props: SvgProps) => {
	const { isDarkMode, colors } = useAppearanceContext();
return (
	<Svg
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 22 18"
		{...props}>
		<Path
						stroke={isDarkMode? colors.light : colors.dark}
			fillRule="evenodd"
			d="M11 5.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M8.75 9a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
			clipRule="evenodd"
		/>
		<Path
						stroke={isDarkMode? colors.light : colors.dark}
			fillRule="evenodd"
			d="M11 .25c-4.514 0-7.555 2.704-9.32 4.997l-.031.041c-.4.519-.767.996-1.016 1.56C.366 7.453.25 8.112.25 9c0 .888.116 1.547.383 2.152.25.564.617 1.042 1.016 1.56l.032.041C3.445 15.046 6.486 17.75 11 17.75c4.514 0 7.555-2.704 9.32-4.997l.031-.041c.4-.518.767-.996 1.016-1.56.267-.605.383-1.264.383-2.152 0-.888-.116-1.547-.383-2.152-.25-.564-.617-1.041-1.016-1.56l-.032-.041C18.555 2.954 15.514.25 11 .25M2.87 6.162C4.498 4.045 7.15 1.75 11 1.75c3.85 0 6.501 2.295 8.13 4.412.44.57.696.91.865 1.292.158.358.255.795.255 1.546s-.097 1.188-.255 1.546c-.169.382-.426.722-.864 1.292C17.5 13.955 14.85 16.25 11 16.25c-3.85 0-6.501-2.295-8.13-4.412-.44-.57-.696-.91-.865-1.292-.158-.358-.255-.795-.255-1.546s.097-1.188.255-1.546c.169-.382.427-.722.865-1.292Z"
			clipRule="evenodd"
		/>
	</Svg>
)};
export default SvgEyeopen;
