/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

function SvgLogo(props: SvgProps) {
  return (
    <Svg
      fill="none"
      height={24}
      viewBox="0 0 65 53"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M33.501 14.078c.636.937 1.13 2.016 1.481 3.237h11.042c-.352-2.543-1.146-4.868-2.384-6.976a19.294 19.294 0 0 0-4.793-5.496C36.906 3.304 34.68 2.116 32.17 1.28 29.661.427 26.951 0 24.041 0c-3.396 0-6.55.594-9.461 1.782a22.12 22.12 0 0 0-7.654 5.194c-2.191 2.276-3.898 5.053-5.12 8.332C.603 18.57 0 22.284 0 26.45c0 5.42 1.012 10.105 3.036 14.053 2.041 3.931 4.886 6.968 8.533 9.11 3.647 2.124 7.88 3.186 12.698 3.186 4.316 0 8.147-.87 11.493-2.61a20.369 20.369 0 0 0 3.074-1.976l.05 4.787h7.31l.306-13.05c0-5.723 3.675-10.246 7.632-10.246 2.332 0 3.25 1.555 3.25 3.463 0 1.978-1.06 4.24-2.19 5.37h8.127c.636-1.06 1.554-3.533 1.554-6.854 0-5.088-3.18-7.915-7.49-7.915-6.148 0-9.611 4.947-10.883 10.459v-9.752h-7.915l.094 8.994c-.441 1.18-1.522 2.414-2.48 3.505-.612.7-1.174 1.34-1.485 1.873-.81 1.413-2.008 2.004-3.482 2.73-.2.099-.406.2-.616.306-1.74.87-3.84 1.305-6.3 1.305-2.71 0-5.06-.653-7.05-1.957-1.992-1.322-3.53-3.238-4.618-5.747-1.088-2.51-1.631-5.554-1.631-9.135 0-3.58.552-6.608 1.656-9.084 1.104-2.493 2.643-4.391 4.617-5.696 1.991-1.305 4.3-1.958 6.926-1.958 1.406 0 2.685.176 3.84.527 1.171.352 2.208.862 3.112 1.531a9.14 9.14 0 0 1 2.333 2.41Zm-2.03 21.256a5.889 5.889 0 1 0 0-11.778 5.889 5.889 0 0 0 0 11.778ZM64.778 47.11a5.889 5.889 0 1 1-11.778 0 5.889 5.889 0 0 1 11.778 0Z"
        fill="#fff"
        fillRule="evenodd"
      />
    </Svg>
  );
}
export default SvgLogo;
