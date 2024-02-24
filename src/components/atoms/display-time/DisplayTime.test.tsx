import React from "react";
import { render, screen } from "../../../../setupTests";
import DisplayTime from ".";
import { getTimeString } from "./DisplayTime";

describe("Render tests for the DisplayTime component.", () => {
  it("Should display a time when the 'timeToDisplay' prop is provided.", () => {
    const time = new Date(0, 0, 0, 0);
    time.setSeconds(12);
    time.setMinutes(15);
    time.setHours(21);
    render(<DisplayTime time={time} />);
    const timeElement = screen.getByTestId("time");
    expect(timeElement).toHaveTextContent("21:15:12");
  });
});

describe("Testing pure functions", () => {
  describe("Testing 'getTimeString' function", () => {
    it("should return an empty string if the date is invalid", () => {
      const invalidDate = new Date("invalid");
      expect(getTimeString(invalidDate)).toBe("");
    });

    it("should return '00:00:00' if it is morning", () => {
      const morningDate = new Date(0, 0, 0, 0);
      morningDate.setSeconds(0);
      morningDate.setMinutes(0);
      morningDate.setHours(0);
      expect(getTimeString(morningDate)).toBe("00:00:00");
    });

    it("should return '23:59:59' if it is just before midnight", () => {
      const beforeMidnightDate = new Date(0, 0, 0, 0);
      beforeMidnightDate.setSeconds(59);
      beforeMidnightDate.setMinutes(59);
      beforeMidnightDate.setHours(23);
      expect(getTimeString(beforeMidnightDate)).toBe("23:59:59");
    });
  });
});
