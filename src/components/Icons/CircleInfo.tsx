import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCircleInfo = (props: SvgProps) => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 20 20"
		{...props}>
		<Path
			fill="#0853C2"
			d="M10 5.209a.625.625 0 0 1 .625.625v5a.625.625 0 0 1-1.25 0v-5A.625.625 0 0 1 10 5.209m0 8.958a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667Z"
		/>
		<Path
			fill="#0853C2"
			fillRule="evenodd"
			d="M1.042 10a8.958 8.958 0 1 1 17.916 0 8.958 8.958 0 0 1-17.916 0ZM10 2.292a7.708 7.708 0 1 0 0 15.416 7.708 7.708 0 0 0 0-15.416"
			clipRule="evenodd"
		/>
	</Svg>
);
export default SvgCircleInfo;
