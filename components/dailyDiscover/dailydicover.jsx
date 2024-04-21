import React from "react";
import Header from "../ui/header";
import SeeMore from "../ui/seeMore";
import DailyDiscoverCard from "./dailyDiscoverCard";

export default function DailyDiscover() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between ">
        <div className="flex items-center  gap-2">
          <Header header="Daily Discover"></Header>
        </div>
        <SeeMore></SeeMore>
      </div>
      <DailyDiscoverCard></DailyDiscoverCard>
    </div>
  );
}
