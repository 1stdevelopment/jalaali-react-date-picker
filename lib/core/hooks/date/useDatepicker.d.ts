import moment from "moment-jalaali";
import { Date } from "src/core/types";
export declare const useDatepicker: () => {
    offset: number;
    onMinuteChange: (payload: Date) => void;
    onHourChange: (payload: Date) => void;
    onDaychange: (payload: Date) => void;
    onIncreaseYear: (payload: Date) => void;
    onDecreaseYear: (payload: Date) => void;
    onIncreaseMonth: (payload: Date) => void;
    onDecreaseMonth: (payload: Date) => void;
    changePlaceholder: (payload: Date | null) => void;
    setOffset: (offset: number) => void;
    value?: moment.Moment | null | undefined;
    onChange?: ((date: moment.Moment | null | undefined, dateString: string) => void) | undefined;
    format?: string | (((value: moment.Moment) => string) & string) | undefined;
    state: Date;
    onDateChange: (payload: Date, closePicker?: boolean | undefined) => void;
    goToToday: () => void;
    isJalaali: boolean;
    locale: import("src/core/types").Locale;
    dayLabels: string[];
    cacheDate: Date | undefined;
    onMonthchange: (payload: Date) => void;
    onYearchange: (payload: Date) => void;
};
//# sourceMappingURL=useDatepicker.d.ts.map