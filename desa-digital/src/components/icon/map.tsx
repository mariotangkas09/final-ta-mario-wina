import React from "react";
import { View } from "react-native";
import { Svg, Path } from "react-native-svg";

const MapIcon = ({ size = 17, color = 'black' }) => (
     <Svg width={size} height={size} viewBox="0 0 17 17" fill="none">
          <Path d="M8.50016 7.79158C9.28257 7.79158 9.91683 7.15732 9.91683 6.37492C9.91683 5.59252 9.28257 4.95825 8.50016 4.95825C7.71776 4.95825 7.0835 5.59252 7.0835 6.37492C7.0835 7.15732 7.71776 7.79158 8.50016 7.79158Z" stroke="#0D9276" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <Path d="M8.49984 14.875C8.49984 14.875 13.4582 11.4423 13.4582 7.02885C13.4582 5.72827 12.9358 4.48095 12.0059 3.5613C11.076 2.64165 9.81487 2.125 8.49984 2.125C7.18481 2.125 5.92363 2.64165 4.99377 3.5613C4.0639 4.48095 3.5415 5.72827 3.5415 7.02885C3.5415 11.4423 8.49984 14.875 8.49984 14.875Z" stroke="#0D9276" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
     </Svg>

);

export default MapIcon;