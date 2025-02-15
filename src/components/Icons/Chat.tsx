import { useAppearanceContext } from 'providers/Appearance.provider';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { BottomTabSvgProps } from './Home';

const SvgChat: React.FC<BottomTabSvgProps> = ({isFocused ,...rest}) => {
	const { isDarkMode, colors } = useAppearanceContext();
  return (
    <Svg
      fill="none"
      height={24}
      viewBox="0 0 21 20"
      width={24}
      {...rest}
    >
      <Path
        d="M7.1 11.5h4.481-4.48Zm0 0-.063.004a.25.25 0 0 0 .046.496l.018-.5Zm4.652.067a.25.25 0 0 0-.17-.067l.17.067Zm0 0a.25.25 0 0 1 .079.166m-.08-.166.08.166m0 0a.25.25 0 0 1-.056.175m.056-.175-.056.175m0 0a.25.25 0 0 1-.147.088m.147-.088-.147.088m0 0-.064.004h-4.48l4.544-.004ZM7.1 8h6.487a.25.25 0 0 1 .045.496l-.062.004H7.084L7.1 8Zm0 0-.064.004M7.101 8l-.064.004m0 0a.25.25 0 0 0 .046.496l-.046-.496ZM10.333 19.5a9.46 9.46 0 0 1-4.357-1.056l-.175-.09-.189.052-3.826 1.067a.75.75 0 0 1-.924-.924l1.068-3.822.053-.19-.09-.175a9.46 9.46 0 0 1-1.06-4.361V10a9.5 9.5 0 0 1 9.5-9.5 9.5 9.5 0 0 1 9.5 9.5 9.5 9.5 0 0 1-9.5 9.5Zm0-18.5A9 9 0 0 0 2.47 14.38l.05.09-1.056 3.787-.239.854.855-.238 3.789-1.057.09.05A9 9 0 1 0 10.335 1Z"
        fill= {!!(isDarkMode && isFocused)? colors.light : !!(!isDarkMode && isFocused)? colors.dark: colors.darkGray}
        stroke= {!!(isDarkMode && isFocused)? colors.light : !!(!isDarkMode && isFocused)? colors.dark: colors.darkGray}
      />
    </Svg>
  );
}
export default SvgChat;
