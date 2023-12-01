import { useAppearanceContext } from 'providers/Appearance.provider';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgEyeClosed = (props: SvgProps) => {
const { isDarkMode, colors } = useAppearanceContext();
return (
	<Svg
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 22 12"
		{...props}>
		<Path
			stroke={isDarkMode? colors.light : "#131313"}
			fillRule="evenodd"
			d="M.606.08A1 1 0 0 1 1.92.606L1 1l.92-.394.003.008.021.045c.02.042.051.108.094.194.086.172.22.424.4.729a13.37 13.37 0 0 0 1.67 2.237c.19.204.387.402.59.592C6.18 5.8 8.251 7 11 7a8.706 8.706 0 0 0 3.22-.602c1.227-.483 2.254-1.21 3.096-1.998A13.05 13.05 0 0 0 20.05.675l.027-.058.005-.011a1 1 0 0 1 1.838.788l-.002.005-.004.008-.01.026-.04.087c-.223.463-.47.913-.742 1.348-.5.803-1.072 1.558-1.71 2.256l.796.797a1 1 0 1 1-1.414 1.415l-.84-.84c-.59.479-1.226.9-1.897 1.256l.782 1.202a1 1 0 1 1-1.676 1.091l-.986-1.514c-.679.208-1.404.355-2.176.424V10.5a1 1 0 1 1-2 0V8.956c-.775-.07-1.5-.217-2.177-.425l-.985 1.514a1 1 0 0 1-1.676-1.09l.782-1.203c-.7-.37-1.332-.8-1.897-1.257l-.84.84a1 1 0 0 1-1.414-1.414l.797-.797A15.406 15.406 0 0 1 .72 2.605a13.457 13.457 0 0 1-.624-1.179l-.01-.021-.002-.007v-.002C.08 1.396.08 1.394 1 1l-.919.395A1 1 0 0 1 .606.08Z"
			clipRule="evenodd"
		/>
	</Svg>
)};
export default SvgEyeClosed;
