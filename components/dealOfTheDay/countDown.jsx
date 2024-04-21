import React from "react";
import Countdown from "react-countdown";
const Completionist = () => <span>You are good to go!</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        <div className="flex gap-4 bg-slate-100 h-[55px] p-4  justify-center">
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-red-400">{days}</p>
            <p className="text-sm">Days</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-red-400">{hours}</p>
            <p className="text-sm">Hours</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-red-400">{minutes}</p>
            <p className="text-sm">Minutes</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-red-400">{seconds}</p>
            <p className="text-sm">Seconds</p>
          </div>
        </div>
      </span>
    );
  }
};
export default function CountDownMain() {
  return (
    <div>
      <Countdown date={Date.now() + 500000000} renderer={renderer}>
        <Completionist></Completionist>
      </Countdown>
    </div>
  );
}
