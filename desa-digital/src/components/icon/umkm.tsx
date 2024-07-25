import React from "react";
import { Svg, Path } from "react-native-svg";

const UmkmIcon = ({ size = 17, color = 'white' }) => (
     <Svg width={size} height={size} viewBox="0 0 27 27" fill="none">
     <Path d="M22.0914 8.55232L20.1947 5.01252C20.0252 4.69476 19.7242 4.5 19.4027 4.5H7.59613C7.27466 4.5 6.97365 4.69476 6.80415 5.01252L4.90749 8.55232C3.92848 10.3803 4.79644 12.9224 6.62588 13.2128C6.75739 13.2333 6.89182 13.2436 7.02625 13.2436C7.89129 13.2436 8.65697 12.7994 9.183 12.1126C9.70904 12.7994 10.4776 13.2436 11.3398 13.2436C12.2048 13.2436 12.9705 12.7994 13.4965 12.1126C14.0225 12.7994 14.7911 13.2436 15.6533 13.2436C16.5183 13.2436 17.284 12.7994 17.81 12.1126C18.339 12.7994 19.1046 13.2436 19.9668 13.2436C20.1041 13.2436 20.2356 13.2333 20.3671 13.2128C22.2024 12.9258 23.0733 10.3837 22.0914 8.55232ZM19.9726 14.3404C19.6804 14.3404 19.391 14.2891 19.1105 14.2105V17.6205H7.88837V14.2105C7.60782 14.2857 7.3185 14.3404 7.02625 14.3404C6.85091 14.3404 6.67264 14.3267 6.50022 14.2994C6.33656 14.272 6.17583 14.2276 6.02094 14.1764V20.9006C6.02094 21.5054 6.43885 21.994 6.95612 21.994H20.0486C20.5659 21.994 20.9838 21.5054 20.9838 20.9006V14.1764C20.826 14.231 20.6681 14.2755 20.5045 14.2994C20.3262 14.3267 20.1509 14.3404 19.9726 14.3404Z" fill="#676A6C"/>
     </Svg>

);

export default UmkmIcon;
