import { DatePickerProps } from "../core";
export declare const generateNextMonthDays: ({ minute, hour, currentMonthWeekDay, currentMonth, year, isJalaali, disabledDates, }: {
    minute: number;
    hour: number;
    currentMonthWeekDay: number;
    currentMonth: number;
    year: number;
    disabledDates: DatePickerProps["disabledDates"];
    isJalaali?: boolean | undefined;
}) => {
    isNotCurrentMonth: boolean;
    id: string;
    isWeekend?: boolean | undefined;
    isDisabled?: boolean | undefined;
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
}[];
//# sourceMappingURL=generateNextMonthDays.d.ts.map