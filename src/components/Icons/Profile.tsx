import { useAppearanceContext } from 'providers/Appearance.provider';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

function SvgProfile(props: SvgProps) {
  const { isDarkMode, colors } = useAppearanceContext();
  return (
    <Svg
      fill="none"
      height={24}
      viewBox="0 0 18 18"
      width={24}
      {...props}
    >
      <Path
        d="M1 15a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z"
        stroke={isDarkMode? colors.light : "#555"}
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path d="M9 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke={isDarkMode? "#ffffff" : "#555"} strokeWidth={2} />
    </Svg>
  );
}
export default SvgProfile;
