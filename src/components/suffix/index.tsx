import React, { ReactNode } from "react";
import { Icon } from "../icon";

interface SuffixProps {
  suffixIcon?: ReactNode;
  clearable?: boolean;
  onClear?: () => void;
  inputOnClear?: () => void;
  error?: boolean;
  toggle?: () => void;
}

const Suffix = ({
  clearable,
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
  if (clearable) {
    return (
      <div className="icon-wrapper">
        <Icon.Clear
          onClick={(e) => {
            e?.stopPropagation();
            onClear?.();
            inputOnClear?.();
          }}
        />
      </div>
    );
  }
  return (
    <div className="icon-wrapper">
      <Icon.Calendar
        onClick={(e?: React.MouseEvent) => {
          e?.stopPropagation();
          toggle?.();
        }}
      />
    </div>
  );
};
export { Suffix };
