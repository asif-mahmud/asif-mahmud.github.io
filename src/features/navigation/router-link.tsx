import { MatchRoute, useNavigate } from "@tanstack/react-location";
import { MouseEventHandler } from "react";

/**
 * Using Link component from react location doesn't
 * let setting the hash url to anchor tag. Fortunately
 * react location has MathRoute component to conditionally
 * render anything on route match. Using it along with
 * useNavigate lets use do the following -
 * 1. put direct hash URL in anchors href
 * 2. navigate on click using react location's history
 * 3. let browser's history work along with the navigation
 * 4. can add active class conditionally
 * This is essential for avoiding 404 errors from any
 * search engine crawler.
 */
export default function RouterLink({
  to,
  label,
  ...rest
}: {
  to: string;
  label: string;
  [key: string]: unknown;
}) {
  const navigate = useNavigate();

  const onClickHandler: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    navigate({ to, replace: false });
  };

  return (
    <MatchRoute to={to}>
      {(match) =>
        match ? (
          <a
            href={`/#${to}`}
            className="active"
            onClick={onClickHandler}
            {...rest}
          >
            {label}
          </a>
        ) : (
          <a href={`/#${to}`} onClick={onClickHandler} {...rest}>
            {label}
          </a>
        )
      }
    </MatchRoute>
  );
}
