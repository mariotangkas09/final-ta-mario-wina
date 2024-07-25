import React from "react";
import { Svg, Path } from "react-native-svg";

const ArrowIcon = ({ size = 17, color = 'white' }) => (
     <Svg width={size} height={size} viewBox="0 0 28 27" fill="none">
     <Path d="M24.2222 13.8972L3.11106 13.8972" stroke="white" stroke-width="5.71429" stroke-linecap="round" stroke-linejoin="round"/>
     <Path d="M12.3468 21.4412L3.11105 13.897L12.347 6.35293" stroke="white" stroke-width="2.71429" stroke-linecap="round" stroke-linejoin="round"/>
     </Svg>

);

export default ArrowIcon;

