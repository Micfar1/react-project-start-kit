import React from "react";
import { act, render, screen, waitFor } from "../setupTests";
import App from "./App";
import { getTimeString } from "./components/atoms/display-time/DisplayTime";

describe("Render tests for the app component.", () => {
  let date = new Date();
  beforeEach(() => {
    date = new Date();
    jest.useFakeTimers();
    jest.setSystemTime(date.getTime());
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should display the time and update the time every second", async () => {
    render(<App />);
    const timeElement = screen.getByTestId("time");
    expect(timeElement).toHaveTextContent(getTimeString(date));

    await act(async () => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => {
      const newDate = new Date(date.getTime() + 3000);
      const timeElement3s = screen.getByTestId("time");
      expect(timeElement3s).toHaveTextContent(getTimeString(newDate));
    });
  });
});
