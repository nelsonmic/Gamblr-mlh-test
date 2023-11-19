import * as React from 'react';
import Svg, { Mask, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

function SvgHome(props: SvgProps) {
  return (
    <Svg
      fill="none"
      height={24}
      viewBox="0 0 21 20"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Mask fill="#fff" id="home_svg__a">
        <Path d="M19 8a1 1 0 1 0-2 0h2ZM5 8a1 1 0 0 0-2 0h2Zm14.293 2.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM11 1l.707-.707a1 1 0 0 0-1.414 0L11 1ZM1.293 9.293a1 1 0 1 0 1.414 1.414L1.293 9.293ZM6 20h10v-2H6v2Zm13-3V8h-2v9h2ZM5 17V8H3v9h2Zm15.707-7.707-9-9-1.414 1.414 9 9 1.414-1.414Zm-10.414-9-9 9 1.414 1.414 9-9L10.293.293ZM16 20a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2ZM6 18a1 1 0 0 1-1-1H3a3 3 0 0 0 3 3v-2Z" />
      </Mask>
      <Path
        d="M19 8a1 1 0 1 0-2 0h2ZM5 8a1 1 0 0 0-2 0h2Zm14.293 2.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM11 1l.707-.707a1 1 0 0 0-1.414 0L11 1ZM1.293 9.293a1 1 0 1 0 1.414 1.414L1.293 9.293ZM6 20h10v-2H6v2Zm13-3V8h-2v9h2ZM5 17V8H3v9h2Zm15.707-7.707-9-9-1.414 1.414 9 9 1.414-1.414Zm-10.414-9-9 9 1.414 1.414 9-9L10.293.293ZM16 20a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2ZM6 18a1 1 0 0 1-1-1H3a3 3 0 0 0 3 3v-2Z"
        fill="#555"
      />
      <Path
        d="M17 8.5h2v-1h-2v1Zm-14 0h2v-1H3v1Zm17.354.44-1.415 1.413.708.707 1.414-1.414-.707-.707ZM3.06 10.352 1.647 8.94l-.708.707 1.414 1.414.708-.707ZM16.5 20v-2h-1v2h1Zm-11-2v2h1v-2h-1Zm11.5-.5h2v-1h-2v1Zm-14 0h2v-1H3v1ZM3 8H2h1Zm16.293 2.707-.707.707.006.006.006.006.695-.72Zm1.414-1.414.72-.695-.007-.006-.006-.006-.707.707ZM11 1l-.707.707.707.707.707-.707L11 1Zm.707-.707.707-.707-.707.707Zm-1.414 0-.707-.707.707.707Zm-9 9 .695.72.006-.007L2 10l-.707-.707Zm1.414 1.414L2 10l-.006.006-.006.006.719.695ZM6 20v1-1Zm10 0v1-1Zm3-3h1-1ZM10.293 1.707 9.586 1l-.707.707.707.707.707-.707Zm1.414 0 .707.707.707-.707L12.414 1l-.707.707ZM20 8a2 2 0 0 0-.586-1.414L18 8h2Zm-.586-1.414A2 2 0 0 0 18 6v2l1.414-1.414ZM18 6a2 2 0 0 0-1.414.586L18 8V6Zm-1.414.586A2 2 0 0 0 16 8h2l-1.414-1.414ZM6 8a2 2 0 0 0-.586-1.414L4 8h2Zm-.586-1.414A2 2 0 0 0 4 6v2l1.414-1.414ZM4 6a2 2 0 0 0-1.414.586L4 8V6Zm-1.414.586A2 2 0 0 0 2 8h2L2.586 6.586Zm16.012 4.84a2 2 0 0 0 1.407.561l-.017-2-1.39 1.44Zm1.407.561a2 2 0 0 0 1.397-.585l-1.414-1.414.017 2Zm1.397-.585a2 2 0 0 0 .586-1.397l-2-.018 1.414 1.415Zm.586-1.397a2 2 0 0 0-.562-1.407l-1.438 1.39 2 .017Zm-10.28-8.298L12.413 1 11-.414l-.707.707 1.414 1.414Zm.706-2.121A2 2 0 0 0 11-1v2l1.414-1.414ZM11-1a2 2 0 0 0-1.414.586L11 1v-2ZM9.586 1l.707.707L11.707.293 11-.414 9.586 1ZM.598 8.573a2 2 0 0 0-.448.65l1.838.79-1.39-1.44Zm-.448.65a2 2 0 0 0-.162.772l2 .017-1.838-.79Zm-.162.772a2 2 0 0 0 .149.774l1.85-.757-2-.017Zm.149.774a2 2 0 0 0 .437.657l1.414-1.414-1.851.757Zm.437.657c.187.188.41.337.656.437l.758-1.85-1.414 1.413Zm.656.437a2 2 0 0 0 .775.149l-.017-2-.758 1.851Zm.775.149a2 2 0 0 0 .772-.162l-.79-1.838.018 2Zm.772-.162a2 2 0 0 0 .65-.448l-1.44-1.39.79 1.838ZM6 21h10v-2H6v2Zm10-4H6v2h10v-2Zm4 0V8h-2v9h2Zm-4-9v9h2V8h-2ZM6 17V8H4v9h2ZM2 8v9h2V8H2Zm19.414.586-9-9L11 1l9 9 1.414-1.414ZM11-.414 9.586 1 11 2.414 12.414 1 11-.414ZM9.586 2.414l9 9L20 10l-9-9-1.414 1.414Zm0-2.828-9 9L2 10l9-9L9.586-.414ZM3.414 11.414l9-9L11 1l-9 9 1.414 1.414Zm9-10.414L11-.414 9.586 1 11 2.414 12.414 1ZM16 21a4 4 0 0 0 2.828-1.172l-1.414-1.414A2 2 0 0 1 16 19v2Zm2.828-1.172A4 4 0 0 0 20 17h-2a2 2 0 0 1-.586 1.414l1.414 1.414ZM16 17l1.414 1.414A2 2 0 0 0 18 17h-2Zm0 0v2a2 2 0 0 0 1.414-.586L16 17ZM6 17l-1.414 1.414A2 2 0 0 0 6 19v-2Zm0 0H4a2 2 0 0 0 .586 1.414L6 17Zm-4 0a4 4 0 0 0 1.172 2.828l1.414-1.414A2 2 0 0 1 4 17H2Zm1.172 2.828A4 4 0 0 0 6 21v-2a2 2 0 0 1-1.414-.586l-1.414 1.414Z"
        fill="#555"
        mask="url(#home_svg__a)"
      />
    </Svg>
  );
}
export default SvgHome;
