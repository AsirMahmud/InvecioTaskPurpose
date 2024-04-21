import React from "react";
import Header from "../ui/header";
import WeeklyVendorCard from "./weeklyVendorCard";

export default function WeeklyVendor() {
  return (
    <div className="flex flex-col gap-4">
      <Header header="Weekly Vendors"></Header>
      <WeeklyVendorCard></WeeklyVendorCard>
    </div>
  );
}
