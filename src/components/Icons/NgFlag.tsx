import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgNgFlag = (props: SvgProps) => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 24 18"
		{...props}>
		<G clipPath="url(#NgFlag_svg__a)">
			<Path fill="#fff" d="M0 .818h24v16.364H0z" />
			<Path
				fill="#0A6A30"
				fillRule="evenodd"
				d="M0 .818h8v16.364H0V.818Zm16 0h8v16.364h-8V.818Z"
				clipRule="evenodd"
			/>
		</G>
		<Defs>
			<ClipPath id="NgFlag_svg__a">
				<Path fill="#fff" d="M0 .818h24v16.364H0z" />
			</ClipPath>
		</Defs>
	</Svg>
);
export default SvgNgFlag;
