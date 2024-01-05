import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgFreeCaretArrow = ({stroke = "#0853C2", ...props}: SvgProps) => (
	<Svg
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 20 20"
		{...props}>
		<Path
			stroke={stroke}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M7.083 4.167 12.916 10l-5.833 5.834"
		/>
	</Svg>
);
export default SvgFreeCaretArrow;
