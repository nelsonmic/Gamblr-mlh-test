import React, { ReactNode, useRef, useState } from 'react';
import { Text, TextInput, View } from 'components/atoms';
import { TextInputProps as RNTextInputProps, TouchableOpacity } from 'react-native';
import clsx from 'clsx';
import { useAppearanceContext } from 'providers/Appearance.provider';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export type FormInputProps = RNTextInputProps & {
      leftIcon?: ReactNode,
      rightIcon?: ReactNode,
      styleContainer?: string,
      styleInput?: string,
      value?: string | number; 
      onChangeText?: (text: string | number) => void;
      onBlur?: () => void;
      onFocus?: () => void;
      isError?: boolean;
      error?: string;
};

export const FormInput: React.FC<FormInputProps> = ({
      leftIcon, 
      rightIcon, 
      placeholder, 
      styleContainer,
      styleInput,
      value,
      onChangeText,
      onBlur,
      onFocus,
      isError,
      error,
      ...props
      } 
      ) => {

      const { isDarkMode } = useAppearanceContext();
      const inputRef = useRef(null);
      const [inputValue, setInputValue] = useState(value);

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
            if(!inputValue){
                  reverseAnimation();
            }
      };
      return (
            <View className='mb-8'>
                  <View 
                        className={clsx(
                              'border space-x-3 bg-white-200 flex-row items-center justify-between h-16 py-2 px-4 rounded-2xl',
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
                                    value={value}
                                    onBlur={() => {
                                          handleInputBlur();
                                          onBlur && onBlur();
                                    }}
                                    onChangeText={(text)=> {
                                          setInputValue(text)
                                          onChangeText && onChangeText(text)
                                    }}
                              />
                              <Animated.Text 
                                    style={animatedStyle}
                                    className={clsx('absolute font-interRegular ml-2', {
                                          "text-white-100" : isDarkMode,
                                          "text-black-100" : !isDarkMode
                                    }
                              )}>{placeholder}</Animated.Text>
                        </TouchableOpacity>
                        {rightIcon}
                  </View>
                  {isError? (
                        <Text className="text-red-500 mt-1 text-xs ml-2.5">{error}</Text>
                  ): null}
            </View>
      );
};