import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCongratulations = (props: SvgProps) => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 100 100"
		{...props}>
		<Path
			fill="#3E863E"
			d="M66.791 41.792a3.125 3.125 0 1 0-4.416-4.417L43.748 56l-6.125-6.125a3.125 3.125 0 0 0-4.416 4.417l8.333 8.333a3.125 3.125 0 0 0 4.417 0L66.79 41.792"
		/>
		<Path
			fill="#3E863E"
			fillRule="evenodd"
			d="M50 5.208C25.262 5.208 5.208 25.262 5.208 50c0 24.737 20.054 44.792 44.792 44.792C74.737 94.792 94.79 74.737 94.79 50 94.791 25.263 74.737 5.208 50 5.208ZM11.458 50a38.542 38.542 0 1 1 77.083 0 38.542 38.542 0 0 1-77.083 0Z"
			clipRule="evenodd"
		/>
	</Svg>
);
export default SvgCongratulations;
