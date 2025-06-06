import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const SVGComponent = (props) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <G clipPath="url(#clip0_608_14584)">
            <Path
                d="M16 1C16.552 1 17 1.448 17 2V5H21C21.552 5 22 5.448 22 6V20C22 20.552 21.552 21 21 21H3C2.448 21 2 20.552 2 20V6C2 5.448 2.448 5 3 5H7V2C7 1.448 7.448 1 8 1H16ZM20 7H4V19H20V7ZM13 9V12H16V14H12.999L13 17H11L10.999 14H8V12H11V9H13ZM15 3H9V5H15V3Z"
                fill="#4D507A"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_608_14584">
                <Rect width={24} height={24} fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default SVGComponent;
