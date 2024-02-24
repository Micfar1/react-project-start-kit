import React, { useState } from "react";

interface iDisplayTimeProps {
  time: Date;
}

export const getTimeString = (date: Date): string => {
  if (isNaN(date.getTime())) return "";
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

const DisplayTime = ({ time }: iDisplayTimeProps) => {
  return <h1 data-testid="time">{getTimeString(time)}</h1>;
};

export default DisplayTime;
