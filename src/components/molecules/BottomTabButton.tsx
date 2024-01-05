import clsx from "clsx";
import { Text } from "components/atoms";
import { hapticFeedback } from "handlers/helpers/shared";
import { useNavigateTo } from "hooks/useNavigateTo";
import { Screens } from "navigations/Screens";
import { useAppearanceContext } from "providers/Appearance.provider";
import { FC, ReactElement } from "react";
import { Platform, TouchableOpacity } from "react-native";

type Props = {
      label: string;
      icon: ReactElement;
      isFocused: boolean;
      routeName: Screens
}
export const BottomTabButton: FC<Props> = ({label, icon, isFocused, routeName}) => {
  const { isDarkMode } = useAppearanceContext();
  const { goTo } = useNavigateTo();

  const handleNavigate = () => {
    hapticFeedback()
    goTo(routeName)
  }
  return (
    <TouchableOpacity onPress={handleNavigate} className='items-center space-y-2 mt-4 mb-8'>
      {icon}
      <Text
            className={clsx('font-interSemiBold text-center text-xs leading-3 text-gray-100', {
                  'font-interBold': Platform.OS === 'android',
                  'mt-2': Platform.OS === 'android',
                  'text-white-100': isDarkMode && isFocused,
                  'text-black-100' : !isDarkMode && isFocused,
                  'text-[#555]': !isFocused
            })}
      >
    {label}
  </Text>
    </TouchableOpacity>
  )
}