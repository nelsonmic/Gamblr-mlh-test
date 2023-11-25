import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGreenCheck = (props: SvgProps) => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 24 25"
		{...props}>
		<G clipPath="url(#greenCheck_svg__a)">
			<Path
				fill="#00DC8A"
				d="M12 24.5c6.627 0 12-5.373 12-12S18.627.5 12 .5 0 5.873 0 12.5s5.373 12 12 12Zm5.06-13.44-5.5 5.5a1.5 1.5 0 0 1-2.12 0l-2-2a1.5 1.5 0 0 1 2.12-2.12l.94.939 4.44-4.44a1.5 1.5 0 0 1 2.12 2.121Z"
			/>
		</G>
		<Defs>
			<ClipPath id="greenCheck_svg__a">
				<Path fill="#fff" d="M0 .5h24v24H0z" />
			</ClipPath>
		</Defs>
	</Svg>
);
export default SvgGreenCheck;
