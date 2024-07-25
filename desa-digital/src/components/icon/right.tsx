import React from "react";
import { View } from "react-native";
import { Svg, Path } from "react-native-svg";

const LeftIcon = ({ size = 20, color = 'black' }) => (
     <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <Path d="M7.0001 1L5.6001 2.5L13.0001 10L5.6001 17.5L7.0001 19L16.0001 10L7.0001 1Z" fill="#606060" />
     </Svg>

);

export default LeftIcon;