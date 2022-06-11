import { ReactNode, useMemo, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import RotatingSquares from "./rotating-squares";

export default function Suspense({
  children,
  fallback: Fallback = () => (
    <div style={{ width: "80px", height: "80px" }}>
      <RotatingSquares />
    </div>
  ),
  delayMS = 2000,
}: {
  children: () => Promise<any>;
  fallback?: () => JSX.Element;
  delayMS?: number;
}): JSX.Element {
  const [child, setChild] = useState<ReactNode>(null);
  const [out, setOut] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [showFallback, setShowFallback] = useState(true);

  useMemo(async () => {
    if (children) {
      const child = await children();
      /* console.log({ child, default: child.default }); */
      setChild(child.default);
      setOut(true);
    }
  }, []);

  return (
    <CSSTransition
      timeout={delayMS}
      in={!out}
      nodeRef={nodeRef}
      classNames="suspense"
      onExited={() => {
        setShowFallback(true);
      }}
    >
      <div ref={nodeRef} className="suspense">
        {showFallback && (
          <div
            className="fallback-wrapper"
            style={{
              transition: `opacity ${delayMS}ms ease-in`,
            }}
          >
            <Fallback />
          </div>
        )}
        <div
          className="suspense-content"
          style={{
            transition: `opacity ${delayMS}ms ease-out`,
          }}
        >
          {child}
        </div>
      </div>
    </CSSTransition>
  );
}
