import { RotatingSquares } from "features/loaders";

export default function PendingStateView() {
  return (
    <div className="pending-state-view">
      <div style={{ width: "80px", height: "80px" }}>
        <RotatingSquares />
      </div>
    </div>
  );
}
