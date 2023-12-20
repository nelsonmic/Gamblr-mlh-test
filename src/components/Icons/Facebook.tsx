import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgFacebook = (props: SvgProps) => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 41 41"
		{...props}>
		<Rect
			width={40}
			height={40}
			x={0.25}
			y={0.587}
			fill="#131313"
			rx={20}
		/>
		<Path
			fill="#fff"
			d="M17.448 30.087h4v-8.01h3.604l.396-3.98h-4v-2.01a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01"
		/>
	</Svg>
);
export default SvgFacebook;
