import { forwardRef } from "react";

export default forwardRef<SVGSVGElement, { fill?: string; stroke?: string }>(
  (props, ref) => {
    const { fill, stroke, ...rest } = props;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        {...rest}
        ref={ref}
      >
        <circle
          cx="25"
          cy="25"
          r="8"
          fill={fill || "none"}
          stroke={stroke || "black"}
          strokeWidth="1"
        />

        <path
          fill={fill || "none"}
          stroke={stroke || "black"}
          strokeWidth="1"
          d="M 25 6 v 6
             M 25 44 v -6
             M 6 25 h 6
             M 44 25 h -6
             M 15 9 l 3 5
             M 9 15 l 5 3
             M 9 35 l 5 -3
             M 15 41 l 3 -5
             M 35 41 l -3 -5
             M 41 35 l -5 -3
             M 35 9 l -3 5
             M 41 15 l -5 3"
        />
      </svg>
    );
  }
);
