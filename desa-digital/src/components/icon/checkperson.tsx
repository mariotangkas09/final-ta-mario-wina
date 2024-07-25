import React from "react";
import { View } from "react-native";
import { Svg,Path } from "react-native-svg";

const PersonChekIcon = ({size =17, colo='black'}) =>(
     <Svg width={size} height={size} viewBox="0 0 17 17" fill="none" >
     <Path d="M2.125 13.4583C2.125 11.8935 4.02779 10.625 6.375 10.625C8.72221 10.625 10.625 11.8935 10.625 13.4583" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     <Path d="M14.875 7.08325L12.0417 9.91659L10.625 8.49992" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     <Path d="M6.37484 8.49992C7.93964 8.49992 9.20817 7.23139 9.20817 5.66659C9.20817 4.10178 7.93964 2.83325 6.37484 2.83325C4.81003 2.83325 3.5415 4.10178 3.5415 5.66659C3.5415 7.23139 4.81003 8.49992 6.37484 8.49992Z" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     </Svg>
     

)

export default PersonChekIcon;