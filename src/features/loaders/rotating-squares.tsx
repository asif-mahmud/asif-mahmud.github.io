const OuterBoxWidth = 50;
const InnerBoxWidth = 16;
const BoxGutter = 5;
const BoxStrokeWidth = 2;
const TopLeftBoxX = BoxStrokeWidth + BoxGutter;
const TopLeftBoxY = BoxStrokeWidth + BoxGutter;
const TopRightBoxX = TopLeftBoxX + InnerBoxWidth + BoxGutter;
const TopRightBoxY = TopLeftBoxY;
const BottomRightBoxX = TopRightBoxX;
const BottomRightBoxY = TopLeftBoxY + InnerBoxWidth + BoxGutter;
const BottomLeftBoxX = TopLeftBoxX;
const BottomLeftBoxY = BottomRightBoxY;

export default function RotatingSquares() {
  return (
    <svg
      className="rotating-squares"
      viewBox={`0 0 ${OuterBoxWidth} ${OuterBoxWidth}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width={OuterBoxWidth} height={OuterBoxWidth} />

      {[
        [TopLeftBoxX, TopLeftBoxY],
        [TopRightBoxX, TopRightBoxY],
        [BottomRightBoxX, BottomRightBoxY],
        [BottomLeftBoxX, BottomLeftBoxY],
      ].map(([x, y], index) => (
        <rect
          key={index}
          x={x}
          y={y}
          width={InnerBoxWidth}
          height={InnerBoxWidth}
        />
      ))}
    </svg>
  );
}
