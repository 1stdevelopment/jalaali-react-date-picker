import { ReactNode } from "react";
interface SuffixProps {
    suffixIcon?: ReactNode;
    hasValue?: boolean;
    onClear?: () => void;
    inputOnClear?: () => void;
    error?: boolean;
    toggle?: () => void;
}
declare const Suffix: ({ hasValue, suffixIcon, onClear, inputOnClear, error, toggle, }: SuffixProps) => JSX.Element;
export { Suffix };
//# sourceMappingURL=index.d.ts.map