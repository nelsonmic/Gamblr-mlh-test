/* eslint-disable react/react-in-jsx-scope */
import clsx from 'clsx';
import { styled } from 'nativewind';
import { forwardRef } from 'react';
import type { TextInputProps as RNTextInputProps } from 'react-native';
import { TextInput as RNTextInput } from 'react-native';

export type TextInputProps = RNTextInputProps & {
  className?: string;
};

const StyledTextInput = styled(RNTextInput, {});

const TextInput = forwardRef<RNTextInput, TextInputProps>(({ className, ...rest }, ref) => {
  const baseClass = 'h-16 p-4 text-white text-2xl justify-between items-center inline-flex';

  return (
    <StyledTextInput
      ref={ref}
      className={clsx(className, baseClass)}
      maxFontSizeMultiplier={1}
      placeholderTextColor="#B7B7B7"
      selectionColor="#ffffff"
      {...rest}
    />
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
