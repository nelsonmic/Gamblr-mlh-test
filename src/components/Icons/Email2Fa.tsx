import * as React from 'react';
import Svg, { G, Rect, Path, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import type { SvgProps } from 'react-native-svg';
const SvgEmail2Fa = (props: SvgProps) => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 48 49"
		{...props}>
		<G filter="url(#email2fa_svg__a)">
			<Rect
				width={48}
				height={48}
				x={48}
				y={0.5}
				fill="#F9F9F9"
				rx={24}
				transform="rotate(90 48 .5)"
			/>
			<Rect
				width={47}
				height={47}
				x={47.5}
				y={1}
				stroke="#E0E0E0"
				rx={23.5}
				transform="rotate(90 47.5 1)"
			/>
			<Path
				fill="#131313"
				d="M34 18.5c0-1.1-.9-2-2-2H16c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0-8 5-8-5zm0 12H16v-10l8 5 8-5z"
			/>
		</G>
		<Defs></Defs>
	</Svg>
);
export default SvgEmail2Fa;
