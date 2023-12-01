import React, { ReactNode } from 'react';
import { TextInput, View } from 'components/atoms';
import type { TextInputProps as RNTextInputProps } from 'react-native';
import clsx from 'clsx';
import { useAppearanceContext } from 'providers/Appearance.provider';

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
            const { isDarkMode } = useAppearanceContext();
  return (
    <View 
      className={clsx(
            'border space-x-3 bg-white-200 flex-row items-center justify-between p-4 py-3 mb-4 rounded-2xl',
            styleContainer,
            {
                  "bg-darkMode-input-bg border-darkMode-input-bg" : isDarkMode,
                  "border-gray-300" : !isDarkMode
            }
      )}>
      {leftIcon}
      <TextInput 
            {...props} 
            className={clsx(
                  'flex-1 w-full font-interRegular py-2 px-2',
                  styleInput 
            )}
            placeholder={placeholder}
            placeholderTextColor={isDarkMode? "#808080" :"#515C6C"} 
            selectionColor={selectionColor}
            secureTextEntry={secureTextEntry}
      />
      {rightIcon}
    </View>
  );
};