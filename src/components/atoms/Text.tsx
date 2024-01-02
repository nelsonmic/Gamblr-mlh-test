import { Text as RNText } from 'react-native';
import { styled } from 'nativewind';
import { forwardRef } from 'react';
import clsx from 'clsx';
import { useAppearanceContext } from 'providers/Appearance.provider';

const StyledText = styled(RNText);

export type TextProps = React.ComponentProps<typeof StyledText>;

const Text = forwardRef<RNText, TextProps>(
  ({ children, className, ...props }, ref) => {
    const { isDarkMode } = useAppearanceContext();
  return (
    <StyledText
      className={clsx(className, "text-black-100", {
        "text-white-100" : isDarkMode,
      })}
      maxFontSizeMultiplier={1}
      {...props}
      ref={ref}
    >
      {children}
    </StyledText>
  )
});

Text.displayName = 'Text';

export default Text;
