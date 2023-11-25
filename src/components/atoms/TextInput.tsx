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
  return (
    <StyledTextInput
      ref={ref}
      className={clsx(className)}
      maxFontSizeMultiplier={1}
      placeholderTextColor="#B7B7B7"
      selectionColor="#000000"
      {...rest}
    />
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
