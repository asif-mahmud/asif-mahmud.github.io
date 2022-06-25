import { forwardRef } from "react";

export default forwardRef<SVGSVGElement, { fill?: string; stroke?: string }>(
  (props, ref) => {
    const { fill, stroke, ...rest } = props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 10"
        {...rest}
        ref={ref}
      >
        <line
          x1={2}
          y1={2}
          x2={8}
          y2={8}
          stroke={stroke || "black"}
          strokeWidth={1}
        />
        <line
          x1={8}
          y1={2}
          x2={2}
          y2={8}
          stroke={stroke || "black"}
          strokeWidth={1}
        />
      </svg>
    );
  }
);
