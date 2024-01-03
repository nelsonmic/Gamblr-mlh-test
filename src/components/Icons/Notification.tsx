import { useAppearanceContext } from 'providers/Appearance.provider';
import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
 type Props = SvgProps & {
	isNotificationAvailable: boolean
 }
const SvgNotification = (props: Props) => {
	const { isDarkMode, colors } = useAppearanceContext();
	return (
	<Svg
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 24 24"
		{...props}>
		<Path
			fill={isDarkMode? colors.light : colors.dark}
			d="M12 1.996a7.49 7.49 0 0 1 7.496 7.25l.004.25v4.097l1.38 3.156a1.25 1.25 0 0 1-1.145 1.75L15 18.502a3 3 0 0 1-5.995.177L9 18.5H4.275a1.25 1.25 0 0 1-1.147-1.747L4.5 13.594V9.496c0-4.155 3.352-7.5 7.5-7.5ZM13.5 18.5l-3 .002a1.5 1.5 0 0 0 2.993.145l.007-.147M12 3.496c-3.32 0-6 2.674-6 6v4.41L4.656 17h14.697L18 13.907V9.51l-.003-.225A5.988 5.988 0 0 0 12 3.496"
		/>
		{
			props.isNotificationAvailable ? (
				<Circle cx={17} cy={6} r={4} fill="#B94545" />
			): null
		}
	</Svg>
)};
export default SvgNotification;
