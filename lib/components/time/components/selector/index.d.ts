interface SelectorProps {
    value: number;
    onChange: (value: number) => void;
    options: number[];
    dir: "ltr" | "rtl";
    id: string;
}
export declare const Selector: ({ value, onChange, options, dir, id, }: SelectorProps) => JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map