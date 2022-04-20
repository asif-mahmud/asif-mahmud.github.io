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
        <path
          fill={fill || "none"}
          stroke={stroke || "black"}
          strokeWidth="1"
          d="M 24 7 A 10 10 20 0 1 8,30 A 16 16 30 1 0 23,7"
        ></path>
      </svg>
    );
  }
);
