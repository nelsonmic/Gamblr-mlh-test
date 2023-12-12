import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgToastError = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 20 20"
		{...props}>
		<Path
			fill={props.fill ?? "#ffffff"}
			d="m6.4 15 3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6L15 6.4 13.6 5 10 8.6 6.4 5 5 6.4 8.6 10 5 13.6zm3.6 5a9.733 9.733 0 0 1-3.9-.788 10.092 10.092 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.732 9.732 0 0 1 0 10c0-1.383.263-2.683.788-3.9a10.092 10.092 0 0 1 2.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0 1 10 0c1.383 0 2.683.262 3.9.787a10.105 10.105 0 0 1 3.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0 1 20 10a9.733 9.733 0 0 1-.788 3.9 10.092 10.092 0 0 1-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137A9.733 9.733 0 0 1 10 20"
		/>
	</Svg>
);
export default SvgToastError;
