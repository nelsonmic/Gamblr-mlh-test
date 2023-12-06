import { useAppearanceContext } from 'providers/Appearance.provider';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSupport = (props: SvgProps) => {
	const { isDarkMode, colors } = useAppearanceContext();
	return (
		<Svg
			width={24}
			height={24}
			fill="none"
			viewBox="0 0 24 25"
			{...props}>
			<Path
				fill={isDarkMode? colors.light : colors.dark }
				d="m10.155 15.073-.01-.021a7.037 7.037 0 0 1-.401-.123l-.01-.004A6.996 6.996 0 0 1 5 8.3a7 7 0 0 1 13.96-.75c.044.413-.296.75-.71.75s-.745-.338-.8-.748a5.5 5.5 0 1 0-7.28 5.937 2 2 0 1 1 3.378 2.078 2 2 0 0 1-3.393-.494m-1.025 1.23a8.506 8.506 0 0 1-3.136-1.988 2.25 2.25 0 0 0-1.99 2.234v.92c0 .572.178 1.13.51 1.596C6.056 21.229 8.58 22.3 12 22.3s5.945-1.072 7.49-3.235a2.75 2.75 0 0 0 .513-1.6v-.917a2.25 2.25 0 0 0-2.248-2.25H15.5a3.5 3.5 0 0 1-6.37 2.005M16 8.3a3.991 3.991 0 0 0-2.849-3.83 4 4 0 0 0-3.393 7.143A3.485 3.485 0 0 1 12 10.8c.853 0 1.635.305 2.243.813A3.996 3.996 0 0 0 16 8.3"
			/>
		</Svg>
)};
export default SvgSupport;
