import { useAppearanceContext } from 'providers/Appearance.provider';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgWallet = (props: SvgProps) => {
	const { isDarkMode, colors } = useAppearanceContext();
return (
	<Svg
		width={24}
		height={24}
		fill="none"
		viewBox="0 0 24 24"
		{...props}>
		<Path
			fill={isDarkMode? colors.light : colors.dark }
			fillRule="evenodd"
			d="M20.41 9.86a2.822 2.822 0 0 0-.175-.003H17.8c-1.992 0-3.698 1.581-3.698 3.643s1.706 3.643 3.699 3.643h2.433c.06 0 .12 0 .175-.004a1.698 1.698 0 0 0 1.586-1.581c.004-.059.004-.122.004-.18v-3.756c0-.058 0-.121-.004-.18a1.699 1.699 0 0 0-1.585-1.581m-2.823 4.611c.513 0 .93-.434.93-.971 0-.537-.417-.971-.93-.971-.513 0-.93.434-.93.971 0 .537.416.971.93.971"
			clipRule="evenodd"
		/>
		<Path
			fill={isDarkMode? colors.light : colors.dark }
			fillRule="evenodd"
			d="M20.234 18.6a.213.213 0 0 1 .217.17.213.213 0 0 1-.003.1c-.194.692-.501 1.282-.994 1.778-.721.727-1.636 1.05-2.766 1.203-1.098.149-2.5.149-4.272.149h-2.037c-1.771 0-3.174 0-4.272-.149-1.13-.153-2.045-.476-2.766-1.203C2.62 19.923 2.3 19 2.148 17.862 2 16.754 2 15.34 2 13.555v-.11c0-1.785 0-3.2.148-4.306C2.3 8 2.62 7.08 3.34 6.351c.721-.726 1.636-1.05 2.766-1.202C7.205 5 8.608 5 10.379 5h2.037c1.771 0 3.174 0 4.272.149 1.13.153 2.045.476 2.766 1.202.493.497.8 1.087.994 1.78a.214.214 0 0 1-.214.269h-2.433c-2.734 0-5.143 2.177-5.143 5.1 0 2.923 2.41 5.1 5.144 5.1zM5.614 8.886a.725.725 0 0 0-.722.728c0 .403.323.729.722.729H9.47c.4 0 .723-.326.723-.729a.726.726 0 0 0-.723-.728z"
			clipRule="evenodd"
		/>
		<Path
			fill={isDarkMode? colors.light : colors.dark }
			d="m7.777 4.024 1.958-1.443a2.969 2.969 0 0 1 3.53 0l1.97 1.451C14.41 4 13.49 4 12.482 4h-2.17c-.922 0-1.769 0-2.536.024"
		/>
	</Svg>
)};
export default SvgWallet;
