import React from 'react';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const DoughnutChart = ({ data }) => {
     const radius = 40;
     const strokeWidth = 20;
     const circumference = 2 * Math.PI * radius;

     let offset = 0;
     const circles = data.map((item, index) => {
          const dasharray = `${circumference * item.percentage / 100} ${circumference}`;
          const circle = (
               <Circle
                    key={index}
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke={item.color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={dasharray}
                    strokeDashoffset={offset}
                    fill="none"
               />
          );
          offset -= circumference * item.percentage / 100;
          return circle;
     });
     return (
          <View>
               <Svg height="100" width="100">
                    {circles}
               </Svg>
          </View>
     );
}

export default DoughnutChart;
