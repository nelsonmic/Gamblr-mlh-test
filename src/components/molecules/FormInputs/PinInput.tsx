import { useAppearanceContext } from 'providers/Appearance.provider';
import { useRef } from 'react';
import CodeInput from 'react-native-confirmation-code-input';

export const PinInput = ({...props}) => {
      const ref = useRef(null)
      const { isDarkMode } = useAppearanceContext();
      return (
            <CodeInput
                  ref={ref}
                  {...props}
                  activeColor={isDarkMode? "#808080" : '#010101'}
                  inactiveColor= {isDarkMode? "#29292A" : '#808080'}
                  autoFocus={true}
                  containerStyle={{ 
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: 0,
                  }}
                  codeInputStyle={{ 
                        fontWeight: '800', 
                        borderRadius: 12,
                        margin:0, 
                        width: 50,
                        height: 60,
                        backgroundColor: isDarkMode? "#29292A": "#FFFFFF"
                  }}
                  onFulfill={() => console.warn("hello")}
            />
      )
}