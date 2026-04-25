import { act, renderHook } from "@testing-library/react-hooks";
import { ReactNode } from "react";
import { DateProvider, useDateReducer } from "../../..";

function wrapper({ children }: { children: ReactNode }) {
  return (
    <DateProvider
      props={{
        locale: "fa",
      }}
    >
      {children}
    </DateProvider>
  );
}

describe("onDaychange", () => {
  test("test useReducer 1", async () => {
    const { result } = renderHook(() => useDateReducer({ locale: "fa" }), {
      wrapper,
    });
    act(() =>
      result.current.onDaychange({
        minute: 0,
        hour: 0,
        day: 5,
        month: 7,
        year: 1401,
      }),
    );

    expect(result.current.cacheDate).toStrictEqual({
      min: 0,
      hour: 0,
      day: 5,
      month: 7,
      year: 1401,
    });
  });
});

describe("onDecreaseMonth", () => {
  test("test useReducer", async () => {
    const { result } = renderHook(() => useDateReducer({ locale: "fa" }), {
      wrapper,
    });
    act(() =>
      result.current.onDecreaseMonth({
        minute: 0,
        hour: 0,
        day: 0,
        month: 8,
        year: 1401,
      }),
    );
    expect(result.current.state).toStrictEqual({
      minute: 0,
      hour: 0,
      day: 0,
      month: 7,
      year: 1401,
    });
  });
});

describe("onIncreaseMonth", () => {
  test("test useReducer 2", async () => {
    const { result } = renderHook(() => useDateReducer({ locale: "fa" }), {
      wrapper,
    });
    act(() =>
      result.current.onIncreaseMonth({
        minute: 0,
        hour: 0,
        day: 0,
        month: 4,
        year: 1401,
      }),
    ),
      expect(result.current.state).toStrictEqual({
        minute: 0,
        hour: 0,
        day: 0,
        month: 5,
        year: 1401,
      });
  });
});
describe("onYearchange", () => {
  test("test useReducer 3", async () => {
    const { result } = renderHook(() => useDateReducer({ locale: "fa" }), {
      wrapper,
    });
    act(() =>
      result.current.onYearchange({
        minute: 0,
        hour: 0,
        day: 0,
        month: 8,
        year: 1401,
      }),
    );

    expect(result.current.state).toStrictEqual({
      minute: 0,
      hour: 0,
      day: 0,
      month: 8,
      year: 1401,
    });
  });
});
describe("onMonthchange", () => {
  test("test useReducer 4", async () => {
    const { result } = renderHook(() => useDateReducer({ locale: "fa" }), {
      wrapper,
    });
    act(() =>
      result.current.onMonthchange({
        minute: 0,
        hour: 0,
        day: 0,
        month: 8,
        year: 1403,
      }),
    );

    expect(result.current.state).toStrictEqual({
      minute: 0,
      hour: 0,
      day: 0,
      month: 8,
      year: 1403,
    });
  });
});
describe("onIncreaseYear", () => {
  test("test useReducer 5", async () => {
    const { result } = renderHook(() => useDateReducer({ locale: "fa" }), {
      wrapper,
    });
    act(() =>
      result.current.onIncreaseYear({
        minute: 0,
        hour: 0,
        day: 1,
        month: 9,
        year: 1401,
      }),
    );
    expect(result.current.state).toStrictEqual({
      minute: 0,
      hour: 0,
      day: 0,
      month: 9,
      year: 1402,
    });
  });
});
describe("onDecreaseYear", () => {
  test("test useReducer 6", async () => {
    const { result } = renderHook(() => useDateReducer({ locale: "fa" }), {
      wrapper,
    });
    act(() =>
      result.current.onDecreaseYear({
        minute: 0,
        hour: 0,
        day: 1,
        month: 4,
        year: 1401,
      }),
    );
    expect(result.current.state).toStrictEqual({
      minute: 0,
      hour: 0,
      day: 0,
      month: 4,
      year: 1400,
    });
  });
});
