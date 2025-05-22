import { milliseconds } from "date-fns";
import React, { useEffect, useState } from "react";

const Countdown = ({time, setTime}) => {

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    if (milliseconds <= 0) {
      return `00:00:00`;
    }
    // Convert the milliseconds to hours, minutes and seconds, then use modulus to display the converted millisecond in chunks of 60 (for mins and secs) or 24 (for hours, which is not really important but necessary for understanding).".toString().padStart(2, "0")" is to display the single digit no with a zero in front.

    let remSeconds = parseInt(Math.floor((milliseconds / 1000) % 60))
      .toString()
      .padStart(2, "0");
    let remMinutes = parseInt(Math.floor((milliseconds / (60 * 1000)) % 60))
      .toString()
      .padStart(2, "0");
    let remHours = parseInt(Math.floor(milliseconds / (60 * 60 * 1000)) % 24)
      .toString()
      .padStart(2, "0");
    return `${remHours}:${remMinutes}:${remSeconds}`;
  };

  return <div className="text-xl font-bold">{getFormattedTime(time)}</div>;
};

export default Countdown;
