import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgX = (props: SvgProps) => (
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
			x={0.75}
			y={0.587}
			fill="#131313"
			rx={20}
		/>
		<Path
			fill="#fff"
			d="M26.5 11.548h3.067l-6.7 7.659 7.883 10.419h-6.172l-4.833-6.32-5.532 6.32h-3.068l7.167-8.192-7.562-9.885h6.328l4.37 5.777 5.053-5.778m-1.075 16.243h1.7l-10.97-14.504h-1.823l11.093 14.504Z"
		/>
	</Svg>
);
export default SvgX;
