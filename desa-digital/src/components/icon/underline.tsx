import React from "react";
import { View } from "react-native";
import { Svg, Rect } from "react-native-svg";

const Underline = ({ size = 339, color = "#676A6C" }) => (
     <View>
          <Svg width={size} height="3" viewBox="0 0 330 3" fill="none" >
               <Rect width={size} height="3" rx="1.5" fill={color} />
          </Svg>
     </View>
);

export default Underline;