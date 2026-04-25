import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useClickOutside } from "src/core/hooks/useClickoutside";

interface SelectorProps {
  value: number;
  onChange: (value: number) => void;
  options: number[];
  dir: "ltr" | "rtl";
  id: string;
}

export const Selector = ({
  value,
  onChange,
  options,
  dir = "rtl",
  id,
}: SelectorProps) => {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({
    top: 0,
    left: 0,
    width: 40,
  });

  const rootRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const updatePosition = () => {
    const rect = rootRef.current?.getBoundingClientRect();
    if (!rect) return;

    setPos({
      top: rect.bottom + 4,
      left: rect.left,
      width: rect.width,
    });
  };

  useLayoutEffect(() => {
    if (open) updatePosition();
  }, [open]);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as Node;

      const insideDropdown = dropdownRef.current?.contains(target) ?? false;

      if (!insideDropdown && open) {
        updatePosition();
      }
    };

    window.addEventListener("resize", updatePosition);
    document.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [open]);

  useClickOutside(() => setOpen(false), [rootRef.current, dropdownRef.current]);

  return (
    <div className="time-selector-wrapper" ref={rootRef} id={id}>
      <button
        className="time-selector"
        type="button"
        onClick={() => setOpen((prev) => !prev)}
      >
        {String(value).padStart(2, "0")}
      </button>

      {open && (
        <div
          dir={dir}
          id={id}
          ref={dropdownRef}
          className="time-dropdown"
          style={{
            top: pos.top,
            left: pos.left,
            width: pos.width,
            position: "fixed",
          }}
        >
          {options.map((val) => (
            <button
              key={val}
              className={`time-option ${value === val ? "active" : ""}`}
              onClick={(e) => {
                e.currentTarget.scrollIntoView({ behavior: "smooth" });
                onChange(val);
              }}
            >
              {String(val).padStart(2, "0")}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
