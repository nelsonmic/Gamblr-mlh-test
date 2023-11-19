/* eslint-disable react/react-in-jsx-scope */
import clsx from 'clsx';
import { styled } from 'nativewind';
import { forwardRef } from 'react';
import { Pressable as RNPressable, type View } from 'react-native';

const StyledPressable = styled(RNPressable);

export type PressableProps = React.ComponentProps<typeof StyledPressable> & {
  transparent?: boolean;
};

const Pressable = forwardRef<View, PressableProps>(({ className, transparent, ...rest }, ref) => (
  <StyledPressable
    className={clsx(className, {
      'bg-transparent': transparent,
    })}
    {...rest}
    ref={ref}
  />
));

Pressable.displayName = 'Pressable';

export default Pressable;
