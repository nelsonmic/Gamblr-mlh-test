import { useAppearanceContext } from 'providers/Appearance.provider';
import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgAtSign = (props: SvgProps) => {
	const { isDarkMode, colors } = useAppearanceContext();
return (
	<Svg
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 24 25"
		{...props}>
		<G clipPath="url(#atSign_svg__a)">
			<Path
				fill={ isDarkMode? colors.light : "#515C6C" }
				d="M17.53 15.106c0 1.008.286 1.41 1.036 1.41 1.672 0 2.736-2.13 2.736-5.672 0-5.414-3.945-8.006-8.871-8.006-5.068 0-9.677 3.398-9.677 9.82 0 6.135 4.032 9.476 10.224 9.476 2.102 0 3.513-.23 5.672-.95l.463 1.928c-2.13.692-4.408.892-6.164.892C4.828 24.004.478 19.54.478 12.657.478 5.717 5.518.993 12.46.993c7.228 0 11.057 4.32 11.057 9.62 0 4.492-1.41 7.92-5.845 7.92-2.017 0-3.34-.807-3.513-2.594-.519 1.987-1.901 2.593-3.774 2.593-2.506 0-4.608-1.93-4.608-5.817 0-3.917 1.844-6.336 5.156-6.336 1.757 0 2.851.691 3.339 1.785l.836-1.526h2.42v8.468h.002Zm-3.542-3.801c0-1.583-1.182-2.247-2.16-2.247-1.066 0-2.246.863-2.246 3.399 0 2.016.893 3.139 2.245 3.139.95 0 2.161-.605 2.161-2.275v-2.016Z"
			/>
		</G>
		<Defs>
			<ClipPath id="atSign_svg__a">
				<Path fill="#fff" d="M0 .5h24v24H0z" />
			</ClipPath>
		</Defs>
	</Svg>
)};
export default SvgAtSign;
