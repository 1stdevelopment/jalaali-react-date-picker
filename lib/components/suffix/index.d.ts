import { ReactNode } from "react";
interface SuffixProps {
    suffixIcon?: ReactNode;
    clearable?: boolean;
    onClear?: () => void;
    inputOnClear?: () => void;
    error?: boolean;
    toggle?: () => void;
}
declare const Suffix: ({ clearable, suffixIcon, onClear, inputOnClear, error, toggle, }: SuffixProps) => JSX.Element;
export { Suffix };
//# sourceMappingURL=index.d.ts.map