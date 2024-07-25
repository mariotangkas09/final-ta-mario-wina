import React from "react";
import { Svg, Path, G, Defs, Rect } from "react-native-svg";

const BfIcon = ({ size = 17, color = 'black' }) => (
     <Svg width={size} height={size} viewBox="0 0 21 21" fill="none">
          <Path d="M14.4375 6.07031C14.2598 6.07031 14.106 6.00537 13.9761 5.87549C13.8462 5.74561 13.7812 5.5918 13.7812 5.41406C13.7812 5.06543 13.8462 4.73047 13.9761 4.40918C14.106 4.08789 14.2974 3.8042 14.5503 3.55811L15.3604 2.73779C15.6201 2.47803 15.75 2.16699 15.75 1.80469C15.75 1.62695 15.8149 1.47314 15.9448 1.34326C16.0747 1.21338 16.2285 1.14844 16.4062 1.14844C16.584 1.14844 16.7378 1.21338 16.8677 1.34326C16.9976 1.47314 17.0625 1.62695 17.0625 1.80469C17.0625 2.15332 16.9976 2.48828 16.8677 2.80957C16.7378 3.13086 16.5464 3.41455 16.2935 3.66064L15.4834 4.48096C15.2236 4.74072 15.0938 5.05176 15.0938 5.41406C15.0938 5.5918 15.0288 5.74561 14.8989 5.87549C14.769 6.00537 14.6152 6.07031 14.4375 6.07031ZM10.5 6.07031C10.3223 6.07031 10.1685 6.00537 10.0386 5.87549C9.90869 5.74561 9.84375 5.5918 9.84375 5.41406C9.84375 5.06543 9.90869 4.73047 10.0386 4.40918C10.1685 4.08789 10.3599 3.8042 10.6128 3.55811L11.4229 2.73779C11.6826 2.47803 11.8125 2.16699 11.8125 1.80469C11.8125 1.62695 11.8774 1.47314 12.0073 1.34326C12.1372 1.21338 12.291 1.14844 12.4688 1.14844C12.6465 1.14844 12.8003 1.21338 12.9302 1.34326C13.0601 1.47314 13.125 1.62695 13.125 1.80469C13.125 2.15332 13.0601 2.48828 12.9302 2.80957C12.8003 3.13086 12.6089 3.41455 12.356 3.66064L11.5459 4.48096C11.2861 4.74072 11.1562 5.05176 11.1562 5.41406C11.1562 5.5918 11.0913 5.74561 10.9614 5.87549C10.8315 6.00537 10.6777 6.07031 10.5 6.07031ZM19.0312 7.875C19.3047 7.875 19.561 7.92627 19.8003 8.02881C20.0396 8.13135 20.248 8.27148 20.4258 8.44922C20.6035 8.62695 20.7437 8.83545 20.8462 9.07471C20.9487 9.31396 21 9.57031 21 9.84375V13.7812C21 14.0547 20.9487 14.311 20.8462 14.5503C20.7437 14.7896 20.6035 14.998 20.4258 15.1758C20.248 15.3535 20.0396 15.4937 19.8003 15.5962C19.561 15.6987 19.3047 15.75 19.0312 15.75H18.4468C18.4331 15.7979 18.4229 15.8423 18.416 15.8833C18.4092 15.9243 18.3955 15.9653 18.375 16.0063V16.4062C18.375 16.8574 18.2896 17.2812 18.1187 17.6777C17.9478 18.0742 17.7119 18.4229 17.4111 18.7236C17.1104 19.0244 16.7617 19.2603 16.3652 19.4312C15.9687 19.6021 15.5449 19.6875 15.0938 19.6875H11.1562C10.623 19.6875 10.1309 19.5679 9.67969 19.3286C9.22852 19.0894 8.85254 18.7715 8.55176 18.375H3.4248C2.97363 18.375 2.5498 18.2896 2.15332 18.1187C1.75684 17.9478 1.4082 17.7153 1.10742 17.4214C0.806641 17.1274 0.570801 16.7788 0.399902 16.3755C0.229004 15.9722 0.143555 15.5449 0.143555 15.0938V14.4375H2.76855C2.76855 13.8975 2.87109 13.3882 3.07617 12.9097C3.28125 12.4312 3.56494 12.0142 3.92725 11.6587C4.28955 11.3032 4.70654 11.0195 5.17822 10.8076C5.6499 10.5957 6.15918 10.4932 6.70605 10.5C6.91113 10.5 7.10938 10.5171 7.30078 10.5513C7.49219 10.5854 7.68359 10.6333 7.875 10.6948V6.5625H18.375V7.875H19.0312ZM6.70605 11.8125C6.34375 11.8125 6.00537 11.8809 5.69092 12.0176C5.37646 12.1543 5.09619 12.3423 4.8501 12.5815C4.604 12.8208 4.41602 13.0977 4.28613 13.4121C4.15625 13.7266 4.08789 14.0684 4.08105 14.4375H7.875V12.0996C7.69727 12.0107 7.5127 11.9424 7.32129 11.8945C7.12988 11.8467 6.9248 11.8193 6.70605 11.8125ZM3.4248 17.0625H7.94678C7.89893 16.8643 7.875 16.6455 7.875 16.4062V15.75H1.56885C1.63721 15.9414 1.73291 16.1157 1.85596 16.2729C1.979 16.4302 2.11914 16.5703 2.27637 16.6934C2.43359 16.8164 2.61133 16.9053 2.80957 16.96C3.00781 17.0146 3.21289 17.0488 3.4248 17.0625ZM8.17236 17.7495V17.7598L8.18262 17.7803V17.77L8.17236 17.7495ZM17.0625 16.4062V7.875H9.1875V16.4062C9.1875 16.6797 9.23877 16.936 9.34131 17.1753C9.44385 17.4146 9.58398 17.623 9.76172 17.8008C9.93945 17.9785 10.1479 18.1187 10.3872 18.2212C10.6265 18.3237 10.8828 18.375 11.1562 18.375H15.0938C15.3672 18.375 15.6235 18.3237 15.8628 18.2212C16.1021 18.1187 16.3105 17.9785 16.4883 17.8008C16.666 17.623 16.8062 17.4146 16.9087 17.1753C17.0112 16.936 17.0625 16.6797 17.0625 16.4062ZM19.6875 13.7812V9.84375C19.6875 9.66602 19.6226 9.51221 19.4927 9.38232C19.3628 9.25244 19.209 9.1875 19.0312 9.1875H18.375V14.4375H19.0312C19.209 14.4375 19.3628 14.3726 19.4927 14.2427C19.6226 14.1128 19.6875 13.959 19.6875 13.7812Z" fill="black" />
     </Svg>
);
export default BfIcon;

