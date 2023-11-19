import { Text as RNText } from 'react-native';
import { styled } from 'nativewind';
import { forwardRef } from 'react';
import clsx from 'clsx';

const StyledText = styled(RNText);

export type TextProps = React.ComponentProps<typeof StyledText>;

const Text = forwardRef<RNText, TextProps>(
  ({ children, className, ...props }, ref) => (
    <StyledText
      className={clsx(className)}
      maxFontSizeMultiplier={1}
      {...props}
      ref={ref}
    >
      {children}
    </StyledText>
  ),
);

Text.displayName = 'Text';

export default Text;
