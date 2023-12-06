import { useAppearanceContext } from 'providers/Appearance.provider';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgTerms = (props: SvgProps) => {
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
			d="M14 22.3h-4c-3.771 0-5.657 0-6.828-1.172C2 19.957 2 18.07 2 14.3v-4c0-3.771 0-5.657 1.172-6.828C4.343 2.3 6.239 2.3 10.03 2.3c.606 0 1.091 0 1.5.017-.013.08-.02.16-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848.114.847.375 1.694 1.067 2.386.69.69 1.538.952 2.385 1.066.781.105 1.751.105 2.848.105h4.052c.043.534.043 1.19.043 2.063v.437c0 3.77 0 5.657-1.172 6.828C19.657 22.3 17.771 22.3 14 22.3m-8.75-7.5a.75.75 0 0 1 .75-.75h8a.75.75 0 1 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 1 1 0 1.5H6a.75.75 0 0 1-.75-.75"
			clipRule="evenodd"
		/>
		<Path
			fill={isDarkMode? colors.light : colors.dark }
			d="m19.352 7.917-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5.3c0 2.357 0 3.536.732 4.268.732.732 1.911.732 4.268.732h3.58c-.362-.704-1.012-1.288-2.228-2.383"
		/>
	</Svg>
)};
export default SvgTerms;
