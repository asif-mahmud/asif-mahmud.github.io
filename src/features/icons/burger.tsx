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
        {[3, 5, 7].map((y, i) => (
          <line
            key={i}
            x1={2}
            y1={y}
            x2={8}
            y2={y}
            stroke={stroke || "black"}
            strokeWidth="1"
          />
        ))}
      </svg>
    );
  }
);
