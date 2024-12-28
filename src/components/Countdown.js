import React, { useEffect, useState } from "react";

const presaleExpiration = new Date("2024-12-13T00:00:00+05:30").getTime(); // Specify the time zone here

const Countdown = () => {
  const [remainingTime, setRemainingTime] = useState("00:00:00");

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      let timeRemaining = presaleExpiration - now;

      if (timeRemaining <= 0) {
        setRemainingTime("00:00:00");
        clearInterval(interval);
        return;
      }

      const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));
      timeRemaining -= hoursRemaining * 60 * 60 * 1000;

      const minutesRemaining = Math.floor(timeRemaining / (1000 * 60));
      timeRemaining -= minutesRemaining * 60 * 1000;

      const secondsRemaining = Math.floor(timeRemaining / 1000);

      const formattedTime = [
        hoursRemaining.toString().padStart(2, "0"),
        minutesRemaining.toString().padStart(2, "0"),
        secondsRemaining.toString().padStart(2, "0"),
      ].join(":");

      setRemainingTime(formattedTime);
    };

    const interval = setInterval(updateCountdown, 1000);

    updateCountdown();

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="font-saira-condensed font-semibold text-[42px] sm:text-[50px] md:text-[75px] lg:text-[85px] xl:text-[85px] 2xl:text-[90px]">
      {remainingTime}
    </h2>
  );
};

export default Countdown;
