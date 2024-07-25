import React from "react";
import { Svg, Path } from "react-native-svg";

const HomeIcon = ({ size = 17, color = 'white' }) => (
     <Svg width={size} height={size} viewBox="0 0 27 27" fill="none">
     <Path d="M5.3999 11.115L13.9499 4.5L22.4999 11.115V21.5099C22.4999 22.0112 22.2997 22.4919 21.9434 22.8464C21.5871 23.2008 21.1038 23.3999 20.5999 23.3999H7.2999C6.79599 23.3999 6.31272 23.2008 5.9564 22.8464C5.60008 22.4919 5.3999 22.0112 5.3999 21.5099V11.115Z" stroke="#676A6C" stroke-width="1.51698" stroke-linecap="round" stroke-linejoin="round"/>
     <Path d="M11.0999 23.4002V13.9502H16.7999V23.4002" stroke="#676A6C" stroke-width="1.51698" stroke-linecap="round" stroke-linejoin="round"/>
     </Svg>

);

export default HomeIcon;

