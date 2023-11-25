import React, { ReactNode } from 'react';
import { TextInput, View } from 'components/atoms';
import type { TextInputProps as RNTextInputProps } from 'react-native';
import clsx from 'clsx';

type FormInputProps = RNTextInputProps & {
      leftIcon?: ReactNode,
      rightIcon?: ReactNode,
      styleContainer?: string,
      styleInput?: string,
};

export const FormInput: React.FC<FormInputProps> = ({
      leftIcon, 
      rightIcon, 
      placeholder, 
      secureTextEntry,
      selectionColor,
      styleContainer,
      styleInput
      }, 
      ...props) => {
  return (
    <View 
      className={clsx(
            'border-gray-300 border bg-white-200 flex-row justify-between p-4 py-5 mb-4 rounded-2xl',
            styleContainer
      )}>
      {leftIcon}
      <TextInput 
            {...props} 
            className={clsx(
                  'flex-1 w-full px-4 font-interRegular',
                  styleInput 
            )}
            placeholder={placeholder}
            placeholderTextColor={"#515C6C"} 
            selectionColor={selectionColor}
            secureTextEntry={secureTextEntry}
      />
      {rightIcon}
    </View>
  );
};