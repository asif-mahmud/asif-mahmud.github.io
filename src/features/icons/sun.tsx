import { forwardRef } from "react";

const boxWidth = 50;
const boxHeight = 50;
const boxCenterX = boxWidth / 2;
const boxCenterY = boxHeight / 2;
const centerCircleRadius = 8;
const centerCircleGutter = 4;
const lineCoords = [];
const steps = 12;
const angleStep = (2 * Math.PI) / steps; // 30 degrees
const innerBorderRadius = centerCircleRadius + centerCircleGutter;
const outerBorderRadius = innerBorderRadius + 6;
for (let i = 0; i < steps; i++) {
  lineCoords.push([
    // x1, y1
    boxCenterX + innerBorderRadius * Math.cos(i * angleStep),
    boxCenterY + innerBorderRadius * Math.sin(i * angleStep),
    // x2, y2
    boxCenterX + outerBorderRadius * Math.cos(i * angleStep),
    boxCenterY + outerBorderRadius * Math.sin(i * angleStep),
  ]);
}
let pathString = "";
lineCoords.forEach((coord) => {
  pathString += `M ${coord[0]} ${coord[1]} L ${coord[2]} ${coord[3]} `;
});

export default forwardRef<SVGSVGElement, { fill?: string; stroke?: string }>(
  (props, ref) => {
    const { fill, stroke, ...rest } = props;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${boxWidth} ${boxHeight}`}
        {...rest}
        ref={ref}
      >
        <circle
          cx={boxCenterX}
          cy={boxCenterY}
          r={centerCircleRadius}
          fill={fill || "none"}
          stroke={stroke || "black"}
          strokeWidth="1"
        />

        <path
          fill={fill || "none"}
          stroke={stroke || "black"}
          strokeWidth="1"
          d={pathString}
        />
      </svg>
    );
  }
);
