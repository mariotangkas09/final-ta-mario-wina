import React from "react";
import { Svg, Path } from "react-native-svg";

const DusunIcon = ({ size = 17, color = 'white' }) => (
     <Svg width={size} height={size} viewBox="0 0 36 36" fill="none">
          <Path d="M3 30V15L12 6L21 15V30H3ZM6 27H10.5V22.5H13.5V27H18V16.2375L12 10.2375L6 16.2375V27ZM10.5 19.5V16.5H13.5V19.5H10.5ZM24 30V13.7625L16.2375 6H20.475L27 12.525V30H24ZM30 30V11.2875L24.7125 6H28.95L33 10.05V30H30Z" fill="white" />
     </Svg>

);

export default DusunIcon;

