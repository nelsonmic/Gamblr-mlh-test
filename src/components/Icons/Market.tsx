import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

function SvgMarket(props: SvgProps) {
  return (
    <Svg
      fill="none"
      height={24}
      viewBox="0 0 25 24"
      width={24}
      {...props}
    >
      <Path
        d="M13.698 2.05h.001l6.51 3.51c.422.23.698.687.698 1.21 0 .523-.276.981-.698 1.21l-6.51 3.51-.008.005c-.306.172-.66.255-1.024.255-.356 0-.716-.089-1.046-.261L5.115 7.98a1.364 1.364 0 0 1-.698-1.21c0-.524.275-.982.698-1.211l6.508-3.51a2.182 2.182 0 0 1 2.075 0Zm-1.829 9 .004.002c.506.267 1.091.267 1.597 0l.004-.002 6.51-3.51.008-.004a.841.841 0 0 0 .371-.436.946.946 0 0 0 .007-.659.797.797 0 0 0-.395-.446l-6.499-3.504a1.685 1.685 0 0 0-.81-.21c-.274 0-.556.07-.809.21L5.361 5.99c-.444.237-.444.713-.444.78v.001c0 .054.003.184.056.33.055.15.171.334.396.445l6.5 3.505ZM9.84 22.073l-6.058-3.02h-.001a2.469 2.469 0 0 1-1.364-2.213v-5.72a1.354 1.354 0 0 1 1.966-1.213l6.058 3.02h.002a2.458 2.458 0 0 1 1.364 2.213v5.72c0 .476-.24.906-.643 1.155l-.005.002c-.215.136-.46.203-.712.203-.2 0-.413-.05-.607-.147Zm-6.477-11.71-.028.014-.026.017a.857.857 0 0 0-.392.726v5.72c0 .746.414 1.43 1.086 1.767l6.05 3.03a.868.868 0 0 0 .797-.01l.028-.014.026-.017a.857.857 0 0 0 .393-.726v-5.72a1.97 1.97 0 0 0-1.086-1.767l-6.05-3.03a.841.841 0 0 0-.384-.093.931.931 0 0 0-.414.103ZM14.174 22.018l-.004-.003a1.345 1.345 0 0 1-.643-1.155v-5.72c0-.94.522-1.788 1.364-2.213h.001l6.048-3.03c.426-.213.922-.19 1.324.058.402.25.643.678.643 1.155v5.72c0 .94-.523 1.788-1.365 2.213l-6.05 3.03-.006.003-.006.004c-.177.095-.383.14-.593.14-.252 0-.498-.066-.713-.202Zm7-11.665h-.001l-6.05 3.03a1.958 1.958 0 0 0-1.086 1.767v5.72c0 .427.276.649.392.726.168.112.49.222.851.041l6.05-3.03a1.97 1.97 0 0 0 1.087-1.767v-5.72a.857.857 0 0 0-.393-.726l-.026-.017-.028-.014a.933.933 0 0 0-.413-.103.842.842 0 0 0-.384.093Z"
        fill="#555"
        stroke="#555"
      />
    </Svg>
  );
}
export default SvgMarket;
