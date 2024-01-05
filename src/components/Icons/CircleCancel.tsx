import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCircleCancel = (props: SvgProps) => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 20 20"
		{...props}>
		<Path
			fill="#515C6C"
			d="M8.358 7.475a.625.625 0 0 0-.883.883L9.117 10l-1.642 1.642a.624.624 0 1 0 .883.883L10 10.883l1.642 1.642a.624.624 0 0 0 .883-.883L10.883 10l1.642-1.642a.626.626 0 1 0-.883-.883L10 9.116 8.358 7.475"
		/>
		<Path
			fill="#515C6C"
			fillRule="evenodd"
			d="M10 1.042a8.958 8.958 0 1 0 0 17.916 8.958 8.958 0 0 0 0-17.916ZM2.292 10a7.708 7.708 0 1 1 15.416 0 7.708 7.708 0 0 1-15.416 0Z"
			clipRule="evenodd"
		/>
	</Svg>
);
export default SvgCircleCancel;
