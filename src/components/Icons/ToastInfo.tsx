import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgToastInfo = (props: SvgProps) => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 20 20"
		{...props}>
		<Path
			fill="#0853C2"
			d="M10 .25A9.75 9.75 0 1 0 19.75 10 9.76 9.76 0 0 0 10 .25m-.375 4.5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m1.125 10.5a1.5 1.5 0 0 1-1.5-1.5V10a.75.75 0 0 1 0-1.5 1.5 1.5 0 0 1 1.5 1.5v3.75a.75.75 0 1 1 0 1.5"
		/>
	</Svg>
);
export default SvgToastInfo;
