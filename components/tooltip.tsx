import { useState } from "react";

interface TooltipProps {
  delay: number;
  direction?: string;
  children: string | JSX.Element | JSX.Element[];
  content?: string;
}

export default function Tooltip({
  delay,
  direction,
  content,
  children,
}: TooltipProps) {
  let timeout: ReturnType<typeof setTimeout>;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay ?? 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <>
      <div
        className="Tooltip-Wrapper"
        onMouseEnter={showTip}
        onMouseLeave={hideTip}
      >
        {children}
        {active && (
          <div className={`Tooltip-Tip ${direction || "top"}`}>{content}</div>
        )}
      </div>
    </>
  );
}
