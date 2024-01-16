import React, { ReactNode, forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Text, TextInput, View } from 'components/atoms';
import { TextInputProps as RNTextInputProps, TouchableOpacity } from 'react-native';
import clsx from 'clsx';
import { useAppearanceContext } from 'providers/Appearance.provider';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export type FormInputProps = RNTextInputProps & {
      leftIcon?: ReactNode,
      rightIcon?: ReactNode,
      autocapitalize? : 'none' | 'sentences' | 'words' | 'characters' | undefined,
      styleInput?: string,
      styleContainer?: string,
      styleLabel?: string,
      value?: string | number; 
      onChangeText?: (text: string | number) => void;
      onBlur?: () => void;
      onFocus?: () => void;
      isError?: boolean;
      error?: string;
      label?: string;
      isDefaultPlaceholderBehavior?: boolean;
};

export type FormInputRef = {
  handleInputFocus: () => void;
};

export const FormInput = forwardRef<FormInputRef ,FormInputProps>(({
      leftIcon, 
      rightIcon, 
      placeholder, 
      styleContainer,
      styleInput,
      styleLabel,
      value,
      autoCapitalize = "none",
      onChangeText,
      onBlur,
      onFocus,
      isError,
      error,
      label,
      isDefaultPlaceholderBehavior = false,
      ...props
      }, 
      forwardedRef 
      ) => {

      const { isDarkMode } = useAppearanceContext();
      const inputRef = useRef(null);

      const translateX = useSharedValue(0);
      const translateY = useSharedValue(0);

      const animatedStyle = useAnimatedStyle(() => ({
            transform: [
                  {translateX: translateX.value},
                  {translateY: translateY.value}
            ]
      }));

     const runAnimation = () => {
            translateY.value = withTiming(-46, 
                  {duration: 400, easing: Easing.elastic(1)}, 
                  () => {
                        translateX.value = withTiming(-46, 
                              {duration: 400, easing: Easing.elastic(1)}
                        )
                  }
            )
      }

      const reverseAnimation = () => {
            translateX.value = withTiming(0, 
                  {duration: 400, easing: Easing.elastic(1)}, 
                  () => {
                        translateY.value = withTiming(0, 
                              {duration: 400, easing: Easing.elastic(1)}
                        )
                  }
            )
      }

      const handleInputFocus = () => {
            if (inputRef.current) {
                  inputRef.current.focus()
                  runAnimation();
            }
      };

      const handleInputBlur = () => {
            if(!value){
                  reverseAnimation();
            }
      };

      useImperativeHandle(forwardedRef, () => ({
            handleInputFocus: () => {
                  handleInputFocus();
            },
      }));

      return (
            <View className='mb-8'>
                  {
                        label? (
                              <Text 
                                    className={clsx('mb-2 text-black-100 font-interRegular text-sm', styleLabel)}
                              > { label }</Text>
                        ): null
                  }
                  <View 
                        className={clsx(
                              'relative border space-x-3 bg-white-200 flex-row items-center justify-between h-16 py-2 px-4 rounded-2xl',
                              styleContainer,
                              {
                                    "bg-darkMode-input-bg border-darkMode-input-bg" : isDarkMode,
                                    "border-gray-300" : !isDarkMode
                              }
                        )}>
                        {leftIcon}
                        <TouchableOpacity 
                              className='flex-1 w-full h-full relative justify-center'
                              onPress={handleInputFocus}
                        >
                              <TextInput 
                                    {...props}
                                    ref={inputRef}
                                    autoCapitalize={autoCapitalize}
                                    placeholder={isDefaultPlaceholderBehavior? placeholder : ""}
                                    className={clsx(
                                          ' font-interRegular h-full w-full px-2',
                                          {
                                                "text-white-100" : isDarkMode,
                                                "text-black-100" : !isDarkMode
                                          },
                                          styleInput 
                                    )}
                                    selectionColor={isDarkMode? "#808080" :"#515C6C"}
                                    onFocus={() => {
                                          handleInputFocus();
                                          onFocus && onFocus();
                                    }}
                                    onBlur={() => {
                                          handleInputBlur();
                                          onBlur && onBlur();
                                    }}
                                    onChangeText={onChangeText}
                              />
                              {
                                    !isDefaultPlaceholderBehavior? (
                                          <Animated.Text 
                                                style={animatedStyle}
                                                className={clsx('absolute font-interRegular text-xs ml-2 text-gray-300')
                                          }>{placeholder}</Animated.Text>
                                    ) : null
                              }
                        </TouchableOpacity>
                        {rightIcon}
                  </View>
                  {isError? (
                        <Text className="text-red-500 mt-1 text-xs ml-2.5">{error}</Text>
                  ): null}
            </View>
      );
});