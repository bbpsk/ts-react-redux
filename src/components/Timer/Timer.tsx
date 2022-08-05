import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { formatSeconds, calcSeconds } from "../../utils/formatTime";

const Timer = () => {
  const timer = useSelector((state: RootState) => state.timer);
  const { t } = useTranslation();

  const initialTime = timer.isRunning
    ? formatSeconds(calcSeconds(timer.startTime, timer.offset))
    : formatSeconds(timer.offset);
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (timer.isRunning) {
      interval = setInterval(() => {
        const seconds = calcSeconds(timer.startTime, timer.offset);
        const formatted = formatSeconds(seconds);
        setTime(formatted);
      }, 1000);
    } else if (timer.offset === 0) {
      setTime("0:00");
    }
    return () => {
      clearInterval(interval);
    };
  }, [timer.isRunning, timer.offset]);

  return (
    <div className="mb-3 d-flex justify-content-between">
      <div>{t("examples.timer")}</div>
      <div className=" fw-bold">{time}</div>
    </div>
  );
};

export default Timer;
