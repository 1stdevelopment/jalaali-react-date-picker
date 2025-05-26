import React, { ReactNode } from "react";
import { Icon } from "../icon";

interface SuffixProps {
  suffixIcon?: ReactNode;
  hasValue?: boolean;
  onClear?: () => void;
  inputOnClear?: () => void;
  error?: boolean;
  toggle?: () => void;
}

const Suffix = ({
  hasValue,
  suffixIcon,
  onClear,
  inputOnClear,
  error,
  toggle,
}: SuffixProps) => {
  if (suffixIcon || suffixIcon === null) {
    return <>{suffixIcon}</>;
  }

  if (error) {
    return (
      <div className="icon-wrapper">
        <Icon.Error />
      </div>
    );
  }

  return (
    <div className="icon-wrapper relative min-w-[35px] min-h-[20px]">
      {hasValue && (
        <div className="icon-clear-wrapper">
          <Icon.Clear
            onClick={(e) => {
              e?.stopPropagation();
              onClear?.();
              inputOnClear?.();
            }}
          />
        </div>
      )}
      <div
        className={`icon-calendar-wrapper ${hasValue ? "has-icon-clear" : ""}`}
      >
        <Icon.Calendar
          onClick={(e?: React.MouseEvent) => {
            e?.stopPropagation();
            toggle?.();
          }}
        />
      </div>
    </div>
  );
};
export { Suffix };
