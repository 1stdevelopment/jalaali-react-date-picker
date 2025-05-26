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
      {hasValue &&
        <div className="flex items-center justify-center group-hover:opacity-100 opacity-0 absolute inset-0 m-auto hover:z-10">
          <Icon.Clear
            onClick={(e) => {
              e?.stopPropagation();
              onClear?.();
              inputOnClear?.();
            }}
          />
        </div>
      }
      <div className={`flex items-center justify-center ${hasValue ? "opacity-100 group-hover:opacity-0 absolute inset-0 m-auto hover:-z-10" : " transition-opacity duration-150"}`}>
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
