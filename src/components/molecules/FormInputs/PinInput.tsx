import { useRef } from 'react';
import CodeInput from 'react-native-confirmation-code-input';

export const PinInput = ({...props}) => {
      const ref = useRef(null)
      return (
            <CodeInput
                  ref={ref}
                  {...props}
                  activeColor='#010101'
                  inactiveColor='#808080'
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
                        height: 60 
                  }}
                  onFulfill={() => console.warn("hello")}
            />
      )
}